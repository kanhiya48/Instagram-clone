import React from 'react'
import Image from 'next/legacy/image'
import{
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline";
import {HomeIcon} from "@heroicons/react/solid";
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import {modalState} from '../../atoms/modalAtom'
export const Header = () => {
 
  const {data :session}=useSession();
  const [open,setOpen]=useRecoilState(modalState);

  const router = useRouter();

  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>

        <div onClick={()=>router.push('/')} className="flex justify-between mx-5 max-w-6xl  lg:mx-auto">
        <div className="relative hidden lg:inline-grid  w-24 cursor-pointer" >
        <Image src="https://links.papareact.com/ocw" layout='fill' objectFit='contain' />
        
        </div>
        <div onClick={()=>router.push('/')} className="relative  w-10 lg:hidden flex-shrink-0 cursor-pointer">
        <Image src="https://links.papareact.com/jjm" layout='fill' objectFit='contain'  />
        </div>
        <div className='max-width-xs'>
        <div className='mt-1 relative p-3 rounded-md '>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                <SearchIcon className='h-5 w-5 text-gray-500'/>
             </div>

                <input type="text" placeholder="Search" className='bg-gray-50 block w-full pl-10 sm:text-sm  border-gray-300 focus:border-black focus:ring-black rounded-md ' />
           
        </div>
        </div>
        <div className='flex items-center justify-end space-x-4'>
        <HomeIcon onClick={()=>router.push('/')} className='navBtn'/>
      <MenuIcon className='h-6 md:hidden cursor-pointer '/>
        {session ? (
      <div className='flex space-x-4 items-center ' >
      <div className='relative navBtn'>
       <PaperAirplaneIcon className='navBtn rotate-45'/>
       <div className='absolute -top-1 -right-2 text-xs w-5 h-5 
       bg-red-500 rounded-full flex items-center justify-center
       animate-pulse text-white'>3</div>
       </div>
       <PlusCircleIcon onClick={()=>{setOpen(true)}} className='navBtn'/>
      <HeartIcon className='navBtn'/>
      <img src={session.user.image} onClick={signOut} alt="profile pic" className='h-10 w-10 rounded-full cursor-pointer'  />
      </div>
        ):
        ( <div>
          
          <button onClick={signIn}>sign In</button>
          </div>
        )}
        </div>
        </div>

        </div>
  )
}
