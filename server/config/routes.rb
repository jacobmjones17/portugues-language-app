Rails.application.routes.draw do

  get "/me", to: "users#show"

  resources :recipes
  resources :ingredients
  resources :users
  resources :recipe_ingredients

  get "/recipes/:id", to: "recipes#show"

  #Create custom and dynamic route

  #create custom route that shows the ingredients connected to 2 or more recipes

  get "/recipes/search/:keyword", to: "recipes#show_specific"
  
  get "/ingredients-popular", to: "ingredients#popular_ingredients"

  post "/login", to: "sessions#create"

  post "/signup", to: "users#create"

  delete "/logout", to: "sessions#destroy"

end
