import React from "react";
import store from "../reducers";

export const InputFieldNum = ({
  inputName,
  inputType,
  inputPh,
  inputValue,
  onChangeFn,
  onChangeFld,
  isFloat,
}) => {
  return (
    <div>
      <label>{inputName}</label>
      <div>
        <input
          type={inputType}
          placeholder={inputPh}
          min="0"
          onChange={(e) => {
            isFloat
              ? e.target.value >= 0 &&
                store.dispatch(
                  onChangeFn(onChangeFld, parseFloat(e.target.value))
                )
              : e.target.value >= 0 &&
                store.dispatch(
                  onChangeFn(onChangeFld, parseInt(e.target.value))
                );
          }}
          value={inputValue}
        />
      </div>
    </div>
  );
};
