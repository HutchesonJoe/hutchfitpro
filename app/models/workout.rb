class Workout < ApplicationRecord
  belongs_to :client
  has_many :workout_exercises
  has_many :exercises, through: :workout_exercises

  has_many :blocks
  # belongs_to :client_exercises

  accepts_nested_attributes_for :exercises

  validates :title, presence: true
end
