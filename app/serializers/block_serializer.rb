class BlockSerializer < ActiveModel::Serializer
  attributes :id, :count, :sets, :note
  has_many :workout_exercises
  
end
