class SuppliesController < ApplicationController

	before_filter :authenticate_user!, only: [:create, :destroy]
	def index
		respond_with Supply.all
	end

	def create
    puts curr_params;
    respond_with Supply.create(curr_params);
  end

	private
	def curr_params
		params.require(:supply).permit(:item_name, :item_price, :item_image, :item_url)
	end
end
