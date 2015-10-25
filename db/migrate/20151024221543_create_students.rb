class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
    	t.integer :instructor_user_id
    	t.integer :student_user_id
    end

    add_index(:students, [:instructor_user_id, :student_user_id], :unique => true)
  end
end
