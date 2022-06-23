Rails.application.routes.draw do
  
    resources :trainers, only: [:show, :create, :index]
    resources :sessions, only: [:create, :destroy]
    resources :clients, only: [:create, :index, :destroy, :show, :update]
    resources :workouts, only: [:index, :create, :destroy, :show, :update]
    resources :exercises, only: [:index, :create, :show, :update]
    resources :client_workouts, only: [:create, :index]
    resources :workout_exercises, only: [:create, :index]
    post "/login", to: "sessions#create"
    get "/myclients", to: "sessions#index"
    delete "/logout", to: "sessions#destroy"
    get "/me", to: "trainers#show"
    post "/signup", to: "trainers#create"
  
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
