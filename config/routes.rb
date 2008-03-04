ActionController::Routing::Routes.draw do |map|
  map.connect '', :controller => 'home', :action => 'index'
  map.resources :calls
end
