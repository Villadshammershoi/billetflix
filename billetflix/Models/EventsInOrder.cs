using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace billetflix.Models
{
    public class EventsInOrder
    {
        public int Id { get; set; }
        public int EventId { get; set; }
        public int OrderId { get; set; }
        public int Quantity { get; set; }

    }
}