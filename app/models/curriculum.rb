class Curriculum < ActiveRecord::Base
  belongs_to :user
  belongs_to :category
  has_many :subjects

	def as_json(options = {})
    super(options.merge(include: [:user, :subjects]))
	end
end
