class CreateInstructorCurriculums < ActiveRecord::Migration
  def change
    create_table :instructor_curriculums do |t|
      t.references :instructor, index: true
      t.references :curriculum, index: true

      t.timestamps null: false
    end
    add_foreign_key :instructor_curriculums, :instructors
    add_foreign_key :instructor_curriculums, :curriculums
  end
end
