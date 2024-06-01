import axios from 'axios'

export async function getRoutesFromApi(startCity, destination) {
    const baseURL = "http://localhost:8080/booking/";
    const headers = {
        "Access-Control-Allow-Origin" : "*",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
      }
    const incoming = await axios.post(baseURL, { startCity, destination },{headers:headers})
    console.log(incoming)
    return incoming
}