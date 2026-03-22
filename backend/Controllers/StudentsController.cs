using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Practice_Test.Data;
using Practice_Test.Models;
using Practice_Test.Models.Entities;

namespace Practice_Test.Controllers
{
    //localhost:xxxx/api/students
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public StudentsController(ApplicationDbContext dbContext) 
        {
            this.dbContext = dbContext;
        }

        /*[HttpGet]
        public IActionResult GetAllStudents()
        {
            var allStudents = dbContext.Students.ToList();

            return Ok(allStudents);
        }*/

        [HttpGet]
        public IActionResult GetStudentByPhoneNumber([FromQuery] string? phoneNumber)
        {
            var query = dbContext.Students.AsQueryable();

            if (!string.IsNullOrWhiteSpace(phoneNumber))
            {
                query = query.Where(s => s.PhoneNumber.Contains(phoneNumber));
            }
            var result = query.ToList();

            return Ok(result);
        }


        [HttpPost]
        public IActionResult AddStudents([FromBody]List<AddStudentDto> studentDtos)
        {
            if (studentDtos == null || !studentDtos.Any())
            {
                return BadRequest("The student list cannot be empty.");
            }

            var studentEntities = studentDtos.Select(studentDto => new Student
            {
                Name = studentDto.FullName,
                Address = studentDto.Address,
                DateOfBirth = studentDto.DateOfBirth,
                StudentGender = Enum.Parse<Student.Gender>(studentDto.Gender),
                Email = studentDto.Email,
                PhoneNumber = studentDto.PhoneNumber

            }).ToList();
            

            dbContext.Students.AddRange(studentEntities);
            dbContext.SaveChanges();

            return Ok(new { message = $"{studentEntities.Count} students saved successfully!" });
        }


        [HttpGet("{id}")] 
        public IActionResult GetStudent(Guid id)
        {
            var student = dbContext.Students.Find(id);
            if (student == null) return NotFound();
            return Ok(student);
        }


        [HttpPut("{id}")]
        public IActionResult UpdateStudent(Guid id, [FromBody] UpdateStudentDto updateStudentDto)
        {
            
            var student = dbContext.Students.Find(id);

            if (student == null)
            {
                return NotFound("Student not found");
            }

            
            student.Name = updateStudentDto.FullName;
            student.Address = updateStudentDto.Address;
            student.DateOfBirth = updateStudentDto.DateOfBirth;
            student.Email = updateStudentDto.Email;
            student.PhoneNumber = updateStudentDto.PhoneNumber;

            
            if (Enum.TryParse<Student.Gender>(updateStudentDto.Gender, out var parsedGender))
            {
                student.StudentGender = parsedGender;
            }

           
            dbContext.SaveChanges();

            return NoContent(); 
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteStudent(Guid id)
        {
            
            var student = dbContext.Students.Find(id);

            if (student == null)
            {
                return NotFound("Student not found.");
            }

            dbContext.Students.Remove(student);

            dbContext.SaveChanges();

            return NoContent();
        }

    }
}


