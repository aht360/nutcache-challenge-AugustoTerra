import React, { useState, useEffect } from 'react';

import ReactModal from 'react-modal';

const Modal = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#f5f5f5',
          color: '#000000',
          borderRadius: '8px',
          width: '400px',
          height: '600px',
          border: 'none',
          filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.08))'
        },
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;