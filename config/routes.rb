Rails.application.routes.draw do

  devise_for :users
  devise_for :instructors
  devise_for :students
  root to: 'application#angular'
  get 'destroy_subject/:id' => 'subjects#destroy'
  resources :curriculums
  resources :subjects
  resources :students
  resources :courses
  resources :chapters
  resources :lessons
  resources :supplies




end
