class CurriculumsController < ApplicationController
	before_filter :authenticate_user!, only: [:create, :upvote]
	def index
		respond_with Curriculum.all
	end

	def create
	    respond_with Curriculum.create(curriculum_params.merge(user_id: current_user.id))
	end

	def show
		respond_with Curriculum.find(params[:id])
	end

	def upvote
		curriculum = Curriculum.find(params[:id])
		curriculum.increment!(:upvotes)

		respond_with curriculum
	end

	private
	def curriculum_params
		params.require(:curriculum).permit(:link, :title)
	end
end
