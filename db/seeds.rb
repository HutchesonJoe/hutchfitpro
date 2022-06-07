

puts "Seeding..."

#trainers

hutch = Trainer.create(name: "Hutch", username: "JoeHutch", email: "hutcheson2001@yahoo.com", certifications: "ACE, Integral Yoga Institute, TRX, Prenatal/postpartum", password: "Hutch", password_confirmation: "Hutch")

sophie = Trainer.create(name: "Sophie", username: "SoFit", email: "sofit@gmail.com", certifications: "NASM/TRX", password: "Sophie", password_confirmation: "Sophie")

#clients

charl = Client.create(name: "Charl", email: "Singnceb@gmail.com", age: 41, feet: 6, inches: 4, weight: 210, fitness_level: "intermediate", workouts_per_week: 5, trainer_id: hutch.id)

jenn = Client.create(name: "Jenn", email: "jcolella@aol.com", age: 47, feet: 5, inches: 4, weight: 150, fitness_level: "intermediate", workouts_per_week: 5, trainer_id: sophie.id)

fee = Client.create(name: "Felecia", email: "fharrelson@bmcc.cuny.edu", age: 49, feet: 5, inches: 8, weight: 175, fitness_level: "intermediate", workouts_per_week: 5, trainer_id: sophie.id)

#exercises

benchPress = Exercise.create(name: "Bench Press", instructions: "Two dumbbells or a Barbell, press directly to the ceiling", category: "Upper Body Press")
pushUp = Exercise.create(name: "Push Up", instructions: "Keep elbows at 45 degree angle, come within a fists width of the floor", category: "Upper Body Press")
row = Exercise.create(name: "Standard Row", instructions: "Broaden the chest, pull lower shoulderblades together", category: "Upper Body Pull")
latPull = Exercise.create(name: "Lat Pull Down", instructions: "Elbows point down, chest opens up, lower shoulder blades pull toward each other. TIP: Think 'Elbows to ribs'!")
squat = Exercise.create(name: "Squat", instructions: "Press knees outward and keep them behind your toes; minimum depth: hips as low as knees/thighs parallel to floor", category: "Lower Body Squat/Lunge")
lunge = Exercise.create(name: "Lunge", instructions: "Step forward and drop the back knee close to the floor without touching; minimum depth: hips as low as knees/thigh parallel to floor", category: "Lower Body Squat/Lunge")
deadlift = Exercise.create(name: "Deadlift", instructions: "Hinge at the hips, NOT the lower back; keep the knees over the ankles and shift the hips backward while keeping the chest open. Show off your pecs the whole time!", category: "Lower Body Hip Hinge")
gluteBridge = Exercise.create(name: "Glute Bridge", instructions: "Lie on the back, feet flat on the floor about 4-6 inches away from the hips, parallel. Push through the heels to life the hips; open the chest and exhale hard.", category: "Lower Body Hip Hinge")
plank = Exercise.create(name: "Plank", instructions: "From hands and knees, step back into a 'high' pushup position; engage the glutes and draw the navel toward the spine for the duration of the hold.", category: "Core")
jumpingJacks = Exercise.create(name: "Jumping Jacks", instructions: "You know what these are. But try with arms fully extended the entire time for an extra push!", category: "Cardio")

#workouts

upperbody = Workout.create(title: "Upper Body")
cardioCore = Workout.create(title: "Cardio Core")
pullHinge = Workout.create(title: "Upper Pull and Hip Hinge")

#join tables

clientWorkout1 = ClientWorkout.create(client_id: jenn.id, workout_id: upperbody.id)
clientWorkout2 = ClientWorkout.create(client_id: charl.id, workout_id: pullHinge.id)
clientWorkout3 = ClientWorkout.create(client_id: jenn.id, workout_id: cardioCore.id)
clientWorkout4 = ClientWorkout.create(client_id: jenn.id, workout_id: pullHinge.id)
clientWorkout5 = ClientWorkout.create(client_id: jenn.id, workout_id: upperbody.id)

workoutExercise1 = WorkoutExercise.create(workout_id: pullHinge.id, exercise_id: deadlift.id)
workoutExercise2 = WorkoutExercise.create(workout_id: pullHinge.id, exercise_id: gluteBridge.id)
workoutExercise3 = WorkoutExercise.create(workout_id: cardioCore.id, exercise_id: plank.id)
workoutExercise4 = WorkoutExercise.create(workout_id: cardioCore.id, exercise_id: jumpingJacks.id)
workoutExercise5 = WorkoutExercise.create(workout_id: upperbody.id, exercise_id: pushUp.id)
workoutExercise6 = WorkoutExercise.create(workout_id: upperbody.id, exercise_id: row.id)

puts "SeedFit!"
