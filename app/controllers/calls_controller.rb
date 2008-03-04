class CallsController < ApplicationController
  def create
    @call = Call.create :xml_id => params[:id], :x_position => params[:x],
      :y_position => params[:y]
    render :layout => false
  end
end
