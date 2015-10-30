class AddCourseProgresstoStudents < ActiveRecord::Migration
  def change
  	add_column :students, :progress, :integer
  end
end
