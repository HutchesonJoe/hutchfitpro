class WorkoutsController < ApplicationController
  skip_before_action :authorized, only: [:show, :index, :create]
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
    workout = Workout.create!(title: params[:workout][:title])
    params[:workout][:exercise_ids].each do |ex_id_obj|
      exercise_id = ex_id_obj[:exercise_id]
      workout.workout_exercises.create(exercise_id: exercise_id)
    end
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
    params.permit(
      :id, :title, :exercise_ids,
      exercise_attributes: [:exercise_ids]
    )
  end

  def render_invalid_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: 422
   end

  #associated data???
end

#this is the code I need to work: workout.workout_exercises.create([{exercise_id: 1}, {exercise_id: 2}])
