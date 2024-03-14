using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission10_Dawson_backend.Data;

namespace Mission10_Dawson_backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingController : ControllerBase
    {
        private IBowlingRepository _BowlingRepository;
        public BowlingController(IBowlingRepository temp) {
            _BowlingRepository = temp;
        }
        [HttpGet("Bowler")]
        public IEnumerable<Bowler> GetBowlers()
        {
            var bowlerData = _BowlingRepository.Bowlers.ToArray();

            return bowlerData;
        }

        [HttpGet("Team")]
        public IEnumerable<Team> GetTeams()
        {
            var teamData = _BowlingRepository.Teams.ToArray();

            return teamData;
        }

    }
}
