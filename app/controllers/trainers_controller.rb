class TrainersController < ApplicationController

  def show
    trainer = Trainer.find_by(id: session[:trainer_id])
    render json: trainer
  end

  def create
    trainer = Trainer.create!(trainer_params)
    render json: trainer, status: :created
  end

  private

  def trainer_params
    params.permit(:name, :username, :certifications, :password, :password_confirmation)
  end

end
