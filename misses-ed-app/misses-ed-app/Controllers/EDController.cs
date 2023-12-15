using Microsoft.AspNetCore.Mvc;

namespace misses_ed_app.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EDController : ControllerBase
    {
        private readonly ILogger<EDController> _logger;

        public EDController(ILogger<EDController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("/eds")]
        public IEnumerable<ED> Get()
        {
            var eds = new List<ED>
            {
                new ED(
                    id: 1,
                    name: "Esquimalt General Hospital",
                    address: "500 Admirals Rd, Esquimalt, BC",
                    latitude: 48.42846966902537,
                    longitude: -123.41731439524088,
                    capacity: 150,
                    wait: 5
                ),
                new ED(
                    id: 2,
                    name: "Victoria Central Hospital",
                    address: "800 Burdett Ave, Victoria, BC",
                    latitude: 48.422629,
                    longitude: -123.361620,
                    capacity: 130,
                    wait: 22
                ),
                new ED(
                    id: 3,
                    name: "Hillside Medical Center",
                    address: "1695 Cedar Hill Cross Rd, Victoria, BC",
                    latitude: 48.450099,
                    longitude: -123.343861,
                    capacity: 40,
                    wait: 15
                ),
                new ED(
                    id: 4,
                    name: "Victoria General Hospital",
                    address: "1, Hospital Way, Victoria, BC",
                    latitude: 48.467010864021105,
                    longitude: -123.43185305637196,
                    capacity: 220,
                    wait: 5
                ),
                new ED(
                    id: 5,
                    name: "Westshore Community Hospital",
                    address: "2145 Sooke Rd, Colwood, BC",
                    latitude: 48.43665945486022,
                    longitude: -123.48691972142205,
                    capacity: 100,
                    wait: 35
                ),
                new ED(
                    id: 6,
                    name: "Cadboro Bay Medical Center",
                    address: "2015 Cadboro Bay Rd, Victoria, BC",
                    latitude: 48.460263,
                    longitude: -123.310355,
                    capacity: 50,
                    wait: 40
                ),
                new ED(
                    id: 7,
                    name: "Quadra Village Clinic",
                    address: "2631 Quadra St, Victoria, BC",
                    latitude: 48.439735,
                    longitude: -123.361044,
                    capacity: 30,
                    wait: 55
                ),
                new ED(
                    id: 8,
                    name: "Royal Jubilee Hospital",
                    address: "1952 Bay Street, Victoria, BC",
                    latitude: 48.43319257260507,
                    longitude: -123.32701164845716,
                    capacity: 200,
                    wait: 9
                ),
                new ED(
                    id: 9,
                    name: "Saanich General Hospital",
                    address: "4400 Tyndall Ave, Saanich, BC",
                    latitude: 48.466264,
                    longitude: -123.339991,
                    capacity: 100,
                    wait: 45
                ),
                new ED(
                    id: 10,
                    name: "Langford General Hospital",
                    address: "2850 Peatt Rd, Langford, BC",
                    latitude: 48.44771249187802,
                    longitude: -123.50169429299504,
                    capacity: 120,
                    wait: 12
                ),
            };

            return eds;
        }
    }
}
