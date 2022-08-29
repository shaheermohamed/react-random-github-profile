import React, { useEffect, useState } from 'react'
import './App.css'
const url = 'https://api.github.com/users';


const Test = () => {
const [users,setUsers] = useState([])
const getUsers = async()=>{
    const response =await fetch(url)
    const users =await response.json()
    setUsers(users)
    console.log(users)
}
useEffect(()=>{
    getUsers()
},[])
  return (
    <>
    <h1 className='heading'>Github Profile</h1>
    {
        users.map((user)=>{
            const {id,login,avatar_url,html_url} = user
            return(
                <article key={id} className='App-header'>
                    <img className='img'src={avatar_url}></img>
                    <div className='heading1'>
                    <h1>{login}</h1>
                    
                    <button className='button'><a href={html_url}>Click My Github Profile</a></button>
                    </div>
                    <br>
                    </br>
                    <hr></hr>

                </article>
            )

            
        })
    
    }
    </>
  )
}

export default Test