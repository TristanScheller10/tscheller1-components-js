
import { PageHeader } from "../../components/header/PageHeader"
import { getEmployees } from "@/lib/firebase/getEmployees";
 

// Link element to create a dynamic route.

 

 async function EmployeesPage (  ) {
   const payload = await getEmployees();
    const keys =  Object.keys(payload)
    const values = Object.values(payload)
    const entries = Object.entries(payload)
 

  

   return(
    <>
    <PageHeader title="All Employees Display" tagline="example of displaying all items in data"/>
    <main className=" min-h-screen py-24">
       {
          values.map(item=> <Card  key={item.uid} {...item}/>)
       }
     </main>
    </>
   )
  
  
}


export default EmployeesPage