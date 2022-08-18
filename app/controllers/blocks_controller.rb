class BlocksController < ApplicationController
  skip_before_action :authorized

  def index
    blocks = Block.all
    render json: blocks
  end

  def create
    # byebug
    block = Block.create!(count: params[:count], sets: params[:sets], note: params[:note], workout_id: params[:workout_id])
    params[:exercise_ids].each do |ex_id|
      exercise_id = ex_id[:exercise_id]
      #I think I need a workout_id here.
      block.workout_exercises.create(exercise_id: exercise_id)
    end
    render json: block, status: :created
  end
end
