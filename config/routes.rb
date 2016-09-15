Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :show]
    resources :todos, only: [:index, :create, :show, :update, :destroy] do
      put :toggle_done
    end
    resources :lists, only: [:index, :create, :show, :update, :destroy]
    resources :cal_dates, only: [:index, :show]
    resource :session, only: [:new, :show, :create, :destroy]
  end
	get "*unmatched_route", to: "static_pages#root"
end
