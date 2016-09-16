namespace billetflix.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Location")]
    public partial class Location
    {
        public Location()
        {
            Events = new HashSet<Events>();
        }

        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Adress { get; set; }

        public int Zipcode { get; set; }

        [Required]
        [StringLength(50)]
        public string City { get; set; }

        public virtual ICollection<Events> Events { get; set; }
    }
}
