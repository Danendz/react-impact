import React from "react";
import cl from './MySelect.module.css'
const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select className={cl.select} value={value}
    onChange={event => onChange(event.target.value)}
    >
      <option className={cl.option} disabled value="">{defaultValue}</option>
      {options.map((option) => (
        <option className={cl.option} key={option.value} value={option.value}>{option.name}</option>
      ))}
    </select>
  );
};
export default MySelect;
