using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Uploader.Application.Common.Interfaces;

namespace Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UploadController : ControllerBase
    {
        private readonly ILogger<UploadController> _logger;
        private readonly IApplicationDbContext _context;

        public UploadController(ILogger<UploadController> logger, IApplicationDbContext context)
        {
            _context = context;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> UploadFile()
        {
            IFormFileCollection files = Request.Form.Files;
            var size = files.Sum(f => f.Length);
            foreach (var formFile in files)
            {
                if (formFile.Length <= 0)
                {
                    continue;
                }

                var filePath = Path.GetTempFileName();
                using var stream = System.IO.File.Create(filePath);
                await formFile.CopyToAsync(stream);
            }

            return Ok(new { count = files.Count, size });
        }
    }
}
