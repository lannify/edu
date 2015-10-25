class DropStudents < ActiveRecord::Migration
  def change
  	drop_table :students
  end
end
