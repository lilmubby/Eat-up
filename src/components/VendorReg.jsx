import { useReducer } from "react";

const initialState = {
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNum: "",
  city: "",
  userRank: "",
  bizName: "",
  bizDesc: "",
  bizAddr: "",
  storeType: "",
  noOfStores: "",
  orderType: "",
  deliveryType: "",
  social1: "",
  social2: "",
  social3: "",
  bizPhone: "",
  bizEmail: "",
  prepTime: "",
  minOrder: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case value:
      return state;

    default:
      return state;
  }
};
// const Input = () => {
//   return (

//   )
// }
const VendorReg = (props) => {
  const [vendorInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          value={vendorInfo.firstName}
          onChange={(e) =>
            dispatch({ type: "firstName", firstName: e.target.value })
          }
          min="1"
          max="128"
        />
      </div>
      <div>
        <label htmlFor="lastName"></label>
        <input
          min="1"
          max="50"
          type="text"
          value={vendorInfo.lastName}
          onChange={(e) =>
            dispatch({ type: "firstName", lastName: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          value={vendorInfo.email}
          onChange={(e) => dispatch({ type: "email", email: e.target.value })}
          min="1"
          max="254"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          value={vendorInfo.password}
          onChange={(e) =>
            dispatch({ type: "password", password: e.target.value })
          }
          max="254"
          min="1"
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNum"></label>
        <input
          type="text"
          value={vendorInfo.phoneNum}
          onChange={(e) =>
            dispatch({ type: "phoneNum", phoneNum: e.target.value })
          }
          max="50"
          min="1"
          required
        />
      </div>
      <div>
        <label htmlFor="city">City: </label>
        <input
          type="text"
          value={vendorInfo.city}
          onChange={(e) => dispatch({ type: "city", city: e.target.value })}
          max="250"
        />
      </div>
      <div>
        <label htmlFor="userRank">User Rank</label>
        <iput
          type="text"
          min="1"
          max="64"
          value={vendorInfo.userRank}
          onChange={(e) =>
            dispatch({ type: "userRank", userRank: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="bizName">Business Name</label>
        <iput
          type="text"
          min="1"
          max="64"
          value={vendorInfo.bizName}
          onChange={(e) =>
            dispatch({ type: "bizName", bizName: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="bizDesc">Business Description</label>
        <iput
          type="text"
          min="1"
          max=""
          value={vendorInfo.bizDesc}
          onChange={(e) =>
            dispatch({ type: "bizDesc", bizDesc: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="bizAddr">Business Address</label>
        <iput
          type="text"
          min="1"
          max="64"
          value={vendorInfo.bizAddr}
          onChange={(e) =>
            dispatch({ type: "bizAddr", bizAddr: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="storeType">Store Type</label>
        <iput
          type="text"
          min="1"
          max=""
          value={vendorInfo.storeType}
          onChange={(e) =>
            dispatch({ type: "storeType", storeType: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="noOfStores">Number Of Store</label>
        <iput
          type="number"
          min="1"
          max=""
          value={vendorInfo.noOfStores}
          onChange={(e) =>
            dispatch({ type: "noOfStores", noOfStores: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="orderType">Order Type</label>
        <iput
          type="text"
          min="1"
          max=""
          value={vendorInfo.orderType}
          onChange={(e) =>
            dispatch({ type: "orderType", orderType: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="deliveryType">Delivery Type</label>
        <iput
          type="text"
          min="1"
          max=""
          value={vendorInfo.deliveryType}
          onChange={(e) =>
            dispatch({ type: "deliveryType", deliveryType: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="social1">Social Account 1</label>
        <iput
          type="text"
          min="1"
          max=""
          value={vendorInfo.social1}
          onChange={(e) =>
            dispatch({ type: "social1", social1: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="social2">Social Account 2</label>
        <iput
          type="text"
          min="1"
          max=""
          value={vendorInfo.social2}
          onChange={(e) =>
            dispatch({ type: "social2", social2: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="social3">Social Account 3</label>
        <iput
          type="text"
          min="1"
          max=""
          value={vendorInfo.social3}
          onChange={(e) =>
            dispatch({ type: "social3", social3: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="bizPhone">Business Phone Number</label>
        <iput
          type="text"
          min="1"
          max=""
          value={vendorInfo.bizPhone}
          onChange={(e) =>
            dispatch({ type: "bizPhone", bizPhone: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="bizMail">Business Email</label>
        <iput
          type="email"
          min="1"
          max=""
          value={vendorInfo.bizEmail}
          onChange={(e) =>
            dispatch({ type: "bizEmail", bizEmail: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="prepTime">Preparation Time</label>
        <iput
          type="number"
          min="1"
          max=""
          value={vendorInfo.prepTime}
          onChange={(e) =>
            dispatch({ type: "prepTime", prepTime: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="minOrder">Minimum Order</label>
        <iput
          type="number"
          min="1"
          max=""
          value={vendorInfo.minOrder}
          onChange={(e) =>
            dispatch({ type: "minOrder", minOrder: e.target.value })
          }
        />
      </div>
    </form>
  );
};

export default VendorReg;
