class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.string :city
      t.string :country
      t.string :link
      t.string :tag

      t.timestamps null: false
    end
  end
end
