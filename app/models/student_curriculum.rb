class StudentCurriculum < ActiveRecord::Base
  belongs_to :student
  belongs_to :curriculum
end
