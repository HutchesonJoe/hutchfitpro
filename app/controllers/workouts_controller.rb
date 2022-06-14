class WorkoutsController < ApplicationController
  
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  def index
    workouts = Workout.all
    render json: workouts
  end

  def show
    workout = Workout.find(params[:id])
    render json: workout
  end

  def create
    workout = Workout.create!(workout_params)
    render json: workout, status: :created
  end

  def destroy
    workout = Workout.find(params[:id])
    workout.workout_exercises.destroy
    workout.destroy
  end

  def update
    workout = Workout.find(params[:id])
    workout.update(workout_params)
    render json: workout
  end

  private

  def workout_params
    params.permit(:title)
  end


  def render_invalid_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: 422
   end

  #associated data???
end
