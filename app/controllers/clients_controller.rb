class ClientsController < ApplicationController
  skip_before_action :authorized
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  def index
    clients = Client.all
    render json: clients
  end

  def show
    client = Client.find(params[:id])
    render json: client
  end

  def create
    client = Client.create!(client_params)
    render json: client, status: :created
  end

  def update
    client = Client.find(params[:id])
    client.update(client_params)
    render json: client
  end

  def alphabetize
    all_clients = Client.order(:name)
    clients = all_clients.filter {|c| c.trainer_id==session[:user_id]}
    render json: clients
  end

  def destroy
    #associated data?
    client = Client.find(params[:id])
    client.destroy
    head :no_content
  end

  private

  def client_params
    params.permit(:first_name, :last_name, :email, :age, :feet, :inches, :weight, :fitness_level, :workouts_per_week, :trainer_id, :username, :password, :password_confirmation, :is_trainer)
  end

  def render_invalid_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: 422
   end

end
