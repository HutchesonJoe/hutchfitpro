

puts "Seeding..."

#trainers

hutch = Trainer.create(name: "Hutch", username: "JoeHutch", email: "hutcheson2001@yahoo.com", certifications: "ACE, Integral Yoga Institute, TRX, Prenatal/postpartum", password: "Hutch", password_confirmation: "Hutch")

sophie = Trainer.create(name: "Sophie", username: "SoFit", email: "sofit@gmail.com", certifications: "NASM/TRX", password: "Sophie", password_confirmation: "Sophie")

#clients

charl = Client.create(name: "Charl", email: "Singnceb@gmail.com", age: 41, feet: 6, inches: 4, weight: 210, fitness_level: "intermediate", workouts_per_week: 5, trainer_id: hutch.id)

jenn = Client.create(name: "Jenn", email: "jcolella@aol.com", age: 47, feet: 5, inches: 4, weight: 150, fitness_level: "intermediate", workouts_per_week: 5, trainer_id: sophie.id)

fee = Client.create(name: "Felecia", email: "fharrelson@bmcc.cuny.edu", age: 49, feet: 5, inches: 8, weight: 175, fitness_level: "intermediate", workouts_per_week: 5, trainer_id: sophie.id)

puts "SeedFit!"
