# Uploader - File Uploading Web Application
Uploader is Single Page Web Application created to try my skills in React JS and .NET 5 technologies. 
Uploader only function is to upload files through web api to SQL database. 
Project Architecture is based on Jason Tyler's Clean Architecture approach. 

## Get Started
Go to *src/WebUI* and set user secrets. 
> cd src/WebUI

> dotnet user-secrets set "Db:UserId" "<YOUR_USERID>

> dotnet user-secrets set "Db:Password" "<YOUR_PASSWORD>

Create database. 
> dotnet ef database update

Run application (you have to be in *src/WebUI*). 
> dotnet run

## Demo
![select-file](docs/images/select-file.jpg)
![in-progress](docs/images/progress.jpg)
![error](docs/images/error.jpg)
![success](docs/images/success.jpg)

## TODO
- [ ] Cancel files uploading
- [ ] Retry in case of error
- [ ] Copy link feature
- [ ] Allow running app with in memory database