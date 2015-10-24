class InstructorCurriculum < ActiveRecord::Base
  belongs_to :instructor
  belongs_to :curriculum
end
