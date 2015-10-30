class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.integer :curriculum_id
      t.integer :instructor_id

      t.timestamps null: false
    end
  end
end
