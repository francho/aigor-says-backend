using System.Threading.Tasks;
using AigorSays.Host.Handlers;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AigorSays.Host.Controllers
{
    
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class SpeakerController: ControllerBase
    {
        private readonly IMediator _mediator;

        public SpeakerController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [Route("say")]
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<string>> Say(SayRequest request)
        {
            await _mediator.Send(request);
            return NoContent();
        }
    }
}