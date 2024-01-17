Rails.application.routes.draw do
  get 'greetings/random', to: 'greetings#random'
  root 'root#index'
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
