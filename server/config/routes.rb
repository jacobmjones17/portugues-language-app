Rails.application.routes.draw do

  get "/me", to: "users#show"

  resources :englishes
  resources :portugueses
  resources :users
  resources :questions
  resources :meanings
  resources :user_questions

  post "/assignment", to: "questions#create_assignment"

  post "/login", to: "sessions#create"

  post "/signup", to: "users#create"

  delete "/logout", to: "sessions#destroy"

  get "/auth/facebook/callback", to: "omniauth_callbacks#facebook"

end
