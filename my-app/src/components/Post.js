import React, { useEffect, useState } from 'react'
import{
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  HeartIconFilled,
  PaperAirplaneIcon,
  MenuIcon,
  DotsHorizontalIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { useSession } from 'next-auth/react';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import Moment from 'react-moment';

function Post({id,username,userImg,img,caption}) {
  const [likes,setLikes]=useState([]);
  const [comment,setComment]=useState('');
  const [comments,setComments]=useState([]);
  const [hasLiked,sethasLiked]=useState();
  useEffect(()=>{
    const unsubscribe=onSnapshot(collection(db,'posts',id,'likes'),(snapshot)=>{
      setLikes(snapshot.docs);
    })
    return unsubscribe;
  },[db,id])
  useEffect(()=>{
    sethasLiked(likes.findIndex((like)=>{
      return like.id===session?.user?.uid
    })!==-1)
  },[likes])
  
  const likePost=async()=>{
    if(hasLiked)
    {
      await deleteDoc(doc(db,'posts',id,'likes',session.user.uid));
      
    }
    else{
    await setDoc(doc(db,"posts",id,'likes',session.user.uid),{
      username:session.user.username,
  })
    
    }
  }
  useEffect(()=>{
    const unsubscribe=onSnapshot(query(collection(db,'posts',id,'comments'),orderBy('timestamp','desc')),snapshot=> setComments(snapshot.docs))
    return unsubscribe;
  },
        
  [db])
  const sendComment=async (e)=>{
    e.preventDefault();

    const commentToSend=comment;
    setComment('');
    await addDoc(collection(db,'posts',id,'comments'),{
      comment: commentToSend,
      username: session.user.username,
      userImage:session.user.image,
      timestamp:serverTimestamp(),
    })
  }
    const {data : session} =useSession();
  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* header */}

      <div className='flex items-center p-5'>
        <img src={userImg} alt='' className='rounded-full h-12 w-12 object-contain border p-1 mr-3 '/>
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5'/>
      </div>

      {/* img */}

      <img src={img} alt='' className='w-full object-cover' />

      {/* buttons */}
     {session && 
     
      <div className='flex space-x-4 justify-between px-4 pt-4' >
        <div className='flex space-x-4 '>
          {
            hasLiked ? (<HeartIcon onClick={likePost} className='btn text-red-500 fill-red-500'/>):
            (

              <HeartIcon onClick={likePost} className='btn' />
            )
          }
        <ChatIcon className='btn' />
        <PaperAirplaneIcon className='btn' />
        </div>
        <BookmarkIcon className='btn' />
      </div>
     }

      {/* captions */}

      <p className='p-5 truncate'>
        {likes.length>0 &&(
          <p className='font-bold mb-1'>Likes {likes.length}</p>
        )}
        <span className='font-bold mr-1'>{username}</span>
        {caption}
      </p>

      {/* comments */}
     
     
       {comments.length >0 && (
        <div className='ml-10 h-20 overflow-y-scroll
        scrollbar-thumb-black scrollbar-thin'>
          {
            comments.map((comment)=>{
             return (<div key={comment.id} className='flex items-center
              space-x-2 mb-3'>
                <img 
                className='h-7 rounded-full'
                src={comment.data().userImage}
                alt=''></img>
                <p className='text-sm flex-1'>
               
                  <span className='font-bold'>{comment.data().username}</span>
                  {" "}
                  {comment.data().comment}
                  
                </p>
                  <Moment fromNow className='pr-5 text-x5'>
                    {comment.data().timestamp?.toDate()}
                  </Moment>
                  

              </div>)
            })
          }

        </div>
       )
       
       }

      {/* input box */}
      {session&&
      
      <form className='flex items-center p-4'>
        <EmojiHappyIcon className='h-7'/>
        <input type='text' value={comment} onChange={(e)=>setComment(e.target.value)} placeholder='Add a commennt...' className='border-none flex-1 focus:ring-0 outline-none'/>
        <button type='submit'disabled={!comment.trim()} onClick={sendComment} className='font-semihold text-blue-400'>Post</button>
      </form>
      }



    </div>
  )
}

export default Post