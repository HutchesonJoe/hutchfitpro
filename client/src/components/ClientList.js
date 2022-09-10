import {useEffect} from "react"
function ClientList({clients}){
  
  let clientList

  useEffect(()=>{
    if(clients){
      clientList = clients.map((client)=>{
        return(
        <div key={client.id}>
          <p id={client.id} key={client.id} className="client-name">this client{client.name}</p>
        </div>
        )
    })
    } else {clientList = ""}
  },[clients])

  return(
    <div>
      {/* {clientList} */}
    </div>
    
  )
  
}

export default ClientList