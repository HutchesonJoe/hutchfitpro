class ExercisesController < ApplicationController
  #remember to remove this
  skip_before_action :authorized

  def index
    exercises = Exercise.all
    render json: exercises
  end

  def show
    exercise = Exercise.find(params[:id])
    render json: exercise
  end

  def create
    exercise = Exercise.create(exercise_params)
    render json: exercise, status: :created
  end

  def destroy
    exercise = Exercise.find(params[:id])
    exercise.destroy
     #associated data???
  end

  private

  def exercise_params
    params.permit(:id, :name, :instructions, :category)
  end
end
