class CreateSubjects < ActiveRecord::Migration
  def change
    create_table :subjects do |t|
      t.string :title
      t.string :description
      t.references :curriculum, index: true

      t.timestamps null: false
    end
    add_foreign_key :subjects, :curriculums
  end
end
