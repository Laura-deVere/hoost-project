class CitiesController < ApplicationController
	def index
		@cities = City.all
		respond_to do |format|
			format.html 
			format.json { render json: @cities }
			format.js { render nothing: true }
		end
	end

	def create
		@city = City.new(city_params)
		if @city.save
			respond_to do |format|
				format.html
				format.json { render json: @city }
				format.js { render nothing: true }
			end
		end
	end

	def destroy
		@city = City.find(params[:id])
		@city.destroy
		if request.xhr?
			render :json => @city
		else
			redirect_to root_path
		end
	end

	private

	def city_params
		params.require(:city).permit(:city, :country, :tag, :link)
	end
end
