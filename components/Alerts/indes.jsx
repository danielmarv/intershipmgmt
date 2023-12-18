// Alert.js
import React, { useState } from 'react';
import Modal from 'react-modal';

const Alert = ({ type, title, message }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const getAlertColor = () => {
    switch (type) {
      case 'warning':
        return 'bg-warning';
      case 'success':
        return 'bg-[#34D399]';
      case 'error':
        return 'bg-[#F87171]';
      default:
        return '';
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={`rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9 ${getAlertColor()}`}
      overlayClassName="overlay"
    >
      <div className="flex flex-col gap-7.5">
        <div className={`flex w-full border-l-6 ${getAlertColor()} bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9`}>
          <div className="mr-5 flex h-9 w-9 items-center justify-center rounded-lg bg-warning bg-opacity-30">
            {/* Warning Icon */}
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* ... */}
            </svg>
          </div>
          <div className="w-full">
            <h5 className={`mb-3 text-lg font-semibold ${getAlertColor() === 'bg-warning' ? 'text-[#9D5425]' : 'text-black dark:text-[#34D399]'} `}>
              {title}
            </h5>
            <p className={`leading-relaxed ${getAlertColor() === 'bg-warning' ? 'text-[#D0915C]' : 'text-body'}`}>
              {message}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Alert;
