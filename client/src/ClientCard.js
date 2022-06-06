function ClientCard({client}){
  return(
    <div className="client-card">
      <h3>{client.name}</h3>
      <p>{client.email}</p>
      <p>{client.age} years, {client.feet} ft. {client.inches} in., {client.weight} lbs</p>
      <p>{client.fitness_level}, {client.workouts_per_week} workouts per week</p>
    </div>
  )
}

export default ClientCard