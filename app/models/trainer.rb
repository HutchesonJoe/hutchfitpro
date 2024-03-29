class Trainer < ApplicationRecord
  has_secure_password 
  validates :first_name, presence: true
  validates :username, presence: true, uniqueness: true
  validates :certifications, presence: true
  validates :email, presence: true, uniqueness: true
 
  has_many :clients
  has_many :workouts, through: :clients
end
 