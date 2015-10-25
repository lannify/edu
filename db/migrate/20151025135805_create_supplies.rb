class CreateSupplies < ActiveRecord::Migration
  def change
    create_table :supplies do |t|
      t.string :name
      t.decimal :price
      t.string :image_url
      t.string :item_url
      t.references :curriculum, index: true

      t.timestamps null: false
    end
    add_foreign_key :supplies, :curriculums
  end
end
