import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const inputElement = useRef();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "Increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "Decrement" });
  };

  const handleAdd = () => {
    dispatch({ type: "Add", payload: { num: inputElement.current.value } });
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch({
      type: "Subtract",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };
  const handlePrivacy = () => {
    dispatch({ type: "Privacy" });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          onClick={handleIncrement}
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
        >
          +1
        </button>
        <button
          onClick={handleDecrement}
          type="button"
          className="btn btn-success btn-lg px-4"
        >
          -1
        </button>
        <button
          onClick={handlePrivacy}
          type="button"
          className="btn btn-warning btn-lg px-4"
        >
          Privacy Toggel
        </button>
      </div>
      <div className="d-grid gap-2 my-2 d-sm-flex justify-content-sm-center">
        <input
          type="number"
          ref={inputElement}
          placeholder="Enter the number"
        />
        <button
          onClick={handleAdd}
          type="button"
          className="btn btn-info btn-lg px-4"
        >
          Add
        </button>
        <button
          onClick={handleSubtract}
          type="button"
          className="btn btn-danger btn-lg px-4"
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
