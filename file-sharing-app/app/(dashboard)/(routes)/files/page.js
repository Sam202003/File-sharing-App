import React from 'react'
import { UserButton } from "@clerk/nextjs";


const Files = () => {
  return (
    <div>
      Files
      <UserButton afterSignOutUrl="/"/>
{/* //Files here */}
{/* //samhere */}
    </div>
  )
}

export default Files;
