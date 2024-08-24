using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using ErrorOr;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Recipe.Data;
using Recipe.Models.Schema;
using Recipe.Requests.HttpModels.Auth;
using Recipe.ServiceErrors;

namespace Recipe.Services.Auth;

public class AuthService : IAuthService {

    private readonly ApplicationDbContext _dbContext;
    private readonly IConfiguration _config;
    private readonly PasswordHasher<User> _passwordHasher;

    public AuthService(ApplicationDbContext context, IConfiguration config){
        _dbContext = context;
        _config = config;
        _passwordHasher = new PasswordHasher<User>();
    }

    public ErrorOr<AuthenticatedUserResult> Authenticate(LoginRequest loginCredentials)
    {
        var user = _dbContext.Users.SingleOrDefault(u => u.Username == loginCredentials.Username);
        if (user == null){
            return Errors.Auth.InvalidCredentials;
        }
        var passwordVerificationResult = _passwordHasher.VerifyHashedPassword(user, user.Password, loginCredentials.Password);

        if (passwordVerificationResult != PasswordVerificationResult.Success){
            return Errors.Auth.InvalidCredentials;
        }

        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        var claims = new[] {
            new Claim(ClaimTypes.NameIdentifier, user.Username),
        };

        var token = new JwtSecurityToken(
            _config["Jwt:Issuer"],
            _config["Jwt:Audience"],
            claims,
            expires: DateTime.Now.AddMinutes(15),
            signingCredentials: credentials
        );

        var tokenAsString = new JwtSecurityTokenHandler().WriteToken(token);
        return new AuthenticatedUserResult(
            tokenAsString,
            user.toDto()
        );

    }
}