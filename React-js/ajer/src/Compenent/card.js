import { useState } from "react"
export default function Card(){
  const [conter,inc]=useState(0)
  
  return <button onClick={()=>(inc(conter+1))}>mmm</button>
  }