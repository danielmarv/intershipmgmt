import api from "../../services/api";

import { addError, removeError } from "./error";
import { addSuccess } from "./success";

import {
    SET_PRACTICE,
    SET_STUDENT,
} from "../actionTypes";

export const setPractice = (practice) => ({
    type: SET_PRACTICE,
    practice,
});

export const getInternships = () => {
    return async (dispatch) => {
      try {
        const internships = await api.call("get", "internships");
        console.log(internships);
        dispatch(setInternships(internships));
        dispatch(removeError());
      } catch (err) {
        const error = err.response.data;
        dispatch(addError(error.message));
      }
    };
  };


  