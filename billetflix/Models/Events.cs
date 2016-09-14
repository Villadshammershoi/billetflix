using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace billetflix.Models
{
    public class Events
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime EventStart { get; set; }
        public DateTime EventEnd { get; set; }
        public decimal Price { get; set; }
        public int NoOfTickets { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
        public int LocationId { get; set; }
    }
}