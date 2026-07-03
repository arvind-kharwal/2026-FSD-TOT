import React, { useState } from 'react'
import cat from '../images/cat2.png'
function ImageManipulation() {
const [increaseHeight,setIncreseHeight]=useState(200)
const [red,setRed]=useState(0);
const [green,setGreen]=useState(0);
const [blue,setBlue]=useState(0);
const[rotateCat,setRotateCat]=useState(45);

function increasecatHeight(){
    setIncreseHeight(increaseHeight+20);
}

function setColor(){
    setRed(Math.random()*255);
    setGreen(Math.random()*255);
    setBlue(Math.random()*255);
}

    return (
    <div style={{border:'10px solid blue'}}>
<div style={{ border:'2px solid red',backgroundColor:`rgb(${red},${green},${blue})`, transform: `rotate(${rotateCat}deg)` }} height={200} width={200}>
<img src={cat} height={increaseHeight} width={200}  />
</div>

<div>

<button onClick={increasecatHeight}>increaseHeight</button>
<button>decreaseHeight</button>
<button>increaseWidth</button>
<button>decreaseWidth</button>
<button onClick={setColor}>ChangeBackgroundColor</button>
<button onClick={rotateCat}>RotateImage</button>
</div>


    </div>
  )
}

export default ImageManipulation