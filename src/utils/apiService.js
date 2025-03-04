import Cookies from "js-cookie"

const API_BASE = "https://thehindutourism.com/api"

export const fetchAPI = async (
  endpoint = "",
  method = "GET",
  data = null,
  id = null,
  slug = null,
) => {
  const accessToken = Cookies.get("access_token")
  let url = `${API_BASE}/${endpoint}`
  
  if (id) url = `${url}/${id}`
  if (slug) url = `${url}?slug=${slug}`

  const isFormData = data instanceof FormData
  const options = {
    method,
    headers: {
      ...(!isFormData && { "Content-Type": "application/json" }),
      ...(accessToken && { Authorization: `JWT ${accessToken}` }),
    },
    ...(data && { body: isFormData ? data : JSON.stringify(data) }),
    revalidate: 0 ,
  }

  try {
    const response = await fetch(url, options)
    const responseData = await response.json()
    
    if (!response.ok) {
      const errorMessage = responseData.message || 
                          responseData.detail || 
                          responseData.error ||
                          'Request failed'
      throw new Error(errorMessage)
    }
    
    return responseData
  } catch (error) {
    console.error("API Error:", error.message)
    throw new Error(error.message || 'An unexpected error occurred')
  }
}
