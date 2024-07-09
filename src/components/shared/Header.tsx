import Link from 'next/link'
import React from 'react'
import UploadBtn from './UploadBtn'

const Header = () => {
  return (
    <div>
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:h-16 sm:px-6">
        <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
          <CloudIcon />
          <span className="hidden sm:inline">My Drive</span>
        </Link>
        <div className="flex-1" />
        <UploadBtn />
      </header>
    </div>
  )
}

export default Header


function CloudIcon() {
  return (
    <svg
      className="h-6 w-6"
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}