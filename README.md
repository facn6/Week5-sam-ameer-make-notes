# Week5-sam-ameer-make-notes

## Open App

App is deployed to heroku at url:
https://make-notes.herokuapp.com/

### Run Locally
You can run the app locally by cloning and running npm install.

#### Google Speech to Text api auth
You will need to create your own Google API keys to run the google speech to text API but the rest of the app will work and you can see what it is doing to test it.

To create an API key you need to go to the google developer console and set up an account. Then create a new app turn on the 'speech to text' api.
It gives you a config .json file which you need to add to your local environment using
```
export GOOGLE_APPLICATION_CREDENTIALS=_path_to_your_json_config_file_here_
```
You can use the api with just these credentials. In our case we also used an API key to make the api calls using the request module instead of googles speech to text module which does all the stuff for you and makes life easier.

So you in this case you also need to request an api key from google and then add that to your local environment
```
export API_KEY=_api_key_here_
```



## About

The app uses the Google transcript API to turn speech into text.
It currently only accepts .wav files and uses files that we have recorded locally in demonstration.

In future stretch goals we could let the user upload there own files or record live on the website. The api has a cool streaming conversion option.

## Lessons

Spent a lot of time maging the google api work with request converting the prebuilt google-speech-api module that does it all for you. perhaps just use the tools that already exist but was good to do the proper requested task of using request module.
So nearly gave up on bothering to use the google api at all. Lesson, you are often closer to success than you think, but perhaps do things that are easier in the first place.

Travis CI was a whole pain to set up with API keys and local variables but useful to understand.
Great lessons on Process Env variables here: [how you can actually use node environment variables](https://www.freecodecamp.org/news/heres-how-you-can-actually-use-node-environment-variables-8fdf98f53a0a/)

Sending data to front end and navigating local files to tell it what is available was interesting but as we about to learn how to use databases not exactly the best solution. If we had time we would have implemented it to use files from the user instead of hosting them on our server anyway.

Writing tests upfront was good but not always correct and often had to rewrite them. Didn't test some of the final things.

