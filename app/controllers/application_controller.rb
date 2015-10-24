class ApplicationController < ActionController::Base
  def angular
    render 'layouts/application'
  end
  protect_from_forgery with: :exception

  
end
