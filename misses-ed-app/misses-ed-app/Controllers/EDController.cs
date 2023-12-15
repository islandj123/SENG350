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
                    latitude: 48.435558,
                    longitude: -123.439099,
                    capacity: 150,
                    wait: 5
                ),
                new ED(
                    id: 2,
                    name: "Victoria Central Hospital",
                    address: "800 Burdett Ave, Victoria, BC",
                    latitude: 48.422629,
                    longitude: -123.361620,
                    capacity: 200,
                    wait: 8
                ),
                new ED(
                    id: 3,
                    name: "Hillside Medical Center",
                    address: "1695 Cedar Hill Cross Rd, Victoria, BC",
                    latitude: 48.450099,
                    longitude: -123.343861,
                    capacity: 180,
                    wait: 15
                ),
                new ED(
                    id: 4,
                    name: "Downtown Health Clinic",
                    address: "835 Yates St, Victoria, BC",
                    latitude: 48.424697,
                    longitude: -123.362358,
                    capacity: 220,
                    wait: 20
                ),
                new ED(
                    id: 5,
                    name: "Westshore Community Hospital",
                    address: "2145 Sooke Rd, Colwood, BC",
                    latitude: 48.442766,
                    longitude: -123.455394,
                    capacity: 120,
                    wait: 35
                ),
                new ED(
                    id: 6,
                    name: "Oak Bay Medical Center",
                    address: "2015 Cadboro Bay Rd, Victoria, BC",
                    latitude: 48.460263,
                    longitude: -123.310355,
                    capacity: 180,
                    wait: 40
                ),
                new ED(
                    id: 7,
                    name: "Quadra Village Clinic",
                    address: "2631 Quadra St, Victoria, BC",
                    latitude: 48.439735,
                    longitude: -123.361044,
                    capacity: 160,
                    wait: 7
                ),
                new ED(
                    id: 8,
                    name: "Fernwood Health Hub",
                    address: "1835 Fernwood Rd, Victoria, BC",
                    latitude: 48.428339,
                    longitude: -123.314076,
                    capacity: 200,
                    wait: 25
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
                    name: "Langford Wellness Center",
                    address: "2850 Peatt Rd, Langford, BC",
                    latitude: 48.447509,
                    longitude: -123.497143,
                    capacity: 180,
                    wait: 12
                ),
            };

            return eds;
        }
    }
}
