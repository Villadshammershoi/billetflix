using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace billetflix.Models
{
    public class Media
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public int TypeId { get; set; }
        public int EventId { get; set; }
    }
}