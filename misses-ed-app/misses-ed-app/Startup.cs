using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore;
using System;
using misses_ed_app.Entities;
using misses_ed_app.Database;
using misses_ed_app.Interfaces.UserManagement;
using misses_ed_app.Services.UserManagement;
using Microsoft.OpenApi.Models;


namespace misses_ed_app
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        
        public IConfiguration Configuration { get; }
        
        public void ConfigureServices(IServiceCollection services)
        {
            // var connection = builder.Configuration.GetConnectionString("AZURE_SQL_CONNECTIONSTRING");

            var connection = Environment.GetEnvironmentVariable("AZURE_SQL_CONNECTIONSTRING");

            services.AddDbContext<AppDbContext>(options =>
                options.UseSqlServer(connection));
            
            services.AddControllers();
            
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo {Title = "misses_ed_app", Version = "v1"});
            });
            
            services.AddScoped<IUserService, UserService>();
        }
        
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseSwagger();
            
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "misses_ed_app v1"));
            
            app.UseHttpsRedirection();

            app.UseStaticFiles();
            
            app.UseRouting();
            
            app.UseAuthorization();
            
            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }
    }
}