class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :certifications, :is_trainer

  has_many :clients 
end
