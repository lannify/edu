class AddUserReftoCurriculum < ActiveRecord::Migration
  def change
  	add_reference :curriculums, :user, index: true
  end
end
