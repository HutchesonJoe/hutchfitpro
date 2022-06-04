Rails.application.routes.draw do

    resources :trainers, only: [:show, :create]
    resources :sessions, only: [:create]
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    get "/me", to: "trainers#show"
    post "/signup", to: "trainers#create"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
