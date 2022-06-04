class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:create, :destroy]

  def create
    trainer = Trainer.find_by(username: params[:username])
    if trainer&.authenticate(params[:password])
      session[:trainer_id] = trainer.id
      render json: trainer, status: :created
    else
      render json: {errors: ["Invalid username or password"]}, status: :unauthorized
    end
  end

  def destroy
    session.delete :trainer_id
    head :no_content
  end

end
