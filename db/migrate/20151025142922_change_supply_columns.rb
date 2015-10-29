class ChangeSupplyColumns < ActiveRecord::Migration
  def change
  	rename_column :supplies, :image_url, :item_image
  	rename_column :supplies, :name, :item_name
  	rename_column :supplies, :price, :item_price
  end
end
