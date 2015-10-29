Rails.application.routes.draw do

  devise_for :users
  devise_for :instructors
  devise_for :students
  root to: 'application#angular'

  resources :users
  resources :curriculums
  resources :subjects
  resources :students
  resources :courses
  resources :chapters
  resources :lessons
  resources :supplies



end
