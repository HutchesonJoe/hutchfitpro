class TrainersController < ApplicationController
  skip_before_action :authorized, only: [:create, :index]
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  def index
    trainers = Trainer.all
    render json: trainers
  end

  # def show
  #   trainer = Trainer.find_by(id: session[:trainer_id])
  #   render json: trainer
  # end

  def create
    trainer = Trainer.create!(trainer_params)
    render json: trainer, status: :created
  end

  private

  def trainer_params
    params.permit(:name, :username, :email, :certifications, :password, :password_confirmation)
  end

  def render_invalid_response(invalid)
   render json: { errors: invalid.record.errors.full_messages }, status: 422
  end

end
