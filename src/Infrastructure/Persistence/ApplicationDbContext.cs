using Uploader.Application.Common.Interfaces;
using Uploader.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Uploader.Infrastructure.Persistence
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext
    {
        public DbSet<UploadedFile> Files { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //TODO: Move configuration to separate file (per type)
            modelBuilder
                .Entity<UploadedFile>()
                .Property(b => b.Name)
                .IsRequired();
        }
    }
}