import Link from 'next/link'

import {NavBar} from "../../../components/navigation/NavBar"
import {SingleRecordCard} from "../../../components/card/SingleFoodCard"
import {getFoods} from "@/lib/firebase/getFoods"
import { PageHeader } from "../../../components/header/PageHeader"
import { Footer } from "../../../components/footer/Footer"

async function getood(id) {
  const payload = await getFoods(id)
  const records = Object.values(payload)
  const singleFood = records.find(item => item.id == id)
  return singleFood
}
 
 async function FoodPage ({params}) {
  const id = params.id
  const foodData = await getFood(id)
 
   return(
    <>
    <NavBar/>
    <PageHeader title="Single Record Display" tagline="Check out more info"/>
    <main className="py-6 flex flex-wrap justify-center">
     <SingleRecordCard {...foodData}/>
    </main>
     <Footer/>
    </>
   )
}

export default FoodPage