class Client < ApplicationRecord
  has_secure_password
  validates :name, presence: true
  validates :fitness_level, presence: true
  validates :email, presence: true, uniqueness: true

  belongs_to :trainer
  has_many :client_workouts
  has_many :workouts, through: :client_workouts
  has_many :client_exercises
  has_many :exercises, through: :client_exercises

end
