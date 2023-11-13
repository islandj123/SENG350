using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using misses_ed_app.Interfaces.UserManagement;
using misses_ed_app.Entities;
using misses_ed_app.Database;
using PredicateBuilder = LinqKit.PredicateBuilder;
using Microsoft.AspNetCore.Http.HttpResults;

namespace misses_ed_app.Services.UserManagement
{
    public class UserService : IUserService
    {
        private readonly AppDbContext _dbContext;

        public UserService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<User>?> GetAll()
        {
            var results = await _dbContext.Users.ToListAsync();

            // Potentially add further error handling here.
            if (results == null)
            {
                return null;
            }

            return results;
        }

        public async Task<User?> GetById(int id)
        {
            var result = await _dbContext.Users.FirstOrDefaultAsync(x => x.Id == id);

            if (result == null)
            {
                return null;
            }

            return result;
        }
    }
}