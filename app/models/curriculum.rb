class Curriculum < ActiveRecord::Base
  belongs_to :user
  belongs_to :category
  has_many :subjects

	def as_json(options = {})
    	super(options.merge({
    		only: [:name],
    		include: [:user,
	    		subjects: {
	    			only: [:title],
	    			include: [
	    				courses: {
		    				only: [:title],
		    				include: [
		    					chapters: {
		    					only: [:title]
	    					}]}]}]}))
	end
end
