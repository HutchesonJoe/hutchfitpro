class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :certifications

  has_many :clients 
end
