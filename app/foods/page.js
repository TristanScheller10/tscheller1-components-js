import Link from 'next/link'

import { PageHeader } from "../../components/header/PageHeader"
import { Card } from "../../components/card/Card";
import { NavBar } from "@/components/navigation/NavBar";
import {Footer} from "../../components/footer/Footer"
import { getFoods } from "@/lib/firebase/getFoods";

 
 async function FoodsPage () {
   const payload = await getFoods();
    const keys = Object.keys(payload)
    const values = Object.values(payload)
    const entries = Object.entries(payload)
    const temp = true;
 

   return(
      <>
    <NavBar/>
    <PageHeader title="All Foods Display" tagline="example of displaying all items in data"/>
    <main className=" min-h-screen py-24">
       {
          values.map(item=> <Card  key={item.id} {...item}/>)
       }
     </main>
     <Footer/>
    </>
   )
  
  
}


export default FoodsPage