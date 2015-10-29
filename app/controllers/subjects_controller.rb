class SubjectsController < ApplicationController

	before_filter :authenticate_user!, only: [:create, :destroy]
	def index
		respond_with Subject.all

	end

	def create
    respond_with Subject.create(subject_params.merge(curriculum_id: params[:curriculum_id]))
  	end


  	def edit
    respond_with Subject.create(subject_params.merge(curriculum_id: params[:curriculum_id]))
  	end

	private
	def subject_params
		params.require(:subject).permit(:title, :description)
	end
end
