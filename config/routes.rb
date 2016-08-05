Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create]
    resources :todos, only: [:index, :create, :show, :update, :destroy]
    resources :lists, only: [:create, :show, :update, :destroy]
    resources :days, only:  [:create, :show]
    resource :session, only: [:new, :create, :destroy]
  end

end
