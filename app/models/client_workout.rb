class ClientWorkout < ApplicationRecord
  belongs_to :client
  belongs_to :workout
end
