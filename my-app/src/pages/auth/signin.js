import { Header } from "@/components/header";
import {getProviders,signIn} from "next-auth/react"

import React from 'react'

function signin({providers}) {
  return (
    <>
    <Header/> 
    <div className=" flex flex-col justify-center items-center min-h-screen
    py-2 -mt-35 px-14 text-center">
     <img className="w-80" src="https://links.papareact.com/ocw"
     alt=""/>
     < p className="font-xs italic" >This is Instagram clone not real app</p>
    
    <div className="mt-40">
    {Object.values(providers).map((provider) => (
      <div key={provider.name}>
        <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => signIn(provider.id,{callbackUrl : '/'})}>
          Sign in with {provider.name}
        </button>
      </div>
      
    ))}
    </div>
    </div>
  </>
  )
}


export async function getServerSideProps(){
    const providers= await getProviders();
    return {
        props:{
            providers,
        }
    };
}
export default signin