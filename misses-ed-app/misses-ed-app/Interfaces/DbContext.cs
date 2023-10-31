using Microsoft.EntityFrameworkCore;

public class UserContext : DbContext
{
    public UserContext(DbContextOptions<UserContext> options) : base(options)
    { }
    public DbSet<User> CatalogItems { get; set; }

}