// components/toast.jsx
import { createPortal } from 'react-dom';
import './styles/toast.scss';

export default function ToastContainer({ mssg, type }) {
  const toastTypeClass = type ? `toast-${type}` : '';

  return createPortal(
    <div className={`toast-container ${toastTypeClass}`}>
      <p>{mssg}</p>
    </div>,
    document.body // ⬅️ Render directly into <body>
  );
}
