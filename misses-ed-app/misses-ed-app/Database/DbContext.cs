using Microsoft.EntityFrameworkCore;
using misses_ed_app.Entities;


namespace misses_ed_app.Database
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        { }
        
        public DbSet<User> Users { get; set; }
    }

}