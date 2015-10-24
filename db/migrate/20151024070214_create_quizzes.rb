class CreateQuizzes < ActiveRecord::Migration
  def change
    create_table :quizzes do |t|
      t.string :title
      t.text :content
      t.references :chapter, index: true

      t.timestamps null: false
    end
    add_foreign_key :quizzes, :chapters
  end
end
