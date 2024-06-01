import axios from 'axios'

export async function updateBusSeats(busid) {
    const baseURL = "http://localhost:8080/booking/booked/";
    const headers = {
        "Access-Control-Allow-Origin" : "*",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
      }
      const startCity = localStorage.getItem("startCity")
      const destination = localStorage.getItem("destination")
     const incoming = await axios.post(baseURL, { busid ,startCity,destination},{headers:headers})
}