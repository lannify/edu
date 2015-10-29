class StudentsController < ApplicationController

	before_filter :authenticate_user!, only: [:create, :destroy]
	def index
		respond_with Student.all

	end

	def create
    respond_with Student.create(student_params.merge(instructor_id: params[:instructor_id]))
  end

	private
	def student_params
		params.require(:student).permit(:name, :email, :password, :user_level, :curriculum_id)
	end
end
