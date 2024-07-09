'use client'
import React from 'react'
import { CldUploadButton, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import { useResources } from '@/app/hooks/useResources';
import { ResourceType } from '@/types/types';

const UploadBtn = () => {
  const {addResources} = useResources();
  const handlebtnsuccess = (results: CloudinaryUploadWidgetResults) => {
    addResources([results?.info as ResourceType])
  }
  return (
    <div>
      <CldUploadButton
      options={{
        tags: ['media'],
        autoMinimize: true
      }}
      onSuccess={handlebtnsuccess}
       signatureEndpoint='/api/sign-cloudinary-params' className='flex justify-center items-center gap-[8px]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/></svg>
        upload
      </CldUploadButton>   
    </div>
  )
}

export default UploadBtn
