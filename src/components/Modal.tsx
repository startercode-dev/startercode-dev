import React, { useEffect } from 'react';

const Modal = ({ isModalOpen, onClose, children }) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center ">
      <div
        className="fixed inset-0 cursor-pointer bg-[#D1D5DB]/25 bg-opacity-50"
        onClick={onClose}
      ></div>

      <div className="rounded-primary relative mx-auto w-11/12 max-w-[634px] bg-gray-900 pb-5 pt-12 sm:w-10/12 md:w-3/4">
        <div
          onClick={onClose}
          className="absolute right-5 top-5 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#D1D5DB"
            className="-grey-300 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
