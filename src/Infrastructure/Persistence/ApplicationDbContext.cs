using Uploader.Application.Common.Interfaces;
using Uploader.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Uploader.Infrastructure.Persistence.Configuration;

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
            new UploadedFileEntityTypeConfiguration()
                .Configure(modelBuilder.Entity<UploadedFile>());
        }
    }
}