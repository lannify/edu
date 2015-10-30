class Course < ActiveRecord::Base
  belongs_to :subject
  has_many :chapters

	def as_json(options = {})
    super(options.merge(include: [chapters: {
			    					only: [:title, :id],
				    					include: [
				    					lessons: {
				    					only: [:title, :id]

    							}]}]))
	end  
end
