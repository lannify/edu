class Student < ActiveRecord::Base
  has_secure_password

  belongs_to :user
  has_many :curriculums

	def as_json(options = {})
    super(options.merge(include: :curriculums))
	end  
end
