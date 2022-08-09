class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :certifications, :is_trainer

  has_many :clients 
end
