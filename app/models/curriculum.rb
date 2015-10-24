class Curriculum < ActiveRecord::Base
  belongs_to :instructor
  belongs_to :category
end
