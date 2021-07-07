import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import { categoryReducers } from "./category.reducers";
import userReducer from "./user.reducers";
import { serviceReducers } from "./service.reducers";
import { projectReducers } from "./project.reducers";
import { blogReducers } from "./blog.reducers";
import { partnershipReducers } from "./partnership.reducers";
import { contactReducers } from "./contact.reducers";
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  category: categoryReducers,
  service: serviceReducers,
  project: projectReducers,
  blog: blogReducers,
  partnership: partnershipReducers,
  contact: contactReducers,
});

export default rootReducer;
