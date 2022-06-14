class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:create, :destroy, :index]

  def create
    @trainer = Trainer.find_by(username: params[:username])
    # @client = Client.find_by(username: params[:username])
    byebug
    if @trainer&.authenticate(params[:password])
      session[:trainer_id] = @trainer.id
      render json: @trainer, status: :created
    # elsif
    #   @client&.authenticate(params[:password])
    #   session[:client_id] = @client.id
    #   render json: @cleint, status: :created
    else
      render json: {errors: ["Invalid username or password"]}, status: :unauthorized
    end
  end

  def index
    trainer = Trainer.find(session[:trainer_id])
    clients = trainer.clients
    render json: clients
  end

  def destroy
    session.delete :trainer_id
    head :no_content
  end

end
