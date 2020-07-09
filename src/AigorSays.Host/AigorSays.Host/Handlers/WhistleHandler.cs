using System.Diagnostics;
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.FileProviders;

namespace AigorSays.Host.Handlers
{
    public class WhistleHandler : AsyncRequestHandler<WhistleRequest>
    {
        private readonly string _whistleFile;

        public WhistleHandler(IWebHostEnvironment env)
        {
            this._whistleFile = Path.Join(env.WebRootPath, "\\whistle.wav");
        }

        protected override Task Handle(WhistleRequest request, CancellationToken cancellationToken)
        {
           
            Process.Start(@"powershell", $@"-c (New-Object Media.SoundPlayer '{_whistleFile}').PlaySync();");
            return Task.CompletedTask;
        }
    }
}