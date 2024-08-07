import React from 'react';

const Checkbox = ({ id, checked, onChange, label }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        id={id}
        type="checkbox"
        className="hidden" // Hide the default checkbox
        checked={checked}
        onChange={onChange}
      />
      <span
        className={`checkbox-indicator border rounded-sm w-5 h-5 flex items-center justify-center transition-colors duration-200 ${checked ? 'bg-primary-color border-primary-color' : 'bg-slate-100 border-slate-200'
          }`}
      >
        {checked && <div className="checkmark w-2 h-2 bg-white rotate-45 border-l border-b border-white"></div>} {/* Checkmark */}
      </span>
      <label htmlFor={id} className="text-base font-medium cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
