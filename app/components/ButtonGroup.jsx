import React, { useState } from 'react';
import Button from './Button';

const ButtonGroup = ({ buttonData, onItemClick }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleDropdown = (categoryTitle) => {
    setOpenCategory(openCategory === categoryTitle ? null : categoryTitle);
  };

  return (
    <div>
      {buttonData.map((category, index) => (
        <div key={index}>
          <h2
            className="cursor-pointer bg-yellow-400 m-2 p-2 text-center rounded-lg"
            onClick={() => toggleDropdown(category.title)}
          >
            {category.title}
          </h2>
          {openCategory === category.title && (
            <ul className="flex flex-col justify-center items-center">
              {category.buttons.map((button, buttonIndex) => (
                <li key={buttonIndex}>
                  <Button
                    label={button.label}
                    url={button.src}
                    onClick={onItemClick}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;
