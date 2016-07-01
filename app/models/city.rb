class City < ActiveRecord::Base
	validates :city, presence: true
	validates :country, presence: true
	validates :link,
            presence: true,
            length: { maximum: 245 },
            format: { with: URI.regexp(%w(http https)), message: :bad_url_format }
	validates :tag, presence: true
end
