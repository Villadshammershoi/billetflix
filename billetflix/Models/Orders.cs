using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace billetflix.Models
{
    public class Orders
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public int StatusId { get; set; }
        public DateTime Created { get; set; }
    }
}