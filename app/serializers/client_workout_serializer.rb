class ClientWorkoutSerializer < ActiveModel::Serializer
  attributes :id, :client_id, :workout
  #get rid of the general workout model. Clients deserve their own personalized workouts. 
  belongs_to :workout
  # has_many :workout_exercises
end
