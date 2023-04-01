import React from 'react'
import{
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
function Post({id,username,userImg,img,caption}) {
    
  return (
    <div>
      {/* header */}

      <div>
        <img src={userImg} alt=''/>
        <p>{username}</p>
        <DotsHorizontalIcon/>
      </div>

      {/* img */}

      {/* buttons */}

      {/* captions */}

      {/* input box */}



    </div>
  )
}

export default Post