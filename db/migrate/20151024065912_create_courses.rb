class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :title
      t.string :description
      t.references :subject, index: true

      t.timestamps null: false
    end
    add_foreign_key :courses, :subjects
  end
end
