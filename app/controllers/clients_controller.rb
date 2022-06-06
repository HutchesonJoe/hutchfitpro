class ClientsController < ApplicationController
  skip_before_action :authorized

  def index
    clients = Client.all
    render json: clients
  end

  def create
    client = Client.create!(client_params)
    render json: client, status: :created
  end

  private

  def client_params
    params.permit(:name, :email, :age, :height, :weight, :fitness_level, :workouts_per_week, :trainer_id)
  end

end
