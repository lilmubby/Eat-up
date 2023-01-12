import { useReducer } from "react";

const initialState = {
  profile: {
    sms_notification: false,
    email_notification: false,
    push_notification: false,
  },
  password: "",
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  city: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "first_name":
      return { ...state, first_name: action.first_name };
    case "last_name":
      return { ...state, last_name: action.last_name };
    case "email":
      return { ...state, email: action.email };
    case "phone_number":
      return {...state, phone_number: action.phone_number};
    case "password":
        return {...state, password: action.password};

    default:
      return state;
  }
};

const CustomerReg = () => {
  const [customerInfo, dispatch] = useReducer(reducer, initialState);

  const firstNameHandler = (e) => {
    dispatch({ type: "first_name", first_name: e.target.value });
  }
  const lastNameHandler = (e) => {
    dispatch({ type: "last_name", last_name: e.target.value });
  }
  const emailHandler = (e) => {
    dispatch({ type: "email", email: e.target.value });
  }
  const phoneNoHandler = (e) => {
    dispatch({ type: "phone_number", number: e.target.value });
  }
  const cityHandler = (e) => {
    dispatch({ type: "city", city: e.target.value });
  }
  const passwordHandler = (e) => {
    dispatch({ type: "password", password: e.target.value });
  }

  // console.log(customerInfo);
  return (
    <form>
      <div>
        <label htmlFor="first_name">First Name: </label>
        <input
          type="text"
          id="first_name"
          max="50"
          min="1"
          name="first_name"
          value={customerInfo.first_name}
          onChange={firstNameHandler}
        />
      </div>
      <div>
        <label htmlFor="last_name">Last Name: </label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          min="1"
          max="50"
          value={customerInfo.last_name}
          onChange={lastNameHandler}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          min="1"
          max="254"
          value={customerInfo.email}
          onChange={emailHandler}
          required
        />
      </div>
      <div>
        <label htmlFor="phone_number">Phone Number: </label>
        <input
          type="number"
          id="phone_number"
          name="phone_number"
          min="1"
          max="128"
          value={customerInfo.phone_number}
          onChange={phoneNoHandler}
          required
        />
      </div>
      <div>
        <label htmlFor="city">City: </label>
        <input
          type="text"
          id="city"
          name="city"
          max="254"
          value={customerInfo.city}
          onChange={cityHandler}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          min="1"
          max="50"
          name="password"
          value={customerInfo.password}
          onChange={passwordHandler}
          required
        />
      </div>
      {/* <div>
        <label htmlFor="" ></label>
      </div> */}
    </form>
  );
};

export default CustomerReg;
