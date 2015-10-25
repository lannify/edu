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
		user_id: 2
	}
])

Subject.create([
	{
		title: "Science",
		description: "Numbers and stuff",
		curriculum_id: 1
	},
	{
		title: "History",
		description: "Numbers and stuff",
		curriculum_id: 1
	},
	{
		title: "Math",
		description: "How to look after little boys and girls",
		curriculum_id: 2
	},
	{
		title: "Science",
		description: "Step 1: Be an artist, Step 2: Draw comics",
		curriculum_id: 2
	},
	{
		title: "History",
		description: "Step 1: Make noodles, Step 2: Add broth and rest of pho",
		curriculum_id: 2
	}
])

Course.create([
	{
		title: "Biology",
		description: "Plants",
		subject_id: 1
	},
	{
		title: "Physics",
		description: "Angles and numbers",
		subject_id: 1
	},
	{
		title: "Algebra 1",
		description: "Hemingway",
		subject_id: 2
	},
	{
		title: "Geomtry",
		description: "Dickens",
		subject_id: 2
	},
	{
		title: "Algebra 1",
		description: "Hemingway",
		subject_id: 3
	},
	{
		title: "Geomtry",
		description: "Dickens",
		subject_id: 3
	},
	{
		title: "Algebra 1",
		description: "Hemingway",
		subject_id: 4
	},
	{
		title: "Geomtry",
		description: "Dickens",
		subject_id: 4
	},
	{
		title: "Algebra 1",
		description: "Hemingway",
		subject_id: 5
	},
	{
		title: "Geomtry",
		description: "Dickens",
		subject_id: 5
	}
	
])

Chapter.create([
	{
		title: "Newton's Laws",
		description: "a^2 + b^2 = c^2",
		course_id: 1
	},
	{
		title: "Horce Race Chess",
		description: "a^2 + b^2 = c^2",
		course_id: 1
	},
	{
		title: "Velocity",
		description: "a^2 + b^2 = c^2",
		course_id: 1
	},
	{
		title: "Plant Life",
		description: "a^2 + b^2 = c^2",
		course_id: 2
	},
	{
		title: "Reproduction",
		description: "a^2 + b^2 = c^2",
		course_id: 2
	},
	{
		title: "Photosynthesis",
		description: "a^2 + b^2 = c^2",
		course_id: 2
	},
	{
		title: "Pythagarium Therum",
		description: "a^2 + b^2 = c^2",
		course_id: 3
	},
	{
		title: "Counting",
		description: "a^2 + b^2 = c^2",
		course_id: 3
	},
	{
		title: "Equatin Clues",
		description: "a^2 + b^2 = c^2",
		course_id: 3
	},
	{
		title: "Square",
		description: "a^2 + b^2 = c^2",
		course_id: 4
	},
	{
		title: "Circle",
		description: "a^2 + b^2 = c^2",
		course_id: 4
	},
	{
		title: "Triangle",
		description: "a^2 + b^2 = c^2",
		course_id: 4
	},
	{
		title: "Pythagarium Therum",
		description: "a^2 + b^2 = c^2",
		course_id: 5
	},
	{
		title: "Counting",
		description: "a^2 + b^2 = c^2",
		course_id: 5
	},
	{
		title: "Equatin Clues",
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
		title: "Pythagarium Therum",
		description: "a^2 + b^2 = c^2",
		course_id: 7
	},
	{
		title: "Counting",
		description: "a^2 + b^2 = c^2",
		course_id: 7
	},
	{
		title: "Equatin Clues",
		description: "a^2 + b^2 = c^2",
		course_id: 7
	},
	{
		title: "Square",
		description: "a^2 + b^2 = c^2",
		course_id: 8
	},
	{
		title: "Circle",
		description: "a^2 + b^2 = c^2",
		course_id: 8
	},
	{
		title: "Triangle",
		description: "a^2 + b^2 = c^2",
		course_id: 8
	},
	{
		title: "Pythagarium Therum",
		description: "a^2 + b^2 = c^2",
		course_id: 9
	},
	{
		title: "Counting",
		description: "a^2 + b^2 = c^2",
		course_id: 9
	},
	{
		title: "Equatin Clues",
		description: "a^2 + b^2 = c^2",
		course_id: 9
	},
	{
		title: "Square",
		description: "a^2 + b^2 = c^2",
		course_id: 10
	},
	{
		title: "Circle",
		description: "a^2 + b^2 = c^2",
		course_id: 10
	},
	{
		title: "Triangle",
		description: "a^2 + b^2 = c^2",
		course_id: 10
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

