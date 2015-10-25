# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Curriculum.create([
	{ 
		name: "Lan - 5th Grade",
		grade_level: 5,
		category_id: 1,
		user_id: 1
	},
	{ 
		name: "Nick - 4th Grade",
		grade_level: 4,
		category_id: 2,
		user_id: 2
	},
	{ 
		name: "Sourabh - 1st Grade",
		grade_level: 1,
		category_id: 3,
		user_id: 3
	},
	{ 
		name: "Isaac - 5th Grade",
		grade_level: 5,
		category_id: 4,
		user_id: 4
	}
])

Subject.create([
	{
		title: "Math",
		description: "Numbers and stuff",
		curriculum_id: 1
	},
	{
		title: "Literature",
		description: "Words and stuff",
		curriculum_id: 2
	},
	{
		title: "Speeling",
		description: "Putting letters and stuff in the proper order",
		curriculum_id: 3
	},
	{
		title: "How to make Pho",
		description: "Step 1: Make noodles, Step 2: Add broth and rest of pho",
		curriculum_id: 1
	},
	{
		title: "Wearing flannel shirts",
		description: "Make sure your shirt is made of flannel",
		curriculum_id: 1
	},
	{
		title: "Babysitting",
		description: "How to look after little boys and girls",
		curriculum_id: 3
	},
	{
		title: "Drawing comic books",
		description: "Step 1: Be an artist, Step 2: Draw comics",
		curriculum_id: 2
	}
])

Course.create([
	{
		title: "Algebra",
		description: "Numbers and letters",
		subject_id: 1
	},
	{
		title: "Trigonometry",
		description: "Angles and numbers",
		subject_id: 1
	},
	{
		title: "American Literature",
		description: "Hemingway",
		subject_id: 2
	},
	{
		title: "English lit",
		description: "Dickens",
		subject_id: 2
	}
	
])

Chapter.create([
	{
		title: "Pythagorean Theorem",
		description: "a^2 + b^2 = c^2",
		course_id: 2
	},
	{
		title: "Pythagorean Theorem",
		description: "a^2 + b^2 = c^2",
		course_id: 2
	},
	{
		title: "Pythagorean Theorem",
		description: "a^2 + b^2 = c^2",
		course_id: 2
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

