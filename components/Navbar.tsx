import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProviders from './AuthProviders'
import { getCurrentUser } from '@/lib/session'
import { signOut } from 'next-auth/react'
import ProfileMenu from './ProfileMenu'
import { FaPlus } from 'react-icons/fa';

const Navbar = async() => {

const session =await getCurrentUser();

  return (
    <nav className='flexBetween navbar gap-7'>
      <div className="flex-1 flexStart gap-10">
<Link href="/">

<Image src="/logo.svg" width={100} height={39} alt="Flexibble" />

</Link>
<ul className="xl:flex hidden  text-small gap-7">

{NavLinks.map((link)=>(

<Link href={link.href} key={link.key}>

    {link.text}
</Link>

))}


</ul>
      </div>

      <div className="flexCenter gap-6">

 {session?.user?(

<>
<ProfileMenu session={session}/>


<Link  className=' flexBetween gap-1 bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600 transition-all' href="/create-project"><FaPlus className='w-2 h-2' /> <span>Create post</span> </Link>
</>


 ):(

<AuthProviders/>

 )}

      </div>
    </nav>
  )
}

export default Navbar
