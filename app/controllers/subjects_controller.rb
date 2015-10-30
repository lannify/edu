class SubjectsController < ApplicationController

	before_filter :authenticate_user!, only: [:create, :destroy]
	def index
		respond_with Subject.all

	end

	def create
    respond_with Subject.create(subject_params.merge(curriculum_id: params[:curriculum_id]))
  	end

  	def destroy
    	subject = Subject.find(params[:id2])
    	subject.destroy
    	redirect_to "#/curriculums/#{params[:id]}"
  	end


	private
	def subject_params
		params.require(:subject).permit(:title, :description)
	end
end
