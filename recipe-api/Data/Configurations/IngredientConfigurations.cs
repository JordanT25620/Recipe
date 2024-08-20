using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Recipe.Models.Schema;

namespace Recipe.Data.Configurations;

public class IngredientConfigurations : IEntityTypeConfiguration<Ingredient>
{
    public void Configure(EntityTypeBuilder<Ingredient> builder)
    {
        builder.Property(i => i.Description).HasMaxLength(Ingredient.MAX_DESC_LENGTH);
        builder.HasOne<RecipeObj>().WithMany().HasForeignKey(i => i.RecipeId).OnDelete(DeleteBehavior.Cascade);   
    }
}