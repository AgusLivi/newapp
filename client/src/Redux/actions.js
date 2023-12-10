import axios from "axios";
import {
    CREATE_ROUTINE,
    CREATE_USER,
    GET_ALL_USER,
} from './actionsType'

//add routes
export const createUser = (userData) => {
    return async () => {
      try {
        const { data } = await axios.post(``, userData); 
       data && toast.success('El usuario se ha creado correctamente.');
      } catch (error) {
        alert(error.message);
      }
    };
  };

export const creteRoutine =  (formmData,) => {

    return async () => {
      try {
        const { data } = await axios.post(``, formmData); 
       data && toast.success("El producto fue creado exitosamente.");
      } catch (error) {
        alert('Hubo un error', error.message);
      }
    };
  };

  export const getAllUser = () => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get('/admin/user');
        return dispatch({
          type: GET_ALL_USER,
          payload: data,
        });
      } catch (error) {
        alert(error.message);
      }
    };
  };
