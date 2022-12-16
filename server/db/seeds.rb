
puts "🌱 Seeding spices..."

# Seed your database here
User.delete_all
Question.delete_all
Portuguese.delete_all
English.delete_all
Meaning.delete_all
UserQuestion.delete_all


jacob = User.create!(username: "Jacobmjones17", password_digest: "1234", admin: true)
bre = User.create!(username: "Breanne", password_digest: "1234", admin: false)
courtney = User.create!(username: "Courtney", password_digest: "1234", admin: false)

first_english_word = English.create(word: "Hi")
first_portuguese_word = Portuguese.create(word: "Oi")
first_word_meaning = Meaning.create(definition: "A way to greet someone", english_id: 1, portuguese_id: 1)

second_english_word = English.create(word: "Bye")
second_portuguese_word = Portuguese.create(word: "Tchau")
second_word_meaning = Meaning.create(definition: "A way to part from someone", english_id: 2, portuguese_id: 2)

third_english_word = English.create(word: "Good Morning")
third_portuguese_word = Portuguese.create(word: "Bom Dia")
third_word_meaning = Meaning.create(definition: "How to greet someone in the morning", english_id: 3, portuguese_id: 3)

first_question = Question.create!(question: "What is the synonym of the word: Good Morning?", meaning_id: third_word_meaning.id)
second_question = Question.create!(question: "What is the synonym of the word: Good Bye?", meaning_id: second_word_meaning.id)
third_question = Question.create!(question: "What is the synonym of the word: Hello?", meaning_id: first_word_meaning.id)

first_user_question = UserQuestion.create(user_id: jacob.id, question_id: 1)
second_user_question = UserQuestion.create(user_id: jacob.id, question_id: 2)
third_user_question = UserQuestion.create(user_id: jacob.id, question_id: 3)

puts "✅ Done seeding!" 

