// Dialog.js
import React from "react";
import "./dialog.css"; // For basic styling

const Dialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <button className="dialog-close" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
