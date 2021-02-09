using Uploader.Domain.Entities;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Uploader.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<UploadedFile> Files { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}