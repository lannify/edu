class Category < ActiveRecord::Base
	has_many :curriculums
	
	def as_json(options = {})
    super(options.merge(include: :curriculums))
	end  
end
