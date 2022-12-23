Rails.application.routes.draw do

  get "/me", to: "users#show"

  resources :english
  resources :portuguese
  resources :users
  resources :questions
  resources :meanings
  resources :user_questions

  post "/assignments", to: "questions#assignment"

  post "/login", to: "sessions#create"

  post "/signup", to: "users#create"

  delete "/logout", to: "sessions#destroy"
end
