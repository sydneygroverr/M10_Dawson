namespace Mission10_Dawson_backend.Data
{
    public class EFBowlingRepository : IBowlingRepository
    {
        private BowlerContext _bowlContext;
        public EFBowlingRepository(BowlerContext temp) {
            _bowlContext = temp;
        }

        public IEnumerable<Bowler> Bowlers => _bowlContext.Bowlers;
        public IEnumerable<Team> Teams => _bowlContext.Teams;
    }
}
