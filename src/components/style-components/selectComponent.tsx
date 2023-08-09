import React, { ChangeEvent } from 'react';

interface CustomSelectComponentProps {
  labelText: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelectComponent: React.FC<CustomSelectComponentProps> = ({
  labelText,
  ...rest
}) => {
  return (
    <label className="flex flex-col font-lato font-light">
      <span>{labelText}</span>
      <select
        className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        {...rest}
      >
        <option value="" disabled>
          Select an Option
        </option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
        <option value="Expert">Expert</option>
      </select>
    </label>
  );
};

export default CustomSelectComponent;
