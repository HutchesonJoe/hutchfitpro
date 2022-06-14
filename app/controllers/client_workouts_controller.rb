class ClientWorkoutsController < ApplicationController
  skip_before_action :authorized

  def index
    client_workouts = ClientWorkout.all
    render json: client_workouts
  end

  def show
    client_workout = ClientWorkout.find(params[:id])
    render json: client_workout
  end

  def create
    client_workout = ClientWorkout.create(client_workout_params)
    render json: client_workout, status: :created
  end
  
  private

  def client_workout_params
    params.permit(:client_id, :workout_id, :workout_title, :completed)
  end
end
