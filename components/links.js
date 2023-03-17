import { LinkForm } from "./linkForm"
import { db } from "@/firebase/firebase"


export const Link= () => {

const addOrEditLink = async (linkObject) => {
await db.collection("links").doc().set(linkObject)
console.log('new task added')
}
  return ( 
  <> 
<LinkForm addOrEditLink={addOrEditLink} />
 <h1>Link</h1>
</>
 )
}
