using MediatR;

namespace AigorSays.Host.Handlers
{
    public class SayRequest : IRequest
    {
        public string Phrase { get; set; }
    }
}