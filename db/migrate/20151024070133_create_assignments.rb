class CreateAssignments < ActiveRecord::Migration
  def change
    create_table :assignments do |t|
      t.string :title
      t.references :lesson, index: true

      t.timestamps null: false
    end
    add_foreign_key :assignments, :lessons
  end
end
