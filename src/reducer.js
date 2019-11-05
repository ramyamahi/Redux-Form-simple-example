
const LOAD = 'redux-form-examples/account/LOAD'

const reducer = (state = {say: '', activeStep: 0}, action) => {
  switch (action.type) {
    case 'HELLO_REDUX':
      return { ...state, say : 'Hello World Redux'  };

    case 'BYE_REDUX':
      return { ...state, say : ''  };
    
    case 'UPDATE_ACTIVE_STEP':
      return { ...state, activeStep : action.payload  };
      case LOAD:
      return {
        data: action.data
      }

    default:
      return state;
  }
  
};




/**
 * Simulates data loaded into this reducer from somewhere
 */
export const load = data => ({ type: LOAD, data }) 
export default reducer;