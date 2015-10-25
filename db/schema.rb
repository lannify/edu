# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151024221543) do

  create_table "assignments", force: :cascade do |t|
    t.string   "title"
    t.integer  "lesson_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "assignments", ["lesson_id"], name: "index_assignments_on_lesson_id"

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "chapters", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.integer  "course_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "chapters", ["course_id"], name: "index_chapters_on_course_id"

  create_table "courses", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.integer  "subject_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "courses", ["subject_id"], name: "index_courses_on_subject_id"

  create_table "curriculums", force: :cascade do |t|
    t.string   "name"
    t.integer  "grade_level"
    t.integer  "rating"
    t.decimal  "price"
    t.integer  "no_of_courses"
    t.integer  "instructor_id"
    t.integer  "category_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "user_id"
  end

  add_index "curriculums", ["category_id"], name: "index_curriculums_on_category_id"
  add_index "curriculums", ["instructor_id"], name: "index_curriculums_on_instructor_id"
  add_index "curriculums", ["user_id"], name: "index_curriculums_on_user_id"

  create_table "instructor_curriculums", force: :cascade do |t|
    t.integer  "instructor_id"
    t.integer  "curriculum_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "instructor_curriculums", ["curriculum_id"], name: "index_instructor_curriculums_on_curriculum_id"
  add_index "instructor_curriculums", ["instructor_id"], name: "index_instructor_curriculums_on_instructor_id"

  create_table "instructors", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.boolean  "admin"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "instructors", ["email"], name: "index_instructors_on_email", unique: true
  add_index "instructors", ["reset_password_token"], name: "index_instructors_on_reset_password_token", unique: true

  create_table "lessons", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.text     "content"
    t.integer  "chapter_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "lessons", ["chapter_id"], name: "index_lessons_on_chapter_id"

  create_table "quizzes", force: :cascade do |t|
    t.string   "title"
    t.text     "content"
    t.integer  "chapter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "quizzes", ["chapter_id"], name: "index_quizzes_on_chapter_id"

  create_table "student_curriculums", force: :cascade do |t|
    t.integer  "student_id"
    t.integer  "curriculum_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "student_curriculums", ["curriculum_id"], name: "index_student_curriculums_on_curriculum_id"
  add_index "student_curriculums", ["student_id"], name: "index_student_curriculums_on_student_id"

  create_table "students", force: :cascade do |t|
    t.integer "instructor_user_id"
    t.integer "student_user_id"
  end

  add_index "students", ["instructor_user_id", "student_user_id"], name: "index_students_on_instructor_user_id_and_student_user_id", unique: true

  create_table "subjects", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.integer  "curriculum_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "subjects", ["curriculum_id"], name: "index_subjects_on_curriculum_id"

  create_table "tests", force: :cascade do |t|
    t.string   "title"
    t.text     "content"
    t.integer  "chapter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "tests", ["chapter_id"], name: "index_tests_on_chapter_id"

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.integer  "user_level"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
