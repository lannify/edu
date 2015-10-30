Rails.application.routes.draw do

  devise_for :users
  devise_for :instructors
  devise_for :students
  root to: 'application#angular'

  resources :curriculums
  resources :subjects
  resources :students
  resources :courses
  resources :chapters
  resources :lessons
  resources :supplies
  resources :users

  get 'destroy_subject/:id/:id2' => 'subjects#destroy'
  get 'destroy_course/:id/:id2' => 'courses#destroy'
  get 'destroy_chapter/:id/:id2' => 'chapters#destroy'
  get 'destroy_lesson/:id/:id2' => 'lessons#destroy'
  get 'destroy_curriculum/:id' => 'curriculums#destroy'

  
end
