Rails.application.routes.draw do

    resources :trainers, only: [:show, :create, :index]
    resources :sessions, only: [:create]
    resources :clients, only: [:create, :index, :destroy, :show]
    post "/newclient", to: "clients#create"
    post "/login", to: "sessions#create"
    get "/myclients", to: "sessions#index"
    delete "/logout", to: "sessions#destroy"
    get "/me", to: "trainers#show"
    post "/signup", to: "trainers#create"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
