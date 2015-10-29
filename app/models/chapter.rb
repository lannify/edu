class Chapter < ActiveRecord::Base
  belongs_to :course
  has_many :assignments
  has_many :quizzes
  has_many :tests
  has_many :lessons

	def as_json(options = {})
    super(options.merge(include: [:assignments, :tests, :quizzes, :lessons]))
	end    
end
