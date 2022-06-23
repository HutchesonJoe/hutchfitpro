Rails.application.routes.draw do
  
    resources :trainers, only: [:show, :create, :index]
    resources :sessions, only: [:create]
    resources :clients, only: [:create, :index, :destroy, :show, :update]
    resources :workouts, only: [:index, :create, :destroy, :show, :update]
    resources :exercises, only: [:index, :create, :show, :update]
    resources :client_workouts, only: [:create, :index]
    resources :workout_exercises, only: [:create, :index]
    post "/login", to: "sessions#create"
    get "/myclients", to: "sessions#index"
    #I dont think I need these routes because they are above
    # get "/clients", to: "clients#index"
    # get "/clients/:id", to: "clients#show"
    #should this be in my resources above???
    patch "/clients/:id/edit", to: "clients#update"
    delete "/logout", to: "sessions#destroy"
    get "/me", to: "trainers#show"
    #should this be in my resources above???
    post "/signup", to: "trainers#create"
    # post "/nextworkout", to: "client_workouts#create"
  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
