import React from 'react'
import {v2 as Cloudinary} from 'cloudinary';
import Photo from '@/components/photos/Photo';

Cloudinary.config({
  api_secret: process.env.CLOUDINARY_API_SECRET,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

})

const page = async ({params}: {params: {assetid: string}}) => {
  const {resources} = await Cloudinary.api.resources_by_asset_ids(params.assetid);
  console.log("photo", resources)
  return (
    <div className='h-fit'>
      <Photo
       resource = {resources}
      />
    </div>
  )
}

export default page
