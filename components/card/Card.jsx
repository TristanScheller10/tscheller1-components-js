import Link from 'next/link'
import Image from 'next/image'


function Card ({id, food_name, food_category, food_price, food_calories }){
    return (
           <aside>
            <h2>Name of Food: {food_name}</h2>
             <p>Categories of Food: {food_category}</p>
             <p>Price: {food_price}</p>
             <p>Calories: {food_calories}</p>
            <Link className='text-blue-600 font-semibold' href={`/food/${id}`}> view more about: {food_name}</Link>
            <div className='flex py-2'><a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Purchase </a></div>
           </aside>
    )
  }

  export {Card}