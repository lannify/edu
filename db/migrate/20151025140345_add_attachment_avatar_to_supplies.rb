class AddAttachmentAvatarToSupplies < ActiveRecord::Migration
  def self.up
    change_table :supplies do |t|
      t.attachment :avatar
    end
  end

  def self.down
    remove_attachment :supplies, :avatar
  end
end
