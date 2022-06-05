class Trainer < ApplicationRecord
  has_secure_password 
  validates :name, presence: true
  validates :username, presence: true, uniqueness: true
  validates :certifications, presence: true
end
 