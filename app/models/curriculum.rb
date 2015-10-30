class Curriculum < ActiveRecord::Base
  belongs_to :user
  belongs_to :category
  belongs_to :student
  has_many :subjects

	def as_json(options = {})
  	super(options.merge({
  		only: [:name, :id],
  		include: [:user,
    		subjects: {
    			only: [:title, :id],
    			include: [
    				courses: {
	    				only: [:title, :id],
	    				include: [
	    					chapters: {
	    					only: [:title, :id],
		    					include: [
		    					lessons: {
		    					only: [:title, :id]
    				}]}]}]}]}))
	end
end
