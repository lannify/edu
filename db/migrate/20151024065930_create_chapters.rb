class CreateChapters < ActiveRecord::Migration
  def change
    create_table :chapters do |t|
      t.string :title
      t.string :description
      t.references :course, index: true

      t.timestamps null: false
    end
    add_foreign_key :chapters, :courses
  end
end
