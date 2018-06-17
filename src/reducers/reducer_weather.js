import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action){
  //redux promise manipulated the payload request, and manipulated it with
  //middleware
  //TEST FIRST
  console.log('Action Received', action);

  switch(action.type){
    case FETCH_WEATHER:
      //never set state = something. don't manipulate it directly (state.push[])
      //return state.concat([action.payload.data]);
      //VID 60
      return [action.payload.data, ...state]; // [city, city, city] NOT [city, [city]]
  }

  return state;
}
