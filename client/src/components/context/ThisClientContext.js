import { useState, createContext, useEffect } from "react";


const ThisClientContext = createContext()

function ThisClientProvider({children}){
  const [thisClient, setThisClient] = useState()
  

  return <ThisClientContext.Provider value={[thisClient, setThisClient]}>{children}</ThisClientContext.Provider>
}

export  { ThisClientContext, ThisClientProvider }