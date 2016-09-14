using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace billetflix.Models
{
    public class DataContext : IdentityDbContext<IdentityUser>
    {
        public DataContext() : base("DefaultConnection")
        {
        }
        public DbSet<Events> Events { get; set; }
        public DbSet<Categories> Categories { get; set; }
    }
}