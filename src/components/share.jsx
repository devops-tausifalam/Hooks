import "./styles/share.scss";
import { RiFlag2Line } from "react-icons/ri";
import { MdOutlineIosShare, MdOutlineClose, MdOutlineContentCopy } from "react-icons/md";
// common social icons
import {
  FaWhatsapp,
  FaBluesky,
  FaEnvelope,
} from "react-icons/fa6";

// metadata for profile and user names and other details if required
import meta from "./meta/hook.metadata.json" with { type: "json" };


export function Share({ onClick }) {
  return (
    <>
      <div className="sharebtn">
        <button onClick={onClick}>
          share
          {/* <MdOutlineIosShare className="icon" /> */}
        </button>
      </div>
    </>
  );
}

export function ShareMenu({ onClose }) {

  // universal share code (USC)
  /*
      The USC generated sessionID for users and encapsulate all into
      UTM-source and creates a shareable URL for client to share.
  */

  function blueskyIntent() {
        let schema = "https://bsky.app/intent/compose";
        let home_url = window.location.href;
        let awesomeTxt = "I just found an awesome hook — check it out here! ";

        let intentURL = `${schema}?text=${encodeURIComponent(awesomeTxt + home_url)}`;;

        window.open(intentURL, "_blank");

  }

  function facebookIntent() {
    const home_url = window.location.href;
    const intentURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(home_url)}`;
    window.open(intentURL, "_blank");
  }
  
  function messengerIntent() {
    const home_url = window.location.href;
    const intentURL = `fb-messenger://share?link=${encodeURIComponent(home_url)}`;
    window.open(intentURL, "_blank");
  }
  
  function whatsappIntent() {
    const home_url = window.location.href;
    const message = `I just found an awesome hook — check it out here! ${home_url}`;
    const intentURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(intentURL, "_blank");
  }
  
  function linkedinIntent() {
    const home_url = window.location.href;
    const intentURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(home_url)}`;
    window.open(intentURL, "_blank");
  }
  
  function xIntent() {
    const home_url = window.location.href;
    const message = `I just found an awesome hook — check it out here! ${home_url}`;
    const intentURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(intentURL, "_blank");
  }

  function emailIntent() {
    const home_url = window.location.href;
    const subject = "Check this out!";
    const body = `I just found an awesome hook — check it out here! ${home_url}`;
    const intentURL = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(intentURL, "_blank");
  }
    
  return (
    <>
      <div className="sharemenu">
        <div className="boxmodal">
          <div className="controls">
            <h2>Share hook.</h2>
            <button onClick={onClose}>
              <MdOutlineClose className="icon" />
            </button>
          </div>
          <figure>
            <div className="avatar">
              <img src={meta.profile.avatar} alt="user-avatar" />
            </div>
            <div className="user-name">
              <p>
                {meta.profile.name}
              </p>
              <span>{meta.profile.bio}</span>
            </div>
          </figure>
          <div className="functionBox">
              <div className="socialicons">
                <button onClick={ whatsappIntent }>
                  <FaWhatsapp className="icon" />
                  <span className="icon-label">WhatsApp</span>
                </button>
                <button onClick={ blueskyIntent }>
                  <FaBluesky className="icon" />
                  <span className="icon-label">Bluesky</span>
                </button>
                <button onClick={ emailIntent }>
                  <FaEnvelope className="icon" />
                  <span className="icon-label">Email</span>
                </button>
                <button className="clipboardbtn" onClick={() => navigator.clipboard.writeText(window.location.href)}>
                  <span className="icon-label">copy to clipboard</span>
                </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
