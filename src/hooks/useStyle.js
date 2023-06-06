import { useState,useEffect } from 'react'


export function useStyle({tags}){
  const [color, setColor] = useState()

  useEffect(()=>{
    setColor('activeStronge')
  },[tags])

  return {color}
}