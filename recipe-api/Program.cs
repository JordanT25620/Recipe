using Recipe.Data;
using Recipe.Services.Users;
using Microsoft.EntityFrameworkCore;
using Recipe.Services.Recipes;
using Recipe.Services.Ingredients;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Recipe.Services.Auth;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddControllers();

builder.Services.AddScoped<IUserService, UserService>(); //AddSingleton, AddScoped, AddTransient
builder.Services.AddScoped<IRecipeService, RecipeService>(); //AddSingleton, AddScoped, AddTransient
builder.Services.AddScoped<IIngredientService, IngredientService>(); //AddSingleton, AddScoped, AddTransient
builder.Services.AddScoped<IAuthService, AuthService>(); //AddSingleton, AddScoped, AddTransient

string key = builder.Configuration["Jwt:Key"]!;
    if (string.IsNullOrEmpty(key))
    {
        throw new InvalidOperationException("JWT key is not configured.");
    }

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options => {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key))
        };
    });
builder.Services.AddMvc();
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options => {
    var jwtSecurityScheme = new OpenApiSecurityScheme{
        BearerFormat = "JWT",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.Http,
        Scheme = JwtBearerDefaults.AuthenticationScheme,
        Description = "Enter your JWT Access Token",
        Reference = new OpenApiReference {
            Id = JwtBearerDefaults.AuthenticationScheme,
            Type = ReferenceType.SecurityScheme
        }
    };
    options.AddSecurityDefinition("Bearer", jwtSecurityScheme);
    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {jwtSecurityScheme, Array.Empty<string>()}
    });
});

builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseExceptionHandler("/error");
//app.UseHttpsRedirection(); //Uncomment this line later
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();