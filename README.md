# Vegetable Garden App
This is an app built with React and Redux and a Rails API as the backend. In the app you can add vegetables to your garden.

## Walkthrough
![Vegetable Garden Walkthrough](./public/walkthrough.gif)

## Getting Started
* Clone both, the rails app (https://github.com/amelieoller/vegetable-garden-api) and the react client (https://github.com/amelieoller/vegetable-garden-client) repositories to your pc 
* Get the back-end set up:
	* Create a new Postgres database with `createdb vegetable-garden-api_development`
	* Open the rails project folder and run `rake db:migrate`
  * Finally run `bundle install` and start a rails server on port 3001 with `rails s -p 3001`

* Open the react client project, run 'yarn' or 'npm install' and then 'yarn start' or 'npm start' to start a server on port 3000

The app will open at http://localhost:3000/ in your browser. Enjoy!

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/amelieoller/vegetable-garden-client. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License
This app is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
