class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :clients 
end
