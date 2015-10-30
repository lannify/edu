class LessonsController < ApplicationController

	before_filter :authenticate_user!, only: [:create, :destroy, :show]
	def index
		respond_with Lesson.all

	end

	def create
		respond_with Lesson.create(lesson_params.merge(chapter_id: params[:chapter_id]))
	end

	def show
		puts Lesson.find(params[:id])
		respond_with Lesson.find(params[:id])
	end

	private
	def lesson_params
		params.require(:lesson).permit(:title, :description)
	end
end
