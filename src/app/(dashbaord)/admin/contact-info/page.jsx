
import { fetchAPI } from "@/utils/apiService"

export default async function contactinfo() {

          const response = await fetchAPI("contacts", "GET");
         console.log("response" ,response)
      

   
 }