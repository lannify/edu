# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Curriculum.create([
	{ 
		name: "Nick's 5th Grade",
		grade_level: 5,
		category_id: 1,
		user_id: 1
	},
	{ 
		name: "Fun 3rd Grade",
		grade_level: 3,
		category_id: 2,
		user_id: 1
	},
	{ 
		name: "Computer Programming is Fun!",
		grade_level: 5,
		category_id: 3,
		user_id: 1
	},
	{ 
		name: "AngularJS on Rails",
		grade_level: 12,
		category_id: 3,
		user_id: 2
	}
])

Subject.create([
	{
		title: "Science",
		description: "The fifth grade science curriculum contains numerous lessons, quizzes and chapter tests, all organized into a variety of chapters",
		curriculum_id: 1
	},
	{
		title: "History",
		description: "Numbers and stuff",
		curriculum_id: 1
	},
	{
		title: "Math",
		description: "The third grade math curriculum contains numerous math lessons, along with printable worksheets, quizzes and chapter tests.",
		curriculum_id: 2
	},
	{
		title: "Social Studies",
		description: "The third grade social studies curriculum contains numerous lessons, as well as worksheets and quizzes, organized into different chapters. Members use the social studies curriculum as a third grade social studies tutorial, for extra practice, or to supplement their homeschooling approach.",
		curriculum_id: 2
	}
])

Course.create([
	{
		title: "Organisms",
		description: " Students learn about cells and their characteristics, organisms, plants and animals, the use and parts of a microscope",
		subject_id: 1
	},
	{
		title: "Physics",
		description: "Angles and numbers",
		subject_id: 1
	},
	{
		title: "World History",
		description: "Lorem history ipsum",
		subject_id: 2
	},
	{
		title: "US History",
		description: "Lorem history ipsum",
		subject_id: 2
	},
	{
		title: "Multiplication and Division",
		description: "Teaches the meanings of operations and how they relate to one another. Lessons also cover multiplying and dividing with two digit numbers.",
		subject_id: 3
	},
	{
		title: "Fractions and Decimals",
		description: "Teaches the ways of representing fractional and decimal numbers. Lessons also cover parts of a set, estimation, and comparisons.",
		subject_id: 3
	},
	{
		title: "World Geography",
		description: "Lorem ipsum",
		subject_id: 4
	},
	{
		title: "Economic System",
		description: "Lorem ipsum",
		subject_id: 4
	}
	
])

Chapter.create([
	{
		title: "Plants",
		description: "Lorem coffee ipsum",
		course_id: 1
	},
	{
		title: "Animals",
		description: "Lorem coffee ipsum",
		course_id: 1
	},
	{
		title: "How to use a microscope",
		description: "Lorem coffee ipsum",
		course_id: 1
	},
	{
		title: "Newton's Law",
		description: "a^2 + b^2 = c^2",
		course_id: 2
	},
	{
		title: "Gravity",
		description: "Lorem coffee ipsum",
		course_id: 2
	},
	{
		title: "Light",
		description: "Lorem coffee ipsum",
		course_id: 2
	},
	{
		title: "Egypt",
		description: "Lorem coffee ipsum",
		course_id: 3
	},
	{
		title: "Rome",
		description: "Lorem coffee ipsum",
		course_id: 3
	},
	{
		title: "China",
		description: "Lorem coffee ipsum",
		course_id: 3
	},
	{
		title: "The Civil War",
		description: "Lorem coffee ipsum",
		course_id: 4
	},
	{
		title: "George Washington against zombies",
		description: "Lorem coffee ipsum",
		course_id: 4
	},
	{
		title: "Ike",
		description: "Lorem coffee ipsum",
		course_id: 4
	},
	{
		title: "Multiplication",
		description: "a^2 + b^2 = c^2",
		course_id: 5
	},
	{
		title: "Division",
		description: "a^2 + b^2 = c^2",
		course_id: 5
	},
	{
		title: "Usesful Tips",
		description: "a^2 + b^2 = c^2",
		course_id: 5
	},
	{
		title: "Square",
		description: "a^2 + b^2 = c^2",
		course_id: 6
	},
	{
		title: "Circle",
		description: "a^2 + b^2 = c^2",
		course_id: 6
	},
	{
		title: "Triangle",
		description: "a^2 + b^2 = c^2",
		course_id: 6
	},
	{
		title: "France",
		description: "a^2 + b^2 = c^2",
		course_id: 7
	},
	{
		title: "Italy",
		description: "a^2 + b^2 = c^2",
		course_id: 7
	},
	{
		title: "Japan",
		description: "a^2 + b^2 = c^2",
		course_id: 7
	},
	{
		title: "Money",
		description: "a^2 + b^2 = c^2",
		course_id: 8
	},
	{
		title: "Taxes",
		description: "a^2 + b^2 = c^2",
		course_id: 8
	},
	{
		title: "More taxes",
		description: "a^2 + b^2 = c^2",
		course_id: 8
	}
])

Lesson.create([
	{
		title: "A",
		content: "a ^ 2",
		chapter_id: 1
	},
	{
		title: "B",
		content: "b ^ 2",
		chapter_id: 1
	},
	{
		title: "C",
		content: "c ^ 2",
		chapter_id: 1
	}
])

User.create([
	{
		name: "Lan Nguyen",
		email: "lan@hi.com",
		user_level: 1,
		password: "asdfasdf",
		password_confirmation: "asdfasdf"
	}
])

# user_id is acting as instructor_id, gotta fix this
Student.create([
	{
		name: "Mickey",
		email: "student1@test.com",
		user_level: 4,
		password: "asdfasdf",
		curriculum_id: 1,
		user_id: 1,
		progress: 70
	},
	{
		name: "Rick",
		email: "student2@test.com",
		user_level: 4,
		password: "asdfasdf",
		curriculum_id: 1,
		user_id: 1,
		progress: 90
	},
	{
		name: "Morty",
		email: "student3@test.com",
		user_level: 4,
		password: "asdfasdf",
		curriculum_id: 2,
		user_id: 1,
		progress: 10
	},
	{
		name: "Lamar",
		email: "student4@test.com",
		user_level: 4,
		password: "asdfasdf",
		curriculum_id: 3,
		user_id: 1,
		progress: 50
	}
])


