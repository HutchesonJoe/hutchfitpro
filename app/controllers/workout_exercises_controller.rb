class WorkoutExercisesController < ApplicationController
  skip_before_action :authorized
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  def index
    workout_exercises = WorkoutExercise.all
    render json: workout_exercises
  end

  def show
    workout_exercise = WorkoutExercise.find(params[:id])
    render json: workout_exercise
  end

  private

  def workout_exercise_params
    params.permit(:workout_id, :exercise_id)
  end

  def render_invalid_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: 422
  end

end
