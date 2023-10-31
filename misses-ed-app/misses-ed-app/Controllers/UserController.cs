using Microsoft.AspNetCore.Mvc;

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

    // GET api/v1/[controller]/items[?pageSize=3&pageIndex=10]
    // [HttpGet]
    // [Route("items")]
    // [ProducesResponseType(typeof(PaginatedItemsViewModel<CatalogItem>), (int)HttpStatusCode.OK)]
    // [ProducesResponseType(typeof(IEnumerable<CatalogItem>), (int)HttpStatusCode.OK)]
    // [ProducesResponseType((int)HttpStatusCode.BadRequest)]
    // public async Task<IActionResult> ItemsAsync(
    //     [FromQuery]int pageSize = 10,
    //     [FromQuery]int pageIndex = 0,
    //     string? ids = null)
    // {
    //     if (!string.IsNullOrEmpty(ids))
    //     {
    //         var items = await GetItemsByIdsAsync(ids);

    //         if (!items.Any())
    //         {
    //             return BadRequest("ids value invalid. Must be comma-separated list of numbers");
    //         }

    //         return Ok(items);
    //     }

        // var totalItems = await _userContext.CatalogItems
        //     .LongCountAsync();

        // var itemsOnPage = await _userContext.CatalogItems
        //     .OrderBy(c => c.Name)
        //     .Skip(pageSize * pageIndex)
        //     .Take(pageSize)
        //     .ToListAsync();

        // itemsOnPage = ChangeUriPlaceholder(itemsOnPage);

        // var model = new PaginatedItemsViewModel<CatalogItem>(
        //     pageIndex, pageSize, totalItems, itemsOnPage);

        // return Ok(items);
//     }
//     //...
// }