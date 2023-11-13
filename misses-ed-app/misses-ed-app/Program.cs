using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore;
using System;
using misses_ed_app.Entities;
using misses_ed_app.Database;
using misses_ed_app.Interfaces.UserManagement;
using misses_ed_app.Services.UserManagement;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IUserService, UserService>();

var connection = String.Empty;
if (builder.Environment.IsDevelopment())
{
    builder.Configuration.AddEnvironmentVariables().AddJsonFile("appsettings.Development.json");
    connection = builder.Configuration.GetConnectionString("AZURE_SQL_CONNECTIONSTRING");
}
else
{
    connection = Environment.GetEnvironmentVariable("AZURE_SQL_CONNECTIONSTRING");
}

builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(connection));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
} else
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();

/*app.MapGet("/User", (UserDbContext context) =>
{
    return context.User.ToList();
})
.WithName("GetUsers").WithOpenApi();

app.MapPost("/User", (User user, UserDbContext context) =>
{
    context.Add(user);
    context.SaveChanges();
}).WithName("CreateUser").WithOpenApi();*/


// public class UserDbContext : DbContext
// {
//     public UserDbContext(DbContextOptions<UserDbContext> options)
//         : base(options)
//     {
//     }

//     public DbSet<User> User { get; set; }
// }
