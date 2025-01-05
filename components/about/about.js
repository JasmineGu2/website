"use client"
import { useState } from "react";

export default function About() {
    
    const [activeSection, setActiveSection] = useState('about');
  
    return (
      <div className="section-about">
        <div className="toggle-buttons">
        <button
          className={`toggle-button ${activeSection === 'about' ? 'active' : ''}`} 
          onClick={() => setActiveSection('about')}
        >
          About Me 
        </button>
        <button
          className={`toggle-button ${activeSection === 'community' ? 'active' : ''}`} 
          onClick={() => setActiveSection('community')}
        >
          Community
        </button>
        <button 
          className={`toggle-button ${activeSection === 'hobbies' ? 'active' : ''}`} 
          onClick={() => setActiveSection('hobbies')}
        >
          Hobbies
        </button>
      </div>

      {activeSection === 'about' ?(
        <div className="about-section">
  <div className="about-images">
    <div className="polaroid-one">
      <img  src="me.png" alt="Photo of me" />
      <p className="caption">A photo of me :) </p>
    </div>
  </div>
  <div className="about-text">
    <p>
      Born in Mississauga, Ontario. I'm currently a student at Western University studying Computer Science and Business. 
    </p>
    <br></br>
    <p>
      I code and design user-centered solutions and am always looking to innovate and bring a new perspective to any role I take on. Some of the communities I'm apart of include being a hub leader at Rewriting the Code, leading a 2 month long bootcamp for Product Management, and coding at Startups!
    </p>
  </div>
</div>
      ): null}

      {activeSection === 'community' ? (
        <div className="about-section">
        <div className="polaroid-gallery">
  <div className="polaroid">
    <img src="rtc.png" alt="RTC" />
    <p className="caption">Rewriting The Code Hub Leader</p>
  </div>
  <div className="polaroid">
    <img src="ips.png" alt="IPS" />
    <p className="caption">Leading 2-month long Product Bootcamp</p>
  </div>
  <div className="polaroid">
    <img src="cfc.png" alt="CFC" />
    <p className="caption">Volunteering at BGC London</p>
  </div>
  <div className="polaroid">
    <img src="compass.png" alt="The Compass" />
    <p className="caption">Working at a food bank + kitchen</p>
  </div>
</div>
</div>

      ) : null}

      {activeSection === 'hobbies' ? (
        <div className="about-section">
        <div className="polaroid-gallery">
  <div className="polaroid">
    <img src="ski.png" alt="Skiing" />
    <p className="caption">Skiing with friends</p>
  </div>
  <div className="polaroid">
    <img src="puzzles.png" alt="Playing Puzzles" />
    <p className="caption">My puzzle obsession</p>
  </div>
  <div className="polaroid">
    <img src="food.png" alt="Food photo" />
    <p className="caption">Trying new foods</p>
  </div>
  <div className="polaroid">
    <img src="travels.png" alt="Travel" />
    <p className="caption">Travel</p>
  </div>
</div>
</div>
      ): null}
    </div>
    );
  }
  