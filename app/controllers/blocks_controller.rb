class BlocksController < ApplicationController
  skip_before_action :authorized

  def index
    blocks = Block.all
    render json: blocks
  end

  def create
    byebug
    block = Block.create(count: params[:count], sets: params[:sets])
  end
end
