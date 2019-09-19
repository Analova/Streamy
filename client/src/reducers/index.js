import { combineReducer } from "redux";
import { reducer as formReducer } from "redux-form";

export default combineReducer({
  form: formReducer
});
