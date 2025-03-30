using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Ocelot.DependencyInjection;
using Ocelot.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add controllers if needed
builder.Services.AddControllers();

// Genel yapýlandýrma dosyalarýný yükle
builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
builder.Configuration.AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true);

// Ocelot yapýlandýrmasýný yükleme
builder.Configuration.AddJsonFile("ocelot.json", optional: false, reloadOnChange: true);

// Ocelot servisini ekleme
builder.Services.AddOcelot();

// CORS politikasý ekleme - Tüm originlere izin ver
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder => builder
            .AllowAnyOrigin() // Tüm originlere izin ver
            .AllowAnyMethod()
            .AllowAnyHeader());

    // Varolan politikayý da tut (configuration'dan gelen)
    var corsOrigins = builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>();
    options.AddPolicy("CorsPolicy",
        builder => builder
            .WithOrigins(corsOrigins ?? Array.Empty<string>())
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials());
});

// Identity Server ile entegrasyon
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer("Bearer", options =>
    {
        options.Authority = builder.Configuration["IdentityServer:Authority"];
        options.RequireHttpsMetadata = builder.Configuration.GetValue<bool>("IdentityServer:RequireHttpsMetadata");
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateAudience = false,
            ValidateIssuer = true,
            ValidateLifetime = true,
            ClockSkew = TimeSpan.Zero
        };
    });

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

// Middleware sýralamasý önemli
app.UseRouting();

// CORS kullanýmýný etkinleþtirme - Tüm originlere izin ver
app.UseCors("AllowAllOrigins");

// Kimlik doðrulama ve yetkilendirme middleware'ini ekleyin
app.UseAuthentication();
app.UseAuthorization();

// Endpoint ayarlarý
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

// Ocelot middleware'ini ekleyin
await app.UseOcelot();

app.Run();