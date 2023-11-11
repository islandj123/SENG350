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
        public IEnumerable<ED> Get()
        {
            int id = 34;
            String address = "911 helpme rd";
            double latitude = 333.02;
            double longitude = 322.08;
            int capacity = 44;
            String wait = "3 hours";



            return Enumerable.Range(1, 5).Select(index => new ED(id,address, latitude, longitude, capacity, wait)
            {
                Id = id,
                Address = address,
                Latitude = latitude,
                Longitude = longitude,
                Capacity = capacity,
                Wait = wait
            })
            .ToArray();

        }
    }
}
