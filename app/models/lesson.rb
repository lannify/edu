class Lesson < ActiveRecord::Base
  belongs_to :chapter

	def as_json(options = {})
    	super(options.merge(include: :chapter))
	end  
end
