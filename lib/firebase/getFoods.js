import {db} from './firebase-config'
export async function getEmployees () {
    const dbRef =  db.ref('/foods')
    const dataSnapshot = await dbRef.once('value')
     return  dataSnapshot.val()
    
}