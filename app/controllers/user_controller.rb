class UserController < ApplicationController

	# I don't think we need this line, since devise model takes care of user auth...
	# before_filter :authenticate_user!, only: [:create, :destroy]

	def index
		respond_with User.all
	end

end
