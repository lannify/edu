class AddUserLeveltoStudents < ActiveRecord::Migration
  def change
  	add_column :students, :user_level, :integer
  end
end
