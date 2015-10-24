class CreateStudentCurriculums < ActiveRecord::Migration
  def change
    create_table :student_curriculums do |t|
      t.references :student, index: true
      t.references :curriculum, index: true

      t.timestamps null: false
    end
    add_foreign_key :student_curriculums, :students
    add_foreign_key :student_curriculums, :curriculums
  end
end
