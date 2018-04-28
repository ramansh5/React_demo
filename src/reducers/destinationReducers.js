export default (state = [], action) => {
  switch (action.type){
    // Check if action dispatched is
    // GET_DESTINATIONS and act on that
    case 'GET_DESTINATIONS':
        state = action.destinations;
    default:
          return state;
  }
};

//immutable reducer

// export default (state = [], action) => {
//   switch (action.type){
//     case 'GET_DESTINATIONS':
//         return [
//           ...state,
//           Object.assign({}, action.destinations)
//         ];
//     default:
//           return state;
//   }
// };