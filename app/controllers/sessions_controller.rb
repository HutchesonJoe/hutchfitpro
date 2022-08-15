class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:create, :show, :destroy, :index]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def create
    if(params[:isTrainer])
     session[:is_trainer] = @is_trainer
     trainer_user
    elsif(params[:isTrainer]==false)
     client_user
    end
  #  byebug
    if @user&.authenticate(params[:password])

      session[:user_id] = @user.id
      session[:is_trainer] = @is_trainer
      render json: @user, status: :created

    else
      render json: {errors: ["Invalid username or password"]}, status: :unauthorized
    end
  end
  #Not sure this is where this action would go
  # def index
  #   trainer = Trainer.find(session[:user_id])
  #   clients = trainer.clients
  #   render json: clients
  # end

  def show
    
    if session[:is_trainer]
      user = Trainer.find_by(id: session[:user_id])
    else
      user = Client.find_by(id: session[:user_id])
    end
    # byebug
    render json: user
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

  def client_user
    @user = Client.find_by!(username: params[:username])
    #is this redundant
    @is_trainer = false
  end

  def trainer_user
    @user = Trainer.find_by!(username: params[:username])
    #is this redundant
    @is_trainer = true
  end

  private

  def render_not_found(not_found)
    render json: { errors: not_found }, status: 404
    # render json: { errors: ["Not found."] }, status: 404
  end

end
