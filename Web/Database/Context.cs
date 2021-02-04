using Microsoft.EntityFrameworkCore;

namespace Uploader.Database
{
    public class Context : DbContext
    {
        public DbSet<UploadedFile> Files { get; set; }
        
        public Context(DbContextOptions<Context> options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<UploadedFile>()
                .Property(b => b.Name)
                .IsRequired();
        }
    }
}