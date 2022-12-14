Rails.application.routes.draw do

  get "/me", to: "users#show"

  resources :englishes
  resources :portugueses
  resources :users
  resources :questions
  resources :meanings

  post "/login", to: "sessions#create"

  post "/signup", to: "users#create"

  delete "/logout", to: "sessions#destroy"

end
