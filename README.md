Name
# Worlds-Best-Cookbook

## Description
Ever had the desire to learn a new language but was not sure about which language you wanted to learn? Then you have come to the right place! I love the Portugues language and I know you will too. This application will help you learn Portuguese by learning vocabulary, taking quizes, and using the correct words in the right sentences.

## Setup & Installation
FIRST
1. navigate into server folder by typing "cd server" in the terminal
2. run "bundle install" to install all dependencies
3. run "rails db:migrate" and "rails db:seed" or just "rails db:reset" 
4. start the rails server by typing "rails s" in the terminal

SECOND
1. navigate into client folder by typing "cd client" in the terminal
2. run "npm install" to install all the dependencies
3. run "npm start" to run client


## Usage
When you use the app, there are two users that can be created: A Teacher and a Student. 

TEACHER
If you are the teacher, when you login, the first thing you will see is a drop down box so you can select a student. Once you select a student, you can assign them questions by clicking the checkboxes and clicking the assign button.
If you want to add new questions so your students can have more questions on their quiz, then you just need to click the Add Question button at the top. Just fill out the form and click submit!

Student
If you are a student, when you login, the first thing you will see is the home page that says you "welcome! Click on the Quiz to start learning!"
The Student will be able to see the questions that were assigned to them by the teachers.
Each question on the quiz, you have 10 seconds to answer, and once you finish the quiz, it will give you a total score.


## Roadmap
In the future I would like to add other features to the app. I want to create flashcards that the students can study to help prepare them for the quiz. 
I also want to make it to where there is a drag and drop box to where you can drag the correct word to its synonym
I also want to create more questions to where the answer choices will be sentences.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
MIT License