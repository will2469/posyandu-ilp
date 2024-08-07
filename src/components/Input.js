import React from 'react';

const Input = ({ id, type = "text", placeholder, required, value, onChange, label, icon, variant }) => {
  return (
    <div className={`input-field ${variant} relative flex items-center`}>
      <i className={`bx ${icon} absolute left-2 top-2.5`}></i> {/* Ikon di sebelah kiri */}
      <input
        id={id}
        type={type}
        placeholder=" "
        required={required}
        value={value}
        onChange={onChange}
        className="peer pl-10" // Padding kiri untuk menghindari tumpang tindih dengan ikon
      />
      <label
        htmlFor={id}
        className="absolute left-10 top-2.5 transition-all duration-200 ease-in-out peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-focus:-top-2.5 peer-focus:left-10 peer-focus:text-xs peer-focus:text-gray-600"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
