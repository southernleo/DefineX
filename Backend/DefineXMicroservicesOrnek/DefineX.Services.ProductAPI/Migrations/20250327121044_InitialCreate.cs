using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace DefineX.Services.ProductAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ProductId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CategoryName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ProductId);
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductId", "CategoryName", "Description", "ImageUrl", "Name", "Price" },
                values: new object[,]
                {
                    { 1, "YENİ GELEN ÜRÜNLER", "A stylish black dress that combines elegance and comfort. Perfect for both formal and casual occasions.", "1.png", "Black Dress", 150.0 },
                    { 2, "TREND", "A beautiful floral blouse that brings a touch of nature to your wardrobe. Light and comfortable for everyday wear.", "2.png", "Floral Blouse", 130.99000000000001 },
                    { 3, "featured products", "A chic white summer dress perfect for sunny days. Made from breathable fabric for maximum comfort.", "3.png", "White Summer Dress", 100.98999999999999 },
                    { 4, "on sale", "A stunning blue cocktail dress that exudes sophistication. Perfect for evening events or special occasions.", "4.png", "Blue Cocktail Dress", 125.0 },
                    { 5, "YENİ GELEN ÜRÜNLER", "A luxurious red silk blouse that adds a touch of glamour to any outfit. Soft and smooth, perfect for evening outings.", "5.png", "Red Silk Blouse", 135.99000000000001 },
                    { 6, "YENİ GELEN ÜRÜNLER", "A cozy grey sweater made with soft fabric. Ideal for colder days, it pairs well with jeans or skirts for a relaxed look.", "6.png", "Grey Sweater", 120.98999999999999 },
                    { 7, "TREND", "A cute pink skirt perfect for warm days. Its light fabric and comfortable fit make it an essential for your summer wardrobe.", "7.png", "Pink Summer Skirt", 95.5 },
                    { 8, "TREND", "A bold black leather jacket that brings an edge to any outfit. Durable and stylish, perfect for cooler seasons.", "8.png", "Black Leather Jacket", 220.99000000000001 },
                    { 9, "featured products", "Light and breathable beige linen pants. Perfect for summer days, offering both comfort and elegance.", "9.png", "Beige Linen Pants", 110.5 },
                    { 10, "featured products", "A versatile black pencil skirt, perfect for both work and formal occasions. Comfortable fit with a professional look.", "10.png", "Black Pencil Skirt", 95.989999999999995 },
                    { 11, "on sale", "A flattering green A-line dress that works well for both casual and formal events. Comfortable and stylish.", "11.png", "Green A-Line Dress", 135.0 },
                    { 12, "on sale", "A classic white blazer that gives your outfit a sophisticated and polished look. Ideal for office wear or evening events.", "12.png", "White Blazer", 150.0 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
