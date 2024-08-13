using Microsoft.EntityFrameworkCore;
using Recipe.Models.Schema;

namespace Recipe.Data;

public class ApplicationDbContext : DbContext {

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options){ 
        
    }

    #region Users
    public DbSet<User> Users { get; set; } = null!;
    #endregion

}