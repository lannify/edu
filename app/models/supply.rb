class Supply < ActiveRecord::Base
  belongs_to :curriculum
  has_attached_file :avatar, styles: { large: "600x600>", medium: "300x300>", thumb: "100x100#"}
  validates_attachment_content_type :avatar, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
