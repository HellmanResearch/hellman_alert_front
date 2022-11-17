import { configureStore } from '@reduxjs/toolkit';
import userReducer from './login'
export default configureStore({
    reducer:{
        user:userReducer
    }
})

/*
"key": "string",
  "display": "string",
  "fields_attr": {},
  "rule_template": "string",
  "rules_hint": "string",
  "query_attr": {},
  "query_template": "string",
  "group": 0
}
*/