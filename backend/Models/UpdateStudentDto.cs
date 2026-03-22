namespace Practice_Test.Models
{
    public class UpdateStudentDto
    {
        public required string FullName { get; set; }
        public required string Address { get; set; }
        public required DateOnly DateOfBirth { get; set; }
        public string Gender { get; set; }
        public required string Email { get; set; }
        public required string PhoneNumber { get; set; }
    }
}
