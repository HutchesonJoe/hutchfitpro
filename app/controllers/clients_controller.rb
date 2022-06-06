class ClientsController < ApplicationController
  skip_before_action :authorized
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

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
    params.permit(:name, :email, :age, :feet, :inches, :weight, :fitness_level, :workouts_per_week, :trainer_id)
  end

  def render_invalid_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: 422
   end

end
