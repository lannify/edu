class Subject < ActiveRecord::Base
  belongs_to :curriculum
  has_many :courses

	def as_json(options = {})
    super(options.merge(include: :courses))
	end  
end
