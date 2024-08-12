using Recipe.Data;
using Recipe.Repositories.Users;
using Recipe.Services.Users;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddControllers();


builder.Services.AddScoped<IUserService, UserService>(); //AddSingleton, AddScoped, AddTransient
builder.Services.AddScoped<IUserRepository, UserRepository>(); //AddSingleton, AddScoped, AddTransient


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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
app.MapControllers();
app.Run();