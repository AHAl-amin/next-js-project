import Link from 'next/link'
import React from 'react'

export default function Blogs() {

  const blogs =[{
    id:1,
    title : "First Blog",
    content : "This is my first blog content"
  },
{
  id:2,
  title: "Second Blog",
  content: "This is my second blog content"
}
]

  return (
    <div>


      {blogs.map((blog) =>
        <li key={blog.title} className='list-none mt-5'>
        <Link href={`/blogs/${blog.id}`}>  {blog.title}</Link>
          
          </li>
      )}
    </div>
  )
}
