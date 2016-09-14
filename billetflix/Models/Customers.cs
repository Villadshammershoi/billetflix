﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace billetflix.Models
{
    public class Customers
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public int ZipCode { get; set; }
        public string City { get; set; }
    }
}