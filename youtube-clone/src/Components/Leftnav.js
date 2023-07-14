import React from 'react'
import './leftnav.css'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import {
  faHouse, faPlay, faPhotoFilm, faClockRotateLeft, faFire, faBagShopping, faMusic,faCircleInfo,faCommentDots,
  faFilm, faSatelliteDish, faGamepad, faNewspaper, faMedal, faLightbulb, faShirt,faChildren,faGear,faFlag,faBars
} from '@fortawesome/free-solid-svg-icons'


function Leftnav() {

  return (
    <div className={`leftnavbar`}>

      <div className="home">
        <button>
          <FontAwesomeIcon icon={faHouse} /> Home
        </button>
        <button>
          <FontAwesomeIcon icon={faPlay} /> shorts
        </button>
        <button>
          <FontAwesomeIcon icon={faPhotoFilm} /> Subscriptions
        </button>
      </div>
      <hr />
      <div className="library">
        <button>
          <FontAwesomeIcon icon={faPhotoFilm} /> Library
        </button>
        <button>
          <FontAwesomeIcon icon={faClockRotateLeft} /> History
        </button>
      </div>
      <hr />
      <div className="explore">
        <h6>Explore</h6>
        <button>
          <FontAwesomeIcon icon={faFire} />
          Trending
        </button>
        <button>
          <FontAwesomeIcon icon={faBagShopping} />
          Shopping
        </button>
        <button>
          <FontAwesomeIcon icon={faMusic} />
          Music
        </button>
        <button>
          <FontAwesomeIcon icon={faFilm} />
          Movies
        </button>
        <button>
          <FontAwesomeIcon icon={faSatelliteDish} />
          Live
        </button>
        <button>
          <FontAwesomeIcon icon={faGamepad} />
          Gaming
        </button>
        <button>
          <FontAwesomeIcon icon={faNewspaper} />
          News
        </button>
        <button>
          <FontAwesomeIcon icon={faMedal} />
          Sports
        </button>
        <button>
          <FontAwesomeIcon icon={faLightbulb} />
          Learning
        </button>
        <button>
          <FontAwesomeIcon icon={faShirt} />
          Fashion and Beauty
        </button>
      </div>
      <hr />
      <div className="more">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
          >
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
          </svg>{" "}
          YouTube Premium
        </button>
        <button>
          <FontAwesomeIcon icon={faMusic} /> YouTube Music
        </button>
        <button>
          <FontAwesomeIcon icon={faChildren} /> YouTube Kids
        </button>
      </div>
      <hr />
      <div className="settings">
        <button>
          <FontAwesomeIcon icon={faGear} />
          Settings
        </button>
        <button>
          <FontAwesomeIcon icon={faFlag} />
          Report history
        </button>
        <button>
          <FontAwesomeIcon icon={faCircleInfo} />
          Help
        </button>
        <button>
          <FontAwesomeIcon icon={faCommentDots} />
          Send Feedback
        </button>
      </div>
      <hr />
      <div className="footer">
        <div className="top">
          <a href="#">About </a>
          <a href="#">Press </a>
          <a href="#">Copyright </a>
          <a href="#">Contact us </a>
          <a href="#">Creators </a>
          <a href="#">advertise </a>
          <a href="#">Developers </a>
        </div>
        <br />
        <div className="bottom">
          <a href="#">Terms </a>
          <a href="#">Privacy </a>
          <a href="#">Policy and Safety </a>
          <a href="#">How Youtube works </a>
          <a href="#">Test new feature </a>
        </div>
        <p>© 2023 Google LLC</p>
      </div>
    </div>
  );
}

export default Leftnav
