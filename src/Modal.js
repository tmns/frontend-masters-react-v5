import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

var modalRoot = document.getElementById('modal');

var Modal = ({ children }) => {
  var elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;