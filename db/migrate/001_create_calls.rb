class CreateCalls < ActiveRecord::Migration
  def self.up
    create_table :calls do |t|
      t.integer :id, :x_position, :y_position
      t.string :xml_id, :next
    end
  end

  def self.down
    drop_table :calls
  end
end
