class City < ActiveRecord::Base
	validates :city, presence: true
	validates :country, presence: true
	validates :link, presence: true
	validates :tag, presence: true
end
