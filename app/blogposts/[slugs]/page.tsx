import React from 'react'
import { useRouter } from 'next/router'

export default function Slug() {
  const router= useRouter();
  const {slug}= router.query;
  return (
    <>
   
    
    <h1> Title of the pagesg: {slug}</h1>
    <div>
      Lorem ipsum dolor sit amet consectetur, 
      reprehenderit sapiente odio impedit praesentium.
    </div>
    </>
  )
}
