using DefineX.Services.ProductAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace DefineX.Services.ProductAPI.dbcontexts
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 1,
                Name = "Black Dress",
                Price = 150,
                Description = "A stylish black dress that combines elegance and comfort. Perfect for both formal and casual occasions.",
                ImageUrl = "1.png",
                CategoryName = "YENİ GELEN ÜRÜNLER"
            });

            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 2,
                Name = "Floral Blouse",
                Price = 130.99,
                Description = "A beautiful floral blouse that brings a touch of nature to your wardrobe. Light and comfortable for everyday wear.",
                ImageUrl = "2.png",
                CategoryName = "TREND"
            });

            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 3,
                Name = "White Summer Dress",
                Price = 100.99,
                Description = "A chic white summer dress perfect for sunny days. Made from breathable fabric for maximum comfort.",
                ImageUrl = "3.png",
                CategoryName = "featured products"
            });

            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 4,
                Name = "Blue Cocktail Dress",
                Price = 125,
                Description = "A stunning blue cocktail dress that exudes sophistication. Perfect for evening events or special occasions.",
                ImageUrl = "4.png",
                CategoryName = "on sale"
            });
            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 5,
                Name = "Red Silk Blouse",
                Price = 135.99,
                Description = "A luxurious red silk blouse that adds a touch of glamour to any outfit. Soft and smooth, perfect for evening outings.",
                ImageUrl = "5.png",
                CategoryName = "YENİ GELEN ÜRÜNLER"
            });

            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 6,
                Name = "Grey Sweater",
                Price = 120.99,
                Description = "A cozy grey sweater made with soft fabric. Ideal for colder days, it pairs well with jeans or skirts for a relaxed look.",
                ImageUrl = "6.png",
                CategoryName = "YENİ GELEN ÜRÜNLER"
            });

            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 7,
                Name = "Pink Summer Skirt",
                Price = 95.50,
                Description = "A cute pink skirt perfect for warm days. Its light fabric and comfortable fit make it an essential for your summer wardrobe.",
                ImageUrl = "7.png",
                CategoryName = "TREND"
            });

            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 8,
                Name = "Black Leather Jacket",
                Price = 220.99,
                Description = "A bold black leather jacket that brings an edge to any outfit. Durable and stylish, perfect for cooler seasons.",
                ImageUrl = "8.png",
                CategoryName = "TREND"
            });

            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 9,
                Name = "Beige Linen Pants",
                Price = 110.50,
                Description = "Light and breathable beige linen pants. Perfect for summer days, offering both comfort and elegance.",
                ImageUrl = "9.png",
                CategoryName = "featured products"
            });

            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 10,
                Name = "Black Pencil Skirt",
                Price = 95.99,
                Description = "A versatile black pencil skirt, perfect for both work and formal occasions. Comfortable fit with a professional look.",
                ImageUrl = "10.png",
                CategoryName = "featured products"
            });

            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 11,
                Name = "Green A-Line Dress",
                Price = 135,
                Description = "A flattering green A-line dress that works well for both casual and formal events. Comfortable and stylish.",
                ImageUrl = "11.png",
                CategoryName = "on sale"
            });

            modelBuilder.Entity<Product>().HasData(new Product
            {
                ProductId = 12,
                Name = "White Blazer",
                Price = 150,
                Description = "A classic white blazer that gives your outfit a sophisticated and polished look. Ideal for office wear or evening events.",
                ImageUrl = "12.png",
                CategoryName = "on sale"
            });


        }
    }
}
