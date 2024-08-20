using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Recipe.Models.Schema;

namespace Recipe.Data.Configurations;

public class UserConfigurations : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.Property(u => u.Username).HasMaxLength(User.MAX_USERNAME_LENGTH);
        builder.HasIndex(u => u.Username).IsUnique();
    }
}