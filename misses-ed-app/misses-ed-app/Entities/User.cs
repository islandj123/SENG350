using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace misses_ed_app.Entities
{
    [Table("User", Schema = "dbo")]
    public class User
    {
        [Key]
        [Column("Id")]
        public required int Id { get; set; }

        [Column("Username")]
        public required string Username { get; set; }

        [Column("Password")]
        public required string Password { get; set; }

        [Column("Email")]
        public required string Email { get; set; }

        public User(int id, string username, string password, string email)
        {
            Id = id;
            Username = username;
            Password = password;
            Email = email;
        }

    }
}