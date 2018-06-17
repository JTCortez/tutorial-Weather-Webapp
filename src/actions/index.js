import axios from 'axios';

const API_KEY = "d52c02f0788962745998399990d4f5dc";
//+ API_KEY = ${API_KEY} (es6 syntax)
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//submitting the form calls the action creator
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  //using axios instead of JQUERY, still a AJAX request
  //returning a promise
  const request = axios.get(url);

  //TEST FIRST
  console.log('Request', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
