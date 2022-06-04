class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized

  def authorized
    @current_user = Trainer.find_by(id: session[:trainer_id])
    return render json: { errors: ["Not Authorized"]}, status: :unauthorized unless @current_user 
  end

end
