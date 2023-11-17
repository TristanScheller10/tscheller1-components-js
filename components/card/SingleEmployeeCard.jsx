import Link from 'next/link'
import Image from 'next/image'


function SingleEmployeeCard ({uid, fullname, position, profileImage }){
    return (
           <aside>
            <h2>{fullname}</h2>
            <Image
             src={`/${profileImage}`}
             width={200}
             height={200}
             alt={fullname}
            />
            <p>{position}</p>
            <p>{uid}</p>
            <Link className='text-blue-600 font-semibold' href={`/foods`}>Back to Employees Page</Link>
  
           </aside>
    )
  }

  export {SingleEmployeeCard}