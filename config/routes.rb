Rails.application.routes.draw do
  
    resources :trainers, only: [:create, :index]
    resources :sessions, only: [:create, :destroy]
    resources :clients, only: [:create, :index, :destroy, :show, :update]
    resources :workouts, only: [:index, :create, :destroy, :show, :update]
    resources :exercises, only: [:index, :create, :show, :update]
    resources :client_workouts, only: [:create, :index]
    resources :workout_exercises, only: [:create, :index]
    resources :client_exercises, only: [:create, :show, :index, :destroy, :update]
    resources :blocks, only: [:index, :create, :show]
    
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    get "/me", to: "sessions#show"
    post "/trainersignup", to: "trainers#create"
    post "/clientsignup", to: "clients#create"
    get "/alphabetize", to: "clients#alphabetize"
  
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
