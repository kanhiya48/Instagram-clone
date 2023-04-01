import React from 'react'
import Post from './Post'
const posts=[{
    id:"123",
    username:"abcd",
    userImg:"./photo.jpg",
    img:"./photo.jpg",
    caption:"maje  arhe h!"
},
{
    id:"123",
    username:"abcd",
    userImg:"./photo.jpg",
    img:"./photo.jpg",
    caption:"maje  arhe h!"
}]
function Posts() {

  return (
    <div>
       {
        posts.map((post)=>(
            <Post
            key={post.id} 
            id={post.id} 
            username={post.username} 
            userImg={post.userImg}
            img={post.img}
            caption={post.caption} 

            />
        ))
       }
        
    </div>
  )
}

export default Posts