class Client < ApplicationRecord
  validates :name, presence: true
  validates :fitness_level, presence: true
  validates :email, presence: true, uniqueness: true

  belongs_to :trainer

end
