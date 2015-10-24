class CreateTests < ActiveRecord::Migration
  def change
    create_table :tests do |t|
      t.string :title
      t.text :content
      t.references :chapter, index: true

      t.timestamps null: false
    end
    add_foreign_key :tests, :chapters
  end
end
