import { useReducer } from "react";

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
      return { ...state, period_of_repayment: action.riderProfile.period_of_repayment };
    case "cost_of_acquisition":
      return { ...state, cost_of_acquisition: action.cost_of_acquisition }
    case "return_on_investment":
      return { ...state, return_on_investment: action.riderProfile.return_on_investment }
    case "bike_type":
      return { ...state, bike_type: action.riderProfile.bike_type }
    case "bike_color":
      return {...state, bike_color: action.riderProfile.bike_color }
    case "reg_name":
      return { ...state, reg_name: action.riderProfile.reg_name }
    case "chasis_num":
      return { ...state, chasis_num: action.riderProfile.chasis_num }

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
    city: riderInfo.city
  }
  console.log(riderDetails.riderProfile.date_allocated)
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
          value={riderInfo.first_name}
          onChange={(e) =>
            dispatch({ type: "first_name", first_name: e.target.value })
          }
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
          value={riderInfo.last_name}
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
          value={riderInfo.email}
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
          value={riderInfo.phone_number}
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
          value={riderInfo.city}
          onChange={cityHandler}
        />
      </div>
      <div>
        <label htmlFor="date_allocated">Date Allocated: </label>
        <input
          type="date"
          id="date_allocated"
          name="date_allocated"
          max="254"
          value={riderInfo.date_allocated}
          onChange={(e) => dispatch({ type: "date_allocated", date_allocated: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="period_of_repayment">Period of Payment: </label>
        <input
          type="number"
          id="period_of_repayment"
          name="period_of_repayment"
          max="254"
          value={riderInfo.period_of_repayment}
          onChange={(e) => dispatch({ type: "period_of_repayment", period_of_repayment: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="cost_of_acquisition">Cost of Accusition: </label>
        <input
          type="text"
          id="cost_of_acquisition"
          name="cost_of_acquisition"
          value={riderInfo.cost_of_acquisition}
          onChange={(e) => dispatch({ type: "cost_of_acquisition", cost_of_acquisition: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="return_on_investment">Return on investment</label>
        <input
          id="return_on_investment"
          type="number"
          name="return_on_investment"
          value={riderInfo.return_on_investment}
          onChange={(e) => dispatch({ type: "return_on_investment", return_on_investment: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="bike_type">Bike Type</label>
        <input
          id="bike_type"
          type="text"
          name="bike_type"
          value={riderInfo.bike_type}
          onChange={(e) => dispatch({ type: "bike_type", bike_type: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="bike_color">Bike Color</label>
        <input
          id="bike_color"
          type="yext"
          name="bike_color"
          value={riderInfo.bike_color}
          onChange={(e) => dispatch({ type: "bike_color", bike_color: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="reg_name">Reg Name</label>
        <input
          id="reg_name"
          type="text"
          name="reg_name"
          value={riderInfo.reg_name}
          onChange={(e) => dispatch({ type: "bike_color", bike_color: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="chasis_num">Chasis Num</label>
        <input
          id="chasis_num"
          type="text"
          name="chasis_num"
          value={riderInfo.chasis_num}
          onChange={(e) => dispatch({ type: "chasis_num", chasis_num: e.target.value })}
        />
      </div>
    </form>
  );
};

export default RiderReg;
