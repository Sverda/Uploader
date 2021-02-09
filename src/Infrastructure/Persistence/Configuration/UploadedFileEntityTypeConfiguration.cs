using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Uploader.Domain.Entities;

namespace Uploader.Infrastructure.Persistence.Configuration
{
    public class UploadedFileEntityTypeConfiguration : IEntityTypeConfiguration<UploadedFile>
    {
        public void Configure(EntityTypeBuilder<UploadedFile> builder)
        {
            builder
                .Property(b => b.Name)
                .IsRequired();
        }
    }
}