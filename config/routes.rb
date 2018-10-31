Rails.application.routes.draw do
  resource :constructing, only: [:index]
  root 'constructing#index'
end
