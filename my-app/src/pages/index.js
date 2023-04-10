import Head from 'next/head'
import Image from 'next/image'
import {Header} from '../components/header'
import {Feed} from  '../components/feed'
import Modal from '@/components/Modal'
export default function Home() {
  return (
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
      <Head>
        <title>Instagram by KD</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* header */}

     <Modal/>
     <Header/>


    {/* feed */}

    <Feed/>


     {/* modals */}


    </div>
  )
}
