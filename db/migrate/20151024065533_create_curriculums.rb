class CreateCurriculums < ActiveRecord::Migration
  def change
    create_table :curriculums do |t|
      t.string :name
      t.integer :grade_level
      t.integer :rating
      t.decimal :price
      t.integer :no_of_courses
      t.references :instructor, index: true
      t.references :category, index: true

      t.timestamps null: false
    end
    add_foreign_key :curriculums, :instructors
    add_foreign_key :curriculums, :categories
  end
end
