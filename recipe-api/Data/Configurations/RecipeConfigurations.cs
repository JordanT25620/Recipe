using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Recipe.Models.Schema;

namespace Recipe.Data.Configurations;

public class RecipeConfigurations : IEntityTypeConfiguration<RecipeObj>
{
    public void Configure(EntityTypeBuilder<RecipeObj> builder)
    {
        builder.Property(r => r.Name).HasMaxLength(RecipeObj.MAX_NAME_LENGTH);
        builder.Property(r => r.Directions).HasMaxLength(RecipeObj.MAX_DIRECTIONS_LENGTH);
        builder.HasOne<User>().WithMany().HasForeignKey(i => i.CreatedByUserId).OnDelete(DeleteBehavior.Cascade);   
    }
}