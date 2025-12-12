import React from 'react'
import img from '../assets/dog.jpeg'

function Dog() {
    const Dog={pic:img}
  return (
    <div> <h1>Dog Album</h1>
   <img src={Dog.pic}height={400}width={400}></img>
  </div> 
)
}
export default Dog
