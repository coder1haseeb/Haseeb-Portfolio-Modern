import React, { useState, useRef } from 'react';
import './TopNavBar.css';

import { FiFileText } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { LuContact } from "react-icons/lu";
import About from './SideComponents/About/About';
import Resume from './SideComponents/Resume/Resume';
import Work from './SideComponents/Work/Work';
import Blogs from './SideComponents/Blogs/Blogs';
import Contact from './SideComponents/Contact/Contact';

const TopNavBar = () => {
  const [showAbout, setShowAbout] = useState(true);
  const [showResume, setShowResume] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showBlogs, setShowBlogs] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const aboutRef = useRef(null);
  const resumeREf = useRef(null);
  const workRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToTop = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (resumeREf.current) {
      resumeREf.current.scrollIntoView({ behavior: "smooth" });
    }
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (blogsRef.current) {
      blogsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='top_nav_bar_and_component_main_div_at_home'>
      <div className="top_link_div_all_for_top_box_div">
        <div className={`single_div_for_single_entity_for_top_bar_link ${showAbout ? "current_tab_color_for_class_extrea" : ""}`}
          onClick={() => {
            setShowAbout(true);
            setShowResume(false);
            setShowWork(false);
            setShowBlogs(false);
            setShowContact(false);
            scrollToTop();
          }}
        >
          <div className="icon_for_single_entity_div_for_top_bar_link">
            <IoPersonOutline />
          </div>
          <div className="text_for_single_entity_div_for_top_bar_link">
            About
          </div>
        </div>
        <div className={`single_div_for_single_entity_for_top_bar_link ${showResume ? "current_tab_color_for_class_extrea" : ""}`}
          onClick={() => {
            setShowAbout(false);
            setShowResume(true);
            setShowWork(false);
            setShowBlogs(false);
            setShowContact(false);
            scrollToTop();
          }}
        >
          <div className="icon_for_single_entity_div_for_top_bar_link">
            <FiFileText />
          </div>
          <div className="text_for_single_entity_div_for_top_bar_link">
            Resume
          </div>
        </div>
        <div className={`single_div_for_single_entity_for_top_bar_link ${showWork ? "current_tab_color_for_class_extrea" : ""}`}
          onClick={() => {
            setShowAbout(false);
            setShowResume(false);
            setShowWork(true);
            setShowBlogs(false);
            setShowContact(false);
            scrollToTop();
          }}
        >
          <div className="icon_for_single_entity_div_for_top_bar_link">
            <MdOutlineWorkOutline />
          </div>
          <div className="text_for_single_entity_div_for_top_bar_link">
            Work
          </div>
        </div>
        <div className={`single_div_for_single_entity_for_top_bar_link ${showBlogs ? "current_tab_color_for_class_extrea" : ""}`}
          onClick={() => {
            setShowAbout(false);
            setShowResume(false);
            setShowWork(false);
            setShowBlogs(true);
            setShowContact(false);
            scrollToTop();
          }}
        >
          <div className="icon_for_single_entity_div_for_top_bar_link">
            <FaBlog />
          </div>
          <div className="text_for_single_entity_div_for_top_bar_link">
            Blogs
          </div>
        </div>
        <div className={`single_div_for_single_entity_for_top_bar_link ${showContact ? "current_tab_color_for_class_extrea" : ""}`}
          onClick={() => {
            setShowAbout(false);
            setShowResume(false);
            setShowWork(false);
            setShowBlogs(false);
            setShowContact(true);
            scrollToTop();
          }}
        >
          <div className="icon_for_single_entity_div_for_top_bar_link">
            <LuContact />
          </div>
          <div className="text_for_single_entity_div_for_top_bar_link">
            Contact
          </div>
        </div>
      </div>

      <div className="lower_components_under_the_top_bar">
        {showAbout && <About refObj={aboutRef}/>}
        {showResume && <Resume refObj={resumeREf}/>}
        {showWork && <Work refObj={workRef} />}
        {showBlogs && <Blogs refObj={blogsRef} />}
        {showContact && <Contact refObj={contactRef} />}
      </div>
    </div>
  );
};

export default TopNavBar;