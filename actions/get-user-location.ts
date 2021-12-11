import api from '../utils/api'
export default async function getUserLocation() {
  try {
    const ipLocation = await api('https://extreme-ip-lookup.com/json/')
    const {
      city,
      continent,
      country,
      countryCode,
      lat,
      lon: log,
      query: ipAddress,
      region,
    } = ipLocation.data
    return {
      city,
      continent,
      country,
      countryCode,
      lat,
      log,
      ipAddress,
      region,
    }
  } catch (err) {
    throw err.response.data
  }
}
