import './components/styles/hook.scss';
import Brand from "./components/branding.jsx";
import Userprofile from "./components/user_profile.jsx";
import Socialcapsule from "./components/capsule.jsx";
import Linklist from "./components/link.jsx";
import {Share as ShareButton, ShareMenu} from "./components/share.jsx";
import meta from "./components/meta/hook.metadata.json" with { type: "json" };
// import pexels for background images
// import { createClient } from "pexels";
import { useState } from 'react';
// const pexel = createClient(import.meta.env.VITE_PEXELS_API);
// Retrieve user preferences from hook.metadata.json
const photo_query = meta.settings.bgPrefs;

// Determine device orientation
const device_orientation = () => {
  return window.matchMedia("(orientation: portrait)").matches
    ? "portrait"
    : "landscape";
};

// Define the Pexels API endpoint
const pexels_url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(photo_query)}&orientation=${device_orientation()}&size=medium&locale=en_US&color=black&per_page=50`;

// Fetch photos from Pexels API
fetch(pexels_url, {
  headers: {
    Authorization: import.meta.env.VITE_PEXELS_API, // Your Pexels API key
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    if (data.photos && data.photos.length > 0) {
      const random_index = Math.floor(Math.random() * data.photos.length);
      const selectedPhoto = data.photos[random_index];

      const img = new Image();
      img.crossOrigin = "Anonymous"; // making adequate changeds for CORS policy.
      img.src = selectedPhoto.src.original;
      img.onload = () => {
        document.body.style.setProperty("--bg-image", `url(${selectedPhoto.src.original})`);
        document.body.classList.add("bg-loaded"); // Trigger fade-in effect
        document.getElementById("root").classList.add("show"); // Fade in
      };

      // Display photographer attribution
      const attribution = document.querySelector('.pexel_attr p');
      if (attribution) {
        attribution.innerHTML = `Photo by <a href="${selectedPhoto.photographer_url}" target="_blank">${selectedPhoto.photographer}</a>`;
      }
      // Show the main content after the background image loads
      document.querySelector(".mainWrapper").hidden = false;
    }
  })
  .catch((error) => {
    console.error("Error fetching Pexels images:", error);
  });
function App() {
  const [showShareMenu, setShowShareMenu] = useState(false);

  return (
    <div className="mainWrapper" hidden>
      <ShareButton onClick={() => setShowShareMenu(true)}/>
      <div className="appInner">
        <Userprofile />
        <Linklist />
        <Socialcapsule />
        <Brand />
        <div className="pexel_attr">
        {/* from above pexel client function */}
        <p></p>
      </div>
      </div>
      {showShareMenu && (
        <ShareMenu onClose={() => setShowShareMenu(false)}/>
      )}
    </div>
  );
}

export default App;
