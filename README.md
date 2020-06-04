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
- belongs_to :group
- belongs_to :user

## userテーブル

|Column|Type|Options|
|------|----|-------|
|email|integer|null: false|
|password|integer|null: false|
|nickname|integer|null: false|

### Association
- has_many :groups_users
- has_many :group, through: :groups_users

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false|
|add_user_id|text||
|member|text||
|user_id|integer|null: false, foreign_key: true|

### Association
- has_many :groups_users
- has_many :user, through: :groups_users

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
