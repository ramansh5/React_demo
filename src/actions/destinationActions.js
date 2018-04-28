export function getDestinations(city){
     return function(dispatch){
          $.get( "http://localhost:8080/getDestinations/?city="+city, function( data ) {
          	if(data.status == 200 ){
          		return dispatch({
                	// Unique identifier
                	type: 'GET_DESTINATIONS',
                	// Payload
                	destinations: data.data
            	});
          	}else{
          		return dispatch({
	                // Unique identifier
	                type: 'GET_DESTINATIONS',
	                // Payload
	                destinations: []
	            });
          	}
            
         });
    }
}

// export const getDestinations = (city) => {
// return function(dispatch){
//      return dispatch({
//             // Unique identifier
//             type: 'GET_DESTINATIONS',
//             // Payload
//             city: city
//         }); 
// }
// };
  