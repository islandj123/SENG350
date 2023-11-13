// using Microsoft.AspNetCore.Mvc;

// [Route("api/v1/[controller]")]
// public class UserController : ControllerBase
// {
//     private readonly UserContext _userContext;
//     private readonly CatalogSettings _settings;
//     private readonly ICatalogIntegrationEventService _catalogIntegrationEventService;

//     public UserController(
//         UserContext context,
//         IOptionsSnapshot<CatalogSettings> settings,
//         ICatalogIntegrationEventService catalogIntegrationEventService)
//     {
//         _catalogContext = context ?? throw new ArgumentNullException(nameof(context));
//         _catalogIntegrationEventService = catalogIntegrationEventService
//             ?? throw new ArgumentNullException(nameof(catalogIntegrationEventService));

//         _settings = settings.Value;
//         context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
//     }

//     GET api/v1/[controller]/items[?pageSize=3&pageIndex=10]
//     [HttpGet]
//     [Route("items")]
//     [ProducesResponseType(typeof(PaginatedItemsViewModel<CatalogItem>), (int)HttpStatusCode.OK)]
//     [ProducesResponseType(typeof(IEnumerable<CatalogItem>), (int)HttpStatusCode.OK)]
//     [ProducesResponseType((int)HttpStatusCode.BadRequest)]
//     public async Task<IActionResult> ItemsAsync(
//         [FromQuery]int pageSize = 10,
//         [FromQuery]int pageIndex = 0,
//         string? ids = null)
//     {
//         if (!string.IsNullOrEmpty(ids))
//         {
//             var items = await GetItemsByIdsAsync(ids);

//             if (!items.Any())
//             {
//                 return BadRequest("ids value invalid. Must be comma-separated list of numbers");
//             }

//             return Ok(items);
//         }

//         var totalItems = await _userContext.CatalogItems
//             .LongCountAsync();

//         var itemsOnPage = await _userContext.CatalogItems
//             .OrderBy(c => c.Name)
//             .Skip(pageSize * pageIndex)
//             .Take(pageSize)
//             .ToListAsync();

//         itemsOnPage = ChangeUriPlaceholder(itemsOnPage);

//         var model = new PaginatedItemsViewModel<CatalogItem>(
//             pageIndex, pageSize, totalItems, itemsOnPage);

//         return Ok(items);
//     }
//     //...
// }



using Microsoft.AspNetCore.Mvc;
using misses_ed_app.Entities;
using misses_ed_app.Interfaces.UserManagement;

namespace misses_ed_app.Controllers
{
    [ApiController]
    [Route("/api/misses-ed")]
    public class UserController : Controller
    {
        private readonly ILogger<UserController> _logger;

        private readonly IUserService _UserService;

        public UserController(ILogger<UserController> logger, IUserService UserService)
        {
            _logger = logger;
            _UserService = UserService;
        }

        int[] id = [1, 2, 3, 4, 5];
        String[] username = ["bobby123", "dylanmyvillain", "pegglemaster", "BillClinton69", "dangerman"];
        String[] password = ["$2a$12$RiLVMytYdyslcA1f8m2Qeu/jrQe/Eqow6D0A9K./b54cR7cB1XPH6", "$2y$10$ThIFWuHY9NDg9A9EfmZaCej0.54ug3s.mWv0GIXjJGJhB1VeMM4oa", "$2b$14$S8GmL9LlxF4XwzZJ2EAWIuQYFCGhHEqX7KlJHl8eud.2A2j4u2mru", "$2a$08$YZqTfyE5OlN.p6RYwF8ZueYx2fUGPvl/2W3YkYVBF3GJMtHXl.3uS", "$2y$13$E34oY0JU02ZI.TXjlbBWXOpqSzGHyVVZlgfF8ClnC/9X21nlRR.bu"];
        String[] email = ["bobby@gmail.com", "dylanog@hotmail.com", "pegglemaster@gmail.com", "BestPrez420@gmail.com", "toughluck@gmail.com"];


        [HttpGet]
        [Route("users")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<User>))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetAll()
        {

            var users = await _UserService.GetAll();

            if (users == null)
            {
                return NotFound();
            }

            return Ok(users);
        }

        // Get one user based on ID
        [HttpGet]
        [Route("users/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(User))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {

            var user = await _UserService.GetById(id);

            if (user == null)
            {
                return NotFound();
            }   

            return Ok(user);
        }
    }
}
