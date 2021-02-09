namespace Uploader.Domain.Entities
{
    public class UploadedFile
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public byte[] Data { get; set; }
    }
}