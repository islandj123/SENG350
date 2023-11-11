using Microsoft.AspNetCore.Mvc;

namespace misses_ed_app.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AppointmentController : ControllerBase
    {
        private readonly ILogger<AppointmentController> _logger;

        public AppointmentController(ILogger<AppointmentController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Appointment> Get()
        {
            int appointmentId = 34;
            int edId = 12;
            int userId = 683;
            String time = "3 hours";

            return Enumerable.Range(1, 5).Select(index => new Appointment(appointmentId, edId, userId, time)
            {
                AppointmentId = appointmentId,
                EDId = edId,
                UserId = userId,
                Time = time
            })
            .ToArray();

        }
    }
}
