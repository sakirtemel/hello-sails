require "capistrano/node-deploy"

set :application, "hello-sails"
set :repository,  "https://github.com/sakirtemel/hello-sails.git"
set :user, "ubuntu"
set :scm, :git
set :deploy_to, "/home/ubuntu/apps/hello-sails"

role :app, "54.149.202.30"
set :node_env, "production"