using Microsoft.EntityFrameworkCore;
using Recipe.Models.Schema;

namespace Recipe.Data;

public class ApplicationDbContext : DbContext {

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options){ 
        
    }

    #region Users
    public DbSet<User> Users { get; set; } = null!;
    #endregion

    #region Ingredients
    public DbSet<Ingredient> Ingredients { get; set; } = null!;
    #endregion

    #region Recipes
    public DbSet<RecipeObj> Recipes { get; set; } = null!;
    #endregion

    protected override void OnModelCreating(ModelBuilder modelBuilder){
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
    }
}