
'use client';
import { notFound, useParams } from 'next/navigation';
import React, { use } from 'react'

export default function BlogPage() {
    const  {id } = useParams();
    console.log(id,'dssdfdfsd')

if(id >= '3'){
    notFound()
}

  return (
    <div>this is blog: {id} </div>
  )
}


