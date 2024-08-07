import React, { useEffect, useState } from 'react'

function Github() {
    const [data , setData] = useState({});
    useEffect(() => {
      fetch("https://api.github.com/users/amanxrawat")
      .then((response)=>response.json())
      .then((data)=>{
        console.log(data)
        setData(data);
      })
    
    
}, [])
    
  return (
    <>  
        
        <div className='text-center text-3xl p-3 h-48 bg-white text-black flex items-center justify-center gap-5'>
            <img src={data.avatar_url} alt=""
            className='h-16 w-16 rounded-md' />
        
            Github Followers :  {data.followers}
        </div>
    </>
  )
}

export default Github