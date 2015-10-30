class CoursesController < ApplicationController

	before_filter :authenticate_user!, only: [:create, :destroy]
	def index
		respond_with Course.all

	end

	def create
    respond_with Course.create(course_params.merge(subject_id: params[:subject_id]))
  end

  	def destroy
    	course = Course.find(params[:id2])
    	course.destroy
    	redirect_to "#/curriculums/#{params[:id]}"
  	end


	private
	def course_params
		params.require(:course).permit(:title, :description)
	end
end
