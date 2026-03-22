namespace Practice_Test.Models.Entities
{
    public class Student
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public required string Address { get; set; }
        public required DateOnly DateOfBirth { get; set; }
        public Gender StudentGender { get; set; }
        public  enum Gender { Male, Female}
        public required string Email { get; set; }
        public required string PhoneNumber { get; set; }

    }
}
