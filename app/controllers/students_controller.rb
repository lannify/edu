class StudentsController < ApplicationController

	before_filter :authenticate_user!, only: [:create, :destroy]
	def index
		respond_with Student.all
	end

	def create
    # respond_with Student.create(student_params.merge(user_id: current_user.id))
    respond_with Student.create(student_params)
	end

	def show
		puts Student.find(params[:id])
		respond_with Student.find(params[:id])
	end

	private
	def student_params
		params.require(:student).permit(:name, :email, :user_level, :curriculum_id, :user_id)
	end
end
