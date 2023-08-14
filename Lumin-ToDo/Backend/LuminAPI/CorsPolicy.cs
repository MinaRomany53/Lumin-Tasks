using Microsoft.AspNetCore.Cors.Infrastructure;

public class CorsPolicy
    {
        public const string AllowAll = "AllowAll";

        public static CorsPolicyBuilder ConfigureCors()
        {
            return new CorsPolicyBuilder()
                .AllowAnyOrigin() // Allow requests from any origin
                .AllowAnyHeader()
                .AllowAnyMethod();
        }
    }
