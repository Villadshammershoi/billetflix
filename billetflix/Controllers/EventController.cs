using billetflix.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace billetflix.Controllers
{
    public class EventController : ApiController
    {
        private DataContext _db = new DataContext();
        [HttpGet]
        public List<Events> GetAllEvents()
        {
            return _db.Events.OrderBy(p => p.Id).ToList();
        }

        [HttpGet]
        public IHttpActionResult GetEventId(int id)
        {
            Events events = _db.Events.Where(p => p.Id == id).FirstOrDefault();
            if (events == null)
            {
                return NotFound();
            }
            return Ok(events);
        }
        [HttpPost]
        public IHttpActionResult CreateEvent(Events model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            _db.Events.Add(model);
            _db.SaveChanges();
            return Ok(model);
        }
    }
}
