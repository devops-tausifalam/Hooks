import "./styles/link.scss";
import { useState } from "react";
import { IoMdShareAlt } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
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

  async function share_compo(link) {
       // Check if link exists
        if (!link) {
          console.error('Link not found');
          return;
        }
      
        try {
          await navigator.clipboard.writeText(link.url);
          console.log('Link copied to clipboard');
        } catch (err) {
          console.error('Failed to copy link:', err);
        }
  }

  return (
    <div className="linkbox">
      <ul className="link-wrapper">
        {meta.links.map((link, index) => (
          <li className="link" key={index}>
            <a href={link.url} target="_blank">{link.title}</a>
            <div className="hrefsymbol">
              <BsThreeDotsVertical className="icon" onClick={toggleMenu(index)}/>
              <div className={`shareto-menu ${activeMenu === index ? "active" : ""}`}>
                <ul>
                  <li>
                    <button onClick={() =>  share_compo(link) }>
                      <IoMdShareAlt /> share
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
