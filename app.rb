require 'rubygems'
require 'sinatra'
require 'newrelic_rpm'
require 'haml'

# Set Sinatra variables

set :app_file, __FILE__
set :root, File.dirname(__FILE__)
set :views, 'views'
set :public_folder, 'public'
set :haml, { format: :html5 }

before { env['rack.logger'] = Logger.new("websites.log") }

# Application routes
get '/' do
  url = params[:url] || "denkgroot.com"
  if !url.match(/^http:\/\//)
    url = "http://" + url
  end
  @website = url

  haml :index
end

post '/log' do
  logger.info "POST #{params[:url]}"
end
