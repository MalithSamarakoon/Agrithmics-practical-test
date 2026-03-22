using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Practice_Test.Migrations
{
    /// <inheritdoc />
    public partial class addGenderPropertyToStudent : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "StudentGender",
                table: "Students",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StudentGender",
                table: "Students");
        }
    }
}
