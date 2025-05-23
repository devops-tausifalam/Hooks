import "./styles/link.scss";
import { useState } from "react";
import { LuClipboardPaste } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import ToastContainer from './toast.jsx';
import meta from "./meta/hook.metadata.json" with { type: "json" };

export default function Linklist() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (index) => (event) => {
    event.stopPropagation(); // prevent click from bubbling up

    if (activeMenu === index) {
      setActiveMenu(null);
    } else {
      setActiveMenu(index)
    

    // attach event listener to detect outside click
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".hrefsymbol")) {
        setActiveMenu(null);
        document.removeEventListener("click", handleOutsideClick);
      };
    };
      document.addEventListener("click", handleOutsideClick);
    }
  };

const [toast, setToast] = useState(null); // { mssg, type }

  async function copy_link_compo(link) {
    if (!link) {
      setToast({ mssg: 'Link not found', type: 'error' });
      return;
    }

    try {
      await navigator.clipboard.writeText(link.url);
      setToast({ mssg: 'Link copied to clipboard', type: 'success' });

      // Optional: clear toast after 3s
      setTimeout(() => setToast(null), 3000);
    } catch (err) {
      console.error('Failed to copy link:', err);
      setToast({ mssg: 'Failed to copy link', type: 'error' });
    }
  }


  return (
  <div className="linkbox">
    <ul className="link-wrapper">
      {meta.links.map((link, index) => (
        <li className="link" key={index}>
          <a href={link.url} target="_blank">{link.title}</a>
          <div className="hrefsymbol">
            <BsThreeDotsVertical className="icon" onClick={toggleMenu(index)} />
            <div className={`shareto-menu ${activeMenu === index ? "active" : ""}`}>
              <ul>
                <li>
                  <button onClick={() => copy_link_compo(link)}>
                    <LuClipboardPaste /> Copy Link
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ul>

    {/* ⬇️ Toast shows globally, not per-item */}
    {toast && <ToastContainer mssg={toast.mssg} type={toast.type} />}
  </div>
);

}
