
import axios from "axios";

const API_KEY = "bdc7268e4f54454db8175217181208";

export function fetchAPIResponse(city){
    //we return a function that will dispatch the action
    return function(dispatch){
        //make the axios call for the API

        axios.get(`http://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${city}`)
            .then(response=>{
                let arr = [];
                for (var key in response.data.location) {
                    arr.push(response.data.location[key]);
                }
            dispatch({type:"FETCH_LOCATION", payload:arr});
                let arr2 = [];
                for (var key2 in response.data.current) {
                    arr2.push(response.data.current[key2]);
                } 
            //search the index of the conditons array
            console.log(arr2);
            //splice (remove) it from the array
            arr2.splice(5, 1);
        
            //dispatch the FETCH_WEATHER action
            dispatch({type:"FETCH_WEATHER", payload:arr2});

            let arr3 = [];
            for (var key3 in response.data.current.condition) {
                arr3.push(response.data.current.condition[key3]);
            }

            // --- DISPATCH THE ACTION
            //dispatch the FETCH_CONDITIONS action
            dispatch({type:"FETCH_CONDITIONS", payload:arr3});            

            // console.log the FULL response
            console.log(response);

        }).catch(err=>{
            console.log(err)
        });     
   }
}