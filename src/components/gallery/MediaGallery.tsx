'use client'
import Link from 'next/link'
import React from 'react'
import { useResources } from '@/app/hooks/useResources';
import Cldimg from '../shared/Cldimg';
import { ResourceType } from '@/types/types'
import { useQuery } from '@tanstack/react-query';

interface MediaProps {
  resources: Array<ResourceType>
  tag: string
}

const MediaGallery = ({resources: initialresources, tag}: MediaProps) => {
  const {resources} = useResources({initialresources, tag});
  return (
    <main className="flex-1">
        <div className="container py-6 px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {
              resources?.map((resource: ResourceType) => (
                <Link key={resource.asset_id} href={`/photos/${resource.asset_id}`} className="group relative overflow-hidden rounded-lg" prefetch={false}>
                 <Cldimg width={resource.width} height={resource.height} src={resource.public_id} />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-all group-hover:opacity-100">
                    <FilePenIcon />
                  </div>
                </Link>   
              ))
            }
                     
          </div>
        </div>
      </main>
  )
}

export default MediaGallery

function FilePenIcon() {
  return (
    <svg
      className="h-8 w-8 text-white"
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