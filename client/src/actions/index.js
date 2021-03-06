import streams from "../apis/streams";
import history from "../histroy";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });

  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  });

  //navigation to get the user back to the root route
  history.push("/");
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dipatch => {
  const response = await streams.get(`/streams/${id}`);

  dipatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dipatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dipatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};

export const deleteStream = id => async dipatch => {
  await streams.delete(`/streams/${id}`);

  dipatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
