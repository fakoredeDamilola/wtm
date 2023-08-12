import axios from "axios";

// LOCATION

// turned off location service use Ip address
const IPfind = async () => {
  const apiKey = "789128028b0f74e149d7a80f3b17c00781258614";
  try {
    const response = await axios.get(
      `https://api.getgeoapi.com/v2/ip/check?api_key=${apiKey}&format=json`
    );
    console.log(response.data.location);
  } catch (error) {
    console.error(error);
  }
};

// If geolocation is available use it
export const geoFindUser = () => {
  function success(position) {
    if (position.coords.latitude && position.coords.longitude) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(position);
      console.log(latitude, longitude);
    } else {
      // make the call to an IP geolocation service
      IPfind();
    }
  }
  function error() {
    console.log(
      "unable to retrieve position from geolocation api, trying ip find ..."
    );
    IPfind();
  }

  if (!navigator.geolocation) {
    console.log("geolocation is not supported by your device, trying ip find");
    IPfind();
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  }
};

// Weather Analysis

// Current weather data

export const getCurrentWeatherData = async (
  lat = 7.3782,
  lon = 3.9062,
  unit = "metric"
) => {
  const apiKey = "b300406d7c6ee09a4133cfe76e70b495";

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
// Weather radar

export const getWeatherRadar = async () => {
  const apiKey = "b300406d7c6ee09a4133cfe76e70b495";
  try {
    const response = await axios.get(
      `http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?appid=${apiKey}`
    );
    console.log(response);
  } catch (error) {}
};
