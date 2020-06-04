# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users
- belongs_to :posts

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|integer|null: false|
|password|integer|null: false|
|nickname|text|null: false|

### Association
- has_many :groups_users
- has_many :groups, through: :groups_users
- has_many :posts,  through: :groups_users


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false|
|add_user_id|integer||
|member|text||
|user_id|integer|null: false, foreign_key: true|

### Association
- has_many :groups_users
- has_many :users, through: :groups_users
- belongs_to :posts

## postsテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :groups
- has_many :groups_users
- has_many :users, through: :groups_users

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
