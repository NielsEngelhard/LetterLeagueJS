import React, { useState } from 'react';

const Toggle = ({ 
  isOn = false, 
  handleToggle = (newValue: boolean) => {}, 
  onColor = 'bg-blue-600', 
  offColor = 'bg-gray-200',
  disabled = false,
  size = 'md',
  label = '',
  labelPosition = 'right'
}) => {
  const [isChecked, setIsChecked] = useState(isOn);
  
  const toggleSwitch = () => {
    if (disabled) return;
    
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (handleToggle) handleToggle(newValue);
  };
  
  // Size variants
  const sizeClasses: any = {
    sm: {
      switch: 'w-8 h-4',
      knob: 'w-3 h-3',
      translate: 'translate-x-4',
      label: 'text-sm'
    },
    md: {
      switch: 'w-11 h-6',
      knob: 'w-5 h-5',
      translate: 'translate-x-5',
      label: 'text-base'
    },
    lg: {
      switch: 'w-14 h-7',
      knob: 'w-6 h-6',
      translate: 'translate-x-7',
      label: 'text-lg'
    }
  };
  
  const currentSize = sizeClasses[size] || sizeClasses.md;
  
  return (
    <div className="flex items-center">
      {label && labelPosition === 'left' && (
        <label className={`mr-2 ${currentSize.label} ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
          {label}
        </label>
      )}
      
      <div 
        className={`${currentSize.switch} flex items-center rounded-full p-0.5 cursor-pointer transition-colors ease-in-out duration-200 ${
          isChecked ? onColor : offColor
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={toggleSwitch}
        role="switch"
        aria-checked={isChecked}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleSwitch();
          }
        }}
      >
        <div
          className={`${currentSize.knob} bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
            isChecked ? currentSize.translate : 'translate-x-0'
          }`}
        />
      </div>
      
      {label && labelPosition === 'right' && (
        <label className={`ml-2 ${currentSize.label} ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Toggle;