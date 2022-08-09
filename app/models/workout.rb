class Workout < ApplicationRecord
  has_many :client_workouts
  has_many :clients, through: :client_workouts
  has_many :workout_exercises
  has_many :exercises, through: :workout_exercises

  accepts_nested_attributes_for :exercises

  validates :title, presence: true
end
