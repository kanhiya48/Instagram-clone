import React, { Fragment, useRef, useState } from 'react'
import {modalState} from '../../atoms/modalAtom'
import { useRecoilState } from 'recoil';

import { Dialog,Transition } from '@headlessui/react';
import { CameraIcon } from '@heroicons/react/outline';
function Modal() {
    const [open,setOpen]=useRecoilState(modalState);
    const filePickerRef=useRef(null);
    const [selectedFile,setSelectedFile]=useState (null);
    const captionRef=useRef(null);
    const addImageToPost =(e)=>{
      const reader =new FileReader();
      if(e.target.files[0]){
        reader.readAsDataURL(e.target.files[0]);
      }
      reader.onload=(readerEvent)=>{
        setSelectedFile(readerEvent.target.result);
      };
    };
  return (
    <Transition.Root show={open} as={Fragment}>

        <Dialog as='div'
        className='fixed z-10 inset-0 overflow-y-auto'
        onClose={setOpen}>
            <div className='flex items-end justify-center min-h-[800px]
                sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
              <Transition.Child
      enter="ease-out duration-300"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="ease-in duration-200"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
    <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75
    transition-opacity'  />
    </Transition.Child>
    
     <span className='hidden sm:inline-block sm:align-middle sm:h-screen'
     aria-hidden='true'>
        &#8203;

     </span>

    
     <Transition.Child
     as={Fragment}
      enter=" ease-out duration-300 "
      enter-from="sm:scale-95 opacity-0 sm:translate-y-0 translate-y-4"
      enter-to="translate-y-0 sm:scale-100 opacity-100"
      leave="ease-in duration-200"
      leave-from="opacity-100 translate-y-0 sm:scale-100"
      leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <div className='inline-block align-bottom bg-white rounded-lg px-4
      pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all
      sm:my-8 sm:align-middle sm:max-w-sm sm:w-full
      sm:p-6' >
        <div>
          {
            selectedFile ? (
        <img src={ selectedFile} className='w-full object-contain cursor-pointer' onClick={()=>setSelectedFile(null)}></img>
            ):(
          <div className='mx-auto flex items-center justify-center
          h-12 w-12 rounded-full bg-red-100
          cursor-pointer' onClick={()=> filePickerRef.current.click()}>


            <CameraIcon className='h-6 w-6 text-red-600'
            aria-hidden='true'/>

          </div>

            )
          }
          <div>
            <div className='mt-3 text-center sm:mt-5'>
              <Dialog.Title as='h3'
              className='text-lg leading-6 font-mediium tect-gray-900'>
                Upload a photo
              </Dialog.Title>
              
              <div>
                <input  
                ref={filePickerRef}
                type='file'
                hidden
                onChange={addImageToPost}
                > 
                
                </input>
                
              </div>
            <div className='mt-2'>
              <input className='border-none focus:ring-0 w-full text-center'
              type='text'
              placeholder='Please enter a caption...'></input>
              ref={captionRef}
            </div>
          </div>
        </div>
        <div className='mt-5 sm:mt-6'>
          <button className='inline-flex justify-center w-full rounded-md
          border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base
          font-medium text-white hover:bg-red-700 focus:outline-none
           focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300
           disabled:cursor-not-allowed hover:disabled:bg-gray-300'>
            Upload Post

          </button>

        </div>
        </div>
      </div>
    </Transition.Child>
            </div>


        </Dialog>
    </Transition.Root>
        
   
  )
}

export default Modal