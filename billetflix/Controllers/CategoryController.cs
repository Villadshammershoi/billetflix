using billetflix.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace billetflix.Controllers
{
    public class CategoryController : ApiController
    {
        private DataContext _db = new DataContext();
        [HttpGet]
        public List<Categories> GetAllCategory()
        {
            return _db.Categories.OrderBy(p => p.Id).ToList();
        }

        [HttpGet]
        public IHttpActionResult GetCategoryById(int id)
        {
            Categories categories = _db.Categories.Where(p => p.Id == id).FirstOrDefault();
            if (categories == null)
            {
                return NotFound();
            }
            return Ok(categories);
        }
        [HttpPost]
        public IHttpActionResult CreateCategory(Categories model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _db.Categories.Add(model);
            _db.SaveChanges();

            return Ok(model);
        }
    }

}
