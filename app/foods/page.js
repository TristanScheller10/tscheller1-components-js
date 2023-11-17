
import { PageHeader } from "../../components/header/PageHeader"
import { getFoods } from "@/lib/firebase/getFoods";
 

// Link element to create a dynamic route.

 

 async function FoodsPage (  ) {
   const payload = await getFoods();
    const keys =  Object.keys(payload)
    const values = Object.values(payload)
    const entries = Object.entries(payload)
 

  

   return(
    <>
    <PageHeader title="All Foods Display" tagline="example of displaying all items in data"/>
    <main className=" min-h-screen py-24">
       {
          values.map(item=> <Card  key={item.uid} {...item}/>)
       }
     </main>
    </>
   )
  
  
}


export default FoodsPage