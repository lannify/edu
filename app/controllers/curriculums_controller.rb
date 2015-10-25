class CurriculumsController < ApplicationController
	before_filter :authenticate_user!, only: [:create, :destroy]
	def index
		respond_with Curriculum.all
	end

	def create
	    respond_with Curriculum.create(curr_params.merge(user_id: current_user.id))
	end

	def show
		respond_with Curriculum.find(params[:id])
	end

	private
	def curr_params
		params.require(:curriculum).permit(:name)
	end
end