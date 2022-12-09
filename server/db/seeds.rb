
puts "🌱 Seeding spices..."

# Seed your database here
User.delete_all
Quiz.delete_all
Portuguese.delete_all
English.delete_all
Meaning.delete_all


jacob = User.create!(username: "jacobmjones17", password_digest: "Pocoes!7", admin: true)



first_english_word = English.create(word: "Hi")
first_portuguese_word = Portuguese.create(word: "Oi")
first_word_meaning = Meaning.create(definition: "A way to greet someone", english_id: 1, portuguese_id: 1)

second_english_word = English.create(word: "Bye")
second_portuguese_word = Portuguese.create(word: "Tchau")
second_word_meaning = Meaning.create(definition: "A way to part from someone", english_id: 2, portuguese_id: 2)

third_english_word = English.create(word: "Good Morning")
third_portuguese_word = Portuguese.create(word: "Bom Dia")
third_word_meaning = Meaning.create(definition: "How to greet someone in the morning", english_id: 3, portuguese_id: 3)

first_question = Quiz.create!(question: "What is the synonym of the word: Good Morning", meaning_id: 3, user_id: jacob.id)
second_question = Quiz.create!(question: "What is the synonym of the word: Good Bye", meaning_id: 2, user_id: jacob.id)
third_question = Quiz.create!(question: "What is the synonym of the word: Hello", meaning_id: 1, user_id: jacob.id)


