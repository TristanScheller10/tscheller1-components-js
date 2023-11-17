import Link from 'next/link'
import Image from 'next/image'


function SingleFoodCard ({ food_name, food_category, food_price, food_calories, food_ingredients, food_origin_country, food_nutrition_facts, food_expiration_date, food_weight, food_brand, food_allergens,  food_description}){
    return (
           <aside>
            <h2>{food_name}</h2>
            <p>{food_category}</p>
            <p>{food_price}</p>
            <p>{food_calories}</p>
            <p>{food_ingredients}</p>
            <p>{food_description}</p>
            <p>{food_origin_country}</p>
            <p>{food_allergens}</p>
            <p>{food_brand}</p>
            <p>{food_weight}</p>
            <p>{food_expiration_date}</p>
            <p>{food_nutrition_facts}</p>

            <Link className='text-blue-600 font-semibold' href={`/foods`}>Back to Foods Page</Link>
  
           </aside>
    )
  }

  export {SingleFoodCard}