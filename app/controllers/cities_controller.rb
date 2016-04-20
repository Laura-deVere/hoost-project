class CitiesController < ApplicationController
	def index
		@cities = City.all
		respond_to do |format|
			format.html 
			format.json { render json: @cities }
			format.js { render nothing: true }
		end
	end
end
