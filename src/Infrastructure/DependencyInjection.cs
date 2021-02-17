using Uploader.Application.Common.Interfaces;
using Uploader.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Data.SqlClient;

namespace Uploader.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            var builder = new SqlConnectionStringBuilder(
                configuration.GetConnectionString("DefaultConnection"));
            builder.UserID = configuration["Db:UserId"];
            builder.Password = configuration["Db:Password"];

            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(
                    builder.ConnectionString,
                    b => b.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName)));

            services.AddScoped<IApplicationDbContext>(provider => provider.GetService<ApplicationDbContext>());

            return services;
        }
    }
}