import { moveMessagePortToContext } from "worker_threads"

//  import React from 'react'
type GreetProps={
    name : string
    messageCount : number
    isLoggedIn : boolean
}
export const Greet = (props: GreetProps) => {
  return (
    <div>
       {props.isLoggedIn ?  `Welcome ${props.name}! You have ${props.messageCount} unread messages`: 
       'welcome Guest'}
    </div>
  )
}

