

const Input = props => {

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} name={props.id} {...props.attr} />
    </div>
  )
};

export default Input;