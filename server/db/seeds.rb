
puts "🌱 Seeding spices..."

# Seed your database here
User.delete_all
Question.delete_all
Portuguese.delete_all
English.delete_all
Meaning.delete_all


jacob = User.create!(username: "jacobmjones17", password_digest: "Pocoes!7", admin: true)

first_question = Question.create!(question: "What is the synonym of the word: Good Morning?", user_id: jacob.id)
second_question = Question.create!(question: "What is the synonym of the word: Good Bye?", user_id: jacob.id)
third_question = Question.create!(question: "What is the synonym of the word: Hello?", user_id: jacob.id)



first_english_word = English.create(word: "Hi")
first_portuguese_word = Portuguese.create(word: "Oi")
first_word_meaning = Meaning.create(definition: "A way to greet someone", english_id: 1, portuguese_id: 1, question_id: 3)

second_english_word = English.create(word: "Bye")
second_portuguese_word = Portuguese.create(word: "Tchau")
second_word_meaning = Meaning.create(definition: "A way to part from someone", english_id: 2, portuguese_id: 2, question_id: 2)

third_english_word = English.create(word: "Good Morning")
third_portuguese_word = Portuguese.create(word: "Bom Dia")
third_word_meaning = Meaning.create(definition: "How to greet someone in the morning", english_id: 3, portuguese_id: 3, question_id: 1)

puts "✅ Done seeding!" 

