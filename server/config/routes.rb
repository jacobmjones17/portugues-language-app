Rails.application.routes.draw do

  get 'user_questions/controller'
  get "/me", to: "users#show"

  resources :english
  resources :portugues
  resources :user
  resources :question
  resources :meaning

  post "/login", to: "sessions#create"

  post "/signup", to: "users#create"

  delete "/logout", to: "sessions#destroy"

end
