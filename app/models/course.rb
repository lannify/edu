class Course < ActiveRecord::Base
  belongs_to :subject
  has_many :chapters

	def as_json(options = {})
    super(options.merge(include: :chapter))
	end  
end
