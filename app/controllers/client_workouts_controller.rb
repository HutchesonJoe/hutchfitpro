class ClientWorkoutsController < ApplicationController

  def index
    client_workouts = ClientWorkout.all
    render json: client_workouts
  end

  def create
    client_workout = ClientWorkout.create()
    render json: client_workout, status: :created
  end
  
end
