class TrainersController < ApplicationController
  def show
    trainer = Trainer.find_by(id: params[:id])
    render json: trainer
  end
end
