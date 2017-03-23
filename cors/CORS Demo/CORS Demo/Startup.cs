using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CORS_Demo.Startup))]
namespace CORS_Demo
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
