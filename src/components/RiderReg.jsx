import { useReducer } from "react";
import Input from "./UI/Input";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  city: "",
  date_allocated: "",
  period_of_repayment: "",
  cost_of_acquisition: "",
  return_on_investment: "",
  bike_type: "",
  bike_color: "",
  reg_name: "",
  chasis_num: "",
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
      return { ...state, phone_number: action.phone_number };
    case "date_allocated":
      return { ...state, date_allocated: action.date_allocated };
    case "period_of_repayment":
      return {
        ...state,
        period_of_repayment: action.riderProfile.period_of_repayment,
      };
    case "cost_of_acquisition":
      return { ...state, cost_of_acquisition: action.cost_of_acquisition };
    case "return_on_investment":
      return {
        ...state,
        return_on_investment: action.riderProfile.return_on_investment,
      };
    case "bike_type":
      return { ...state, bike_type: action.riderProfile.bike_type };
    case "bike_color":
      return { ...state, bike_color: action.riderProfile.bike_color };
    case "reg_name":
      return { ...state, reg_name: action.riderProfile.reg_name };
    case "chasis_num":
      return { ...state, chasis_num: action.riderProfile.chasis_num };

    default:
      return state;
  }
};

const RiderReg = () => {
  const [riderInfo, dispatch] = useReducer(reducer, initialState);

  const lastNameHandler = (e) => {
    dispatch({ type: "last_name", last_name: e.target.value });
  };
  const emailHandler = (e) => {
    dispatch({ type: "email", email: e.target.value });
  };
  const phoneNoHandler = (e) => {
    dispatch({ type: "phone_number", number: e.target.value });
  };
  const cityHandler = (e) => {
    dispatch({ type: "city", city: e.target.value });
  };

  const riderDetails = {
    riderProfile: {
      date_allocated: riderInfo.date_allocated,
      period_of_repayment: riderInfo.period_of_repayment,
      cost_of_acquisition: riderInfo.cost_of_acquisition,
      return_on_investment: riderInfo.return_on_investment,
      bike_type: riderInfo.bike_type,
      bike_color: riderInfo.bike_color,
      reg_name: riderInfo.reg_name,
      chasis_num: riderInfo.chasis_num,
    },
    first_name: riderInfo.first_name,
    last_name: riderInfo.last_name,
    email: riderInfo.email,
    phone_number: riderInfo.phone_number,
    city: riderInfo.city,
  };
  
  return (
    <form>
      <Input
        id="first_name"
        label="First Name: "
        attr={{
          type: "text",
          maxLength: "50",
          min: "1",
          value: riderInfo.first_name,
          onChange: (e) =>
            dispatch({ type: "first_name", first_name: e.target.value }),
        }}
      />
      <Input
        id="last_name"
        label="Last Name: "
        attr={{
          type: "text",
          min: "1",
          maxLength: "50",
          value: riderInfo.last_name,
          onChange: lastNameHandler,
        }}
      />
      <Input
        id="email"
        label="Email: "
        atrr={{
          type: "email",
          id: "email",
          maxLength: "254",
          value: riderInfo.email,
          onChange: { emailHandler },
          required,
        }}
      />
      <Input
        id="phone_number"
        label="Phone Number: "
        attr={{
          type: "number",
          name: "phone_number",
          min: "1",
          max: "128",
          value: riderInfo.phone_number,
          onChange: phoneNoHandler,
          required,
        }}
      />
      <Input
        id="city"
        label="City: "
        attr={{
          type: "text",
          name: "city",
          maxLength: "254",
          value: riderInfo.city,
          onChange: cityHandler,
        }}
      />
      <Input
        id="date_allocated"
        label="Date Allocated: "
        attr={{
          type: "date",
          name: "date_allocated",
          max: "254",
          value: riderInfo.date_allocated,
          onChange: (e) =>
            dispatch({
              type: "date_allocated",
              date_allocated: e.target.value,
            }),
        }}
      />
      <Input
        id="period_of_repayment"
        label="Period of Payment: "
        attr={{
          type: "number",
          name: "period_of_repayment",
          max: "254",
          value: riderInfo.period_of_repayment,
          onChange: (e) =>
            dispatch({
              type: "period_of_repayment",
              period_of_repayment: e.target.value,
            }),
        }}
      />
      <Input
        id="cost_of_acquisition"
        label="Cost of Accusition: "
        attr={{
          type: "text",
          value: riderInfo.cost_of_acquisition,
          onChange: (e) =>
            dispatch({
              type: "cost_of_acquisition",
              cost_of_acquisition: e.target.value,
            }),
        }}
      />
      <Input
        id="return_on_investment"
        label="Return on investment: "
        attr={{
          type: "number",
          value: riderInfo.return_on_investment,
          onChange: (e) =>
            dispatch({
              type: "return_on_investment",
              return_on_investment: e.target.value,
            }),
        }}
      />

      <Input
        id="bike_type"
        label="Bike Type"
        attr={{
          type: "text",
          value: riderInfo.bike_type,
          onChange: (e) =>
            dispatch({ type: "bike_type", bike_type: e.target.value }),
        }}
      />

      <Input
        id="bike_color"
        label="Bike Color"
        attr={{
          type: "text",
          value: riderInfo.bike_color,
          onChange: (e) =>
            dispatch({ type: "bike_color", bike_color: e.target.value }),
        }}
      />

      <Input
        id="reg_name"
        label="Reg Name: "
        attr={{
          type: "text",
          value: riderInfo.reg_name,
          onChange: (e) =>
            dispatch({ type: "bike_color", bike_color: e.target.value }),
        }}
      />

      <Input
        id="chasis_num"
        label="Chasis Num: "
        attr={{
          type: "text",
          value: riderInfo.chasis_num,
          onChange: (e) =>
            dispatch({ type: "chasis_num", chasis_num: e.target.value }),
        }}
      />
    </form>
  );
};

export default RiderReg;
