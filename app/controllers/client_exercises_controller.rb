class ClientExercisesController < ApplicationController
  skip_before_action :authorized

  def create
    client_exercise = ClientExercise.create(ce_params)
    render json: client_exercise, status: :created
  end

  def show
    client_exercise = ClientExercise.find_by(id: params[:id])
    render json: client_exercise
  end

  def index
    exercises = ClientExercise.all 
    render json: exercises
  end

  def destroy
    exercise = ClientExercise.find_by(exercise_id: params[:id])
    
    exercise.destroy
    head :no_content
  end
  
  private
  
  def ce_params 
    params.permit(:client_id, :exercise_id)
  end

end
