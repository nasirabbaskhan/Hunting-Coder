import React from 'react'
// import { useRouter } from 'next/router'

export default function Slug({params}:{ params :{slug:string}}) {
  
  return (
    // step 1: find the files corresponding to the slugs 
    // step 2: populate them inside the page
    <> 
    Your slug is: {params.slug}
    </>
  )
}
