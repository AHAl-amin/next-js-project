import Link from 'next/link'
import React from 'react'
export const metadata ={
title: 'About Page',
description: 'This is about page description'
}
export default function AboutLayout({ children }) {
  return (
    <div>
        <nav className=" ">
      <ul className="flex gap-6 border-b">
         <li> <Link href="/about/mission"> Mission</Link> </li>
          <li><Link href="/about/vission">Vission</Link> </li>
      </ul>
            </nav>
        {children}
    </div>
  )
}
