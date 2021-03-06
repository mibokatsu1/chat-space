# README

## アプリ名
チャットスペース

## 概要
テックキャンプのカリキュラムで作成したチャットアプリです。

## 機能
- ユーザー登録
- チャットグループ登録/編集
- メッセージ送信
- メッセージのインクリメンタルサーチ
- メッセージの自動更新(非同期通信)

## DB設計
## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|integer|null: false|
|password|integer|null: false|
|nickname|string|null: false|

### Association
- has_many :groups_users
- has_many :groups, through: :groups_users
- has_many :posts

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :groups_users
- has_many :users, through: :groups_users
- has_many :posts

## postsテーブル

|Column|Type|Options|
|------|----|-------|
|text|text||
|image|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
