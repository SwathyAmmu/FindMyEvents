import { GET_EVENTS, DELETE_EVENT, ADD_EVENT } from "./types";
import { connect } from "react-redux";
import axios from "axios";

export const getEvents = () => async (dispatch) => {
  const res = await axios.get("http://localhost:7000/Events");
  dispatch({
    type: GET_EVENTS,
    payload: res.data,
  });
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:7000/Events/${id}`);
    dispatch({
      type: DELETE_EVENT,
      payload: id,
    });
  } catch (e) {
    dispatch({
      type: DELETE_EVENT,
      payload: id,
    });
  }
};

export const addEvent = (event) => async (dispatch) => {
  const res = await axios.post("http://localhost:7000/Events/", event);
  dispatch({
    type: ADD_EVENT,
    payload: res.data,
  });
};
