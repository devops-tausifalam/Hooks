import "./styles/share.scss";
import { RiFlag2Line } from "react-icons/ri";
import { MdOutlineIosShare, MdOutlineClose, MdOutlineContentCopy } from "react-icons/md";
// common social icons
import { FaSnapchatGhost } from "react-icons/fa";
import {
  FaSquareFacebook,
  FaFacebookMessenger,
  FaWhatsapp,
  FaSignalMessenger,
  FaLinkedin,
  FaBluesky,
  FaXTwitter,
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
                <button>
                  <FaSquareFacebook className="icon" />
                  <span className="icon-label">Facebook</span>
                </button>
                <button>
                  <FaFacebookMessenger className="icon" />
                  <span className="icon-label">Messenger</span>
                </button>
                <button>
                  <FaWhatsapp className="icon" />
                  <span className="icon-label">WhatsApp</span>
                </button>
                <button>
                  <FaSignalMessenger className="icon" />
                  <span className="icon-label">Signal</span>
                </button>
                <button>
                  <FaLinkedin className="icon" />
                  <span className="icon-label">LinkedIn</span>
                </button>
                <button>
                  <FaSnapchatGhost className="icon" />
                  <span className="icon-label">Snapchat</span>
                </button>
                <button onClick={ blueskyIntent }>
                  <FaBluesky className="icon" />
                  <span className="icon-label">Bluesky</span>
                </button>
                <button>
                  <FaXTwitter className="icon" />
                  <span className="icon-label">X</span>
                </button>
                <button>
                  <FaEnvelope className="icon" />
                  <span className="icon-label">Email</span>
                </button>
                <button className="clipboardbtn">
                  <span className="icon-label">copy to clipboard</span>
                </button>
              </div>
          </div>
          <div className="reportsection">
            <button>
                <RiFlag2Line /> Report this hook.
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
