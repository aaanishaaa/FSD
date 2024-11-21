import React, { useEffect, useState } from 'react'

function MyUseEffect() {
const [count,setcount]=useState(10);
const [pointer,setpointer]=useState(20);
useEffect(()=>{
    console.log("Updates Count:"+count);
})
function doincrement(){
    setcount[count+30]
}
  return (
    <div>
        <h2>count</h2>
        <button>Increment</button>
    </div>
  )
}

export default MyUseEffect