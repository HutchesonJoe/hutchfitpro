

puts "Seeding..."

#trainers

hutch = Trainer.create(first_name: "Hutch", last_name: "Smith", username: "JoeHutch", email: "hutcheson2001@yahoo.com", certifications: "ACE, Integral Yoga Institute, TRX", password: "Hutch", password_confirmation: "Hutch", is_trainer: true)
sophie = Trainer.create(first_name: "Sophie", last_name: "Smith", username: "SoFit", email: "sofit@gmail.com", certifications: "NASM/TRX", password: "Sophie", password_confirmation: "Sophie", is_trainer: true)

#clients``

charl = Client.create(first_name: "Charl", last_name: "Smith", email: "Singnceb@gmail.com", age: 41, feet: 6, inches: 4, weight: 210, fitness_level: "intermediate", workouts_per_week: 5, trainer_id: hutch.id, username: "Charl", password: "charl123", password_confirmation: "charl123", is_trainer: false)

jenn = Client.create(first_name: "Jenn", last_name: "Smith", email: "jcolella@aol.com", age: 47, feet: 5, inches: 4, weight: 150, fitness_level: "intermediate", workouts_per_week: 5, trainer_id: sophie.id, username: "Jenn", password: "jenn123", password_confirmation: "jenn123", is_trainer: false)

fee = Client.create(first_name: "Felecia", last_name: "Smith", email: "fharrelson@bmcc.cuny.edu", age: 49, feet: 5, inches: 8, weight: 175, fitness_level: "intermediate", workouts_per_week: 5, trainer_id: sophie.id, username: "Felecia", password: "felecia123", password_confirmation: "felecia123", is_trainer: false)

#exercises

benchPress = Exercise.create(name: "Bench Press", instructions: "Two dumbbells or a Barbell, press directly to the ceiling", category: "Upper Body Press")
pushUp = Exercise.create(name: "Push Up", instructions: "Keep elbows at 45 degree angle, come within a fists width of the floor", category: "Upper Body Press")
row = Exercise.create(name: "Standard Row", instructions: "Broaden the chest, pull lower shoulderblades together", category: "Upper Body Pull")
latPull = Exercise.create(name: "Lat Pull Down", instructions: "Elbows point down, chest opens up, lower shoulder blades pull toward each other. TIP: Think 'Elbows to ribs'!", category: "Upper Body Pull")
squat = Exercise.create(name: "Squat", instructions: "Press knees outward and keep them behind your toes; minimum depth: hips as low as knees/thighs parallel to floor", category: "Lower Body Squat/Lunge")
lunge = Exercise.create(name: "Lunge", instructions: "Step forward and drop the back knee close to the floor without touching; minimum depth: hips as low as knees/thigh parallel to floor", category: "Lower Body Squat/Lunge")
deadlift = Exercise.create(name: "Deadlift", instructions: "Hinge at the hips, NOT the lower back; keep the knees over the ankles and shift the hips backward while keeping the chest open. Show off your pecs the whole time!", category: "Lower Body Hip Hinge")
gluteBridge = Exercise.create(name: "Glute Bridge", instructions: "Lie on the back, feet flat on the floor about 4-6 inches away from the hips, parallel. Push through the heels to life the hips; open the chest and exhale hard.", category: "Lower Body Hip Hinge")
plank = Exercise.create(name: "Plank", instructions: "From hands and knees, step back into a 'high' pushup position; engage the glutes and draw the navel toward the spine for the duration of the hold.", category: "Core")
jumpingJacks = Exercise.create(name: "Jumping Jacks", instructions: "You know what these are. But try with arms fully extended the entire time for an extra push!", category: "Cardio")

#workouts

charlupperbody = Workout.create(title: "Upper Body", client_id: 1 )
charlcardioCore = Workout.create(title: "Cardio Core", client_id: 1)
charlpullHinge = Workout.create(title: "Upper Pull and Hip Hinge", client_id: 1)

#join tables

# clientWorkout1 = ClientWorkout.create(client_id: jenn.id, workout_id: charlupperbody.id, workout_title: "Upper Body", completed: true)
# clientWorkout2 = ClientWorkout.create(client_id: charl.id, workout_id: charlpullHinge.id, workout_title: "Upper Pull and Hip Hinge", completed: true)
# clientWorkout3 = ClientWorkout.create(client_id: jenn.id, workout_id: charlcardioCore.id, workout_title: "Cardio Core", completed: true)
# clientWorkout4 = ClientWorkout.create(client_id: jenn.id, workout_id: charlpullHinge.id,  workout_title: "Upper Pull and Hip Hinge", completed: true)
# clientWorkout5 = ClientWorkout.create(client_id: jenn.id, workout_id: charlupperbody.id, workout_title: "Upper Body", completed: false)

client_exercise1 = ClientExercise.create(client_id: charl.id, exercise_id: deadlift.id, weight: "15-20", recently_completed: true)
client_exercise2 = ClientExercise.create(client_id: charl.id, exercise_id: gluteBridge.id, weight: "15-20", recently_completed: true)
client_exercise3 = ClientExercise.create(client_id: charl.id, exercise_id: plank.id, weight: "Body Weight", recently_completed: true)
client_exercise4 = ClientExercise.create(client_id: charl.id, exercise_id: jumpingJacks.id, weight: "17.5-22.5", recently_completed: false)
client_exercise5 = ClientExercise.create(client_id: charl.id, exercise_id: pushUp.id, weight: "17.5-22.5", recently_completed: false)
client_exercise6 = ClientExercise.create(client_id: charl.id, exercise_id: row.id, weight: "17.5-22.5", recently_completed: false)
#continue figuring out the seed below...
workout_exercises1 = WorkoutExercise.create(block_id: 1, exercise_id: gluteBridge.id, client_exercise_id: client_exercise2.id) 
puts "SeedFit!"
