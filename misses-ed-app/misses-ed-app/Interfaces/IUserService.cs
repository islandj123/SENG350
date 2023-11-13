using System.Collections.Generic;
using misses_ed_app.Entities;

namespace misses_ed_app.Interfaces.UserManagement

{
    public interface IUserService
    {
        Task<IEnumerable<User>?> GetAll();

        Task<User?> GetById(int id);

        // User Create(User user);

        // void Update(User user);

        // void Delete(int id);
    }
}