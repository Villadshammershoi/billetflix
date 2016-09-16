namespace billetflix.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Orders
    {
        public Orders()
        {
            EventsInOrders = new HashSet<EventsInOrders>();
        }

        public int Id { get; set; }

        public int FK_Customer { get; set; }

        public int FK_Status { get; set; }

        public DateTime Created { get; set; }

        public virtual Customers Customers { get; set; }

        public virtual ICollection<EventsInOrders> EventsInOrders { get; set; }

        public virtual Status Status { get; set; }
    }
}
