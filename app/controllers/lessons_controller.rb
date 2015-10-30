class LessonsController < ApplicationController

	before_filter :authenticate_user!, only: [:create, :destroy]
	def index
		respond_with Lesson.all

	end

	def create
    respond_with Lesson.create(lesson_params.merge(chapter_id: params[:chapter_id]))
  	end

    def destroy
    	lesson = Lesson.find(params[:id2])
    	lesson.destroy
    	redirect_to "#/curriculums/#{params[:id]}"
  	end

	private
	def lesson_params
		params.require(:lesson).permit(:title, :content)
	end
end
