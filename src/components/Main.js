import React, { useState } from "react";
import { useVignette } from "../context/VignetteContext";
import { useModalContext } from "../context/ModalContext";

function Main() {
  const [isBookmarkActive, setIsBookmarkActive] = useState(false);
  const { setIsModalsVisible, showModal, hideModal, totalBackedAmount, totalBackers } = useModalContext();
  const { setVignetteVisibility } = useVignette();
  const percentage = (totalBackedAmount / 100000) * 100;
  console.log(percentage)

  const handleBookmarkClick = () => {
    setIsBookmarkActive(!isBookmarkActive);
  };

  const handleBackProjectClick = () => {
    setIsModalsVisible(true);
    setVignetteVisibility(true)
    hideModal()
  };

  const handleBambooClick = () => {
    showModal("bamboo-modal");
    setVignetteVisibility(true)
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  const handleBlackEditionClick = () => {
    showModal("black-edition-modal");
    setVignetteVisibility(true)
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <main>
      <svg
        className="logo-mastercraft"
        width="56"
        height="56"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <circle fill="#000" cx="28" cy="28" r="28" />
          <g fill-rule="nonzero">
            <path
              d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z"
              fill="#444"
            />
            <path
              d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z"
              fill="#FFF"
            />
          </g>
        </g>
      </svg>
      <div className="first">
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="cta">
          <div className="back-project" onClick={handleBackProjectClick}>Back this project</div>
          <div className={`bookmark ${isBookmarkActive ? "active-bookmark" : ""}`} onClick={handleBookmarkClick}>
            <svg width="60" height="56" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
              </g>
            </svg>
            <span>Bookmark</span>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="prices">
          <div>
            <h3 className="total-backed">${totalBackedAmount.toLocaleString("en-US")}</h3>
            <p>of $100,000 backed</p>
          </div>
          <div>
            <h3 className="total-backers">{totalBackers.toLocaleString("en-US")}</h3>
            <p>total backers</p>
          </div>
          <div>
            <h3 className="days-left">56</h3>
            <p>days left</p>
          </div>
        </div>
        <div className="progress-bar">
          <div className="bar" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
      <div className="third">
        <h2>About this project</h2>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        <div className="choice"  id="bamboo">
          <div className="top">
            <div className="left">Bamboo Stand</div>
            <div className="right">Pledge $25 or more</div>
          </div>
          <p>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
          <div className="bottom">
            <div className="left">
              <span>101</span>left
            </div>
            <div className="right reward-button" onClick={handleBambooClick}>Select Reward</div>
          </div>
        </div>
        <div className="choice" id="black-edition">
          <div className="top">
            <div className="left">Black Edition Stand</div>
            <div className="right">Pledge $75 or more</div>
          </div>
          <p>
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
          <div className="bottom">
            <div className="left">
              <span>64</span>left
            </div>
            <div className="right reward-button"  onClick={handleBlackEditionClick}>Select Reward</div>
          </div>
        </div>
        <div className="choice">
          <div className="top">
            <div className="left">Mahogany Special Edition</div>
            <div className="right">Pledge $200 or more</div>
          </div>
          <p>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>
          <div className="bottom">
            <div className="left">
              <span>0</span>left
            </div>
            <div className="right out-of-stock">Out of Stock</div>
          </div>
        </div>
      </div>
    </main>  
  );
}

export default Main;
