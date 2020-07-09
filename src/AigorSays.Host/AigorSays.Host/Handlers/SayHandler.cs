using System;
using System.Diagnostics;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using MediatR;

namespace AigorSays.Host.Handlers
{
    public class SayHandler : AsyncRequestHandler<SayRequest>
    {

        protected override Task Handle(SayRequest request, CancellationToken cancellationToken)
        {
            Debug.WriteLine($"Debugging from Notifier 1. Message  : {request.Phrase} ");
            Speak(request.Phrase);
            return Task.CompletedTask;
        }
        
        private static void Speak(string textToSpeech, bool wait = false)  
        {  
            // Command to execute PS  
            Execute($@"Add-Type -AssemblyName System.speech;  
            $speak = New-Object System.Speech.Synthesis.SpeechSynthesizer;                           
            $speak.Speak(""{textToSpeech}"");"); // Embedd text  
  
            void Execute(string command)  
            {  
                // create a temp file with .ps1 extension  
                var cFile = System.IO.Path.GetTempPath() + Guid.NewGuid() + ".ps1";  
  
                //Write the .ps1  
                using var tw = new System.IO.StreamWriter(cFile, false, Encoding.UTF8);  
                tw.Write(command);  
  
                // Setup the PS  
                var start =  
                    new System.Diagnostics.ProcessStartInfo()  
                    {  
                        FileName = "C:\\windows\\system32\\windowspowershell\\v1.0\\powershell.exe",  // CHUPA MICROSOFT 02-10-2019 23:45                    
                        LoadUserProfile = false,  
                        UseShellExecute = false,  
                        CreateNoWindow = true,  
                        Arguments = $"-executionpolicy bypass -File {cFile}",  
                        WindowStyle = System.Diagnostics.ProcessWindowStyle.Hidden  
                    };  
  
                //Init the Process  
                var proccess = System.Diagnostics.Process.Start(start);  
                // The wait may not work! :(  
                if (wait) proccess.WaitForExit();  
            }  
        }
    }
}