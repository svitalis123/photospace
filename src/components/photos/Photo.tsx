'use client'
import React, { useState } from 'react'
import Cldimg from '../shared/Cldimg'
import { ResourceType } from '@/types/types'
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from "@/components/ui/sheet"
import { CldImage, CldImageProps } from 'next-cloudinary'

interface photoProps {
  resource: Array<ResourceType>
}

const Photo = ({resource}: photoProps) => {
  const [transfrom, setTransform] = useState<string>('undefined');
  type Transformations  = Omit<CldImageProps, 'src' | 'alt' >
  const transformations:Transformations = {}

  if(transfrom === 'enhance'){
    transformations.enhance = true
  }else if(transfrom === 'restore'){
    transformations.restore = true
  } else if(transfrom === 'removeBackground'){
    transformations.removeBackground = true
  }
  return (
    <main className='w-full '>
      <header className="flex items-center justify-between h-16 px-4 border-b shrink-0 md:px-6">
        <a href='/' className="rounded-full hover:outline-2 p-3 shadow-sm delay-50 hover:shadow-md duration-500">
          <ArrowLeftIcon className="h-5 w-5" />
          <span className="sr-only">Go back</span>
        </a>
        <Sheet >
          <SheetTrigger asChild>
            <Button variant="outline">
              <FilePenIcon className="h-5 w-5 mr-2" />
              Edit image
            </Button>
          </SheetTrigger>
          <SheetContent >
            <SheetHeader>
              <SheetTitle>Edit image</SheetTitle>
              <SheetDescription>Transform your image with various tools.</SheetDescription>
            </SheetHeader>
            <div className=" gap-4 py-4 flex flex-col items-start">
            <Button onClick={() => setTransform('undefined')} variant="outline" className='w-full flex justify-start'>
                <TrashIcon className="h-5 w-5 mr-2" />
                None
              </Button>
              <Button onClick={() => setTransform('removeBackground')} variant="outline" className='w-full flex justify-start'>
                <TrashIcon className="h-5 w-5 mr-2" />
                Remove background
              </Button>
              <Button  onClick={() => setTransform('enhance')} variant="outline" className='w-full flex justify-start'>
                <CropIcon className="h-5 w-5 mr-2" />
                Enhance
              </Button>
              <Button onClick={() => setTransform('restore')} variant="outline" className='w-full text-left flex justify-start'>
                <UndoIcon className="h-5 w-5 mr-2" />
                Restore
              </Button>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </header>
      <div className="flex h-[100vh]">
      <CldImage
        src={resource[0].public_id}
        width={resource[0].width}
        height={resource[0].height}
        alt={`image ${resource[0].public_id}`}
        {...transformations}
        sizes="(max-width: 768px) 50vw,  (max-width: 1200px) 33vw, 100vw"
        className="aspect-square w-full object-cover transition-all group-hover:scale-105"
      />
        {/* <Cldimg src={resource[0].public_id} width={resource[0].width} height={resource[0].height}  /> */}
      </div>
    </main>
  )
}

export default Photo



function ArrowLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function CropIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2v14a2 2 0 0 0 2 2h14" />
      <path d="M18 22V8a2 2 0 0 0-2-2H2" />
    </svg>
  )
}


function FilePenIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}


function UndoIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7v6h6" />
      <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
    </svg>
  )
}