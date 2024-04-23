import React from "react";
import "./SideInfoBar.css";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";

const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/developer-haseeb";
const FACEBOOK_PROFILE_URL =   "https://www.facebook.com/haseeb.idrees.1656"
const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/haseeb.idrees.1656/"
const WHATSAPP_PROFILE_URL = "https://wa.me/+923414443962"
const CV_FILE_ID = "1kVcDIg4-uq-he-SUvK6O0_3VPjpCGOkM";
const CV_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${CV_FILE_ID}`;

const SideInfoBar = () => {

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = CV_DOWNLOAD_URL;
    link.download = 'Haseeb_Idrees_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="side_info_bar_main_div_for_image_and_box">
      <div className="image_for_user_div_in_the_top_of_the_side_bar">
        {/* <img src={me} alt="my_image" /> */}
      </div>
      <div className="lower_info_div_under_the_image_div">
        <div className="my_name_haseeb_div_for_the_side_bar">
          Muhammad Haseeb
        </div>
        <div className="passion_tag_under_my_name_div">
          <span>Software Engineer</span>
        </div>
        <div className="all_logo_of_social_media_icons_div">
          <div className="single_icon_for_social_media_div" style={{color : "#1877F2"}} onClick={() => window.open(FACEBOOK_PROFILE_URL, "_blank")}>
            <FaFacebookF />
          </div>
          <div className="single_icon_for_social_media_div" style={{color : "#25D366"}} onClick={() => window.open(WHATSAPP_PROFILE_URL, "_blank")}>
            <FaWhatsapp />
          </div>
          <div className="single_icon_for_social_media_div" style={{color : "#DD2A7B"}} onClick={() => window.open(INSTAGRAM_PROFILE_URL, "_blank")}>
            <IoLogoInstagram />
          </div>
          <div className="single_icon_for_social_media_div" style={{color : "#0077B5"}} onClick={() => window.open(LINKEDIN_PROFILE_URL, "_blank")}>
            <FaLinkedinIn />
          </div>
        </div>
        <div className="contact_info_div_for_the_side_bar_div">
          <div className="single_contact_info_div_for_the_user_div">
            <div className="left_side_logo_for_the_contact_symbol" style={{color : "#FF7F7F"}}>
              <FaMobileAlt />
            </div>
            <div className="right_side_info_div_for_the_single_contact">
              <div className="contact_tag_for_the_single_contact_div">
                Phone
              </div>
              <div className="contact_entity_to_be_real_in_singel_div">
                +92 341 444 3962
              </div>
            </div>
          </div>
          <div className="single_contact_info_div_for_the_user_div">
            <div className="left_side_logo_for_the_contact_symbol" style={{color : "#32CD32"}}>
              <IoMailUnreadOutline />
            </div>
            <div className="right_side_info_div_for_the_single_contact">
              <div className="contact_tag_for_the_single_contact_div">
                G Mail
              </div>
              <div className="contact_entity_to_be_real_in_singel_div">
                coder.haseeb@gmail.com
              </div>
            </div>
          </div>
          <div className="single_contact_info_div_for_the_user_div">
            <div className="left_side_logo_for_the_contact_symbol" style={{color : "#FFA500"}}>
              <FaMapMarkerAlt />
            </div>
            <div className="right_side_info_div_for_the_single_contact">
              <div className="contact_tag_for_the_single_contact_div">
                Location
              </div>
              <div className="contact_entity_to_be_real_in_singel_div">
                Shahdara, LHR, PK
              </div>
            </div>
          </div>
          <div className="single_contact_info_div_for_the_user_div">
            <div className="left_side_logo_for_the_contact_symbol" style={{color : "#A020F0"}}>
              <MdCelebration />
            </div>
            <div className="right_side_info_div_for_the_single_contact">
              <div className="contact_tag_for_the_single_contact_div">
                Birthday
              </div>
              <div className="contact_entity_to_be_real_in_singel_div">
                10 Sep, 2003
              </div>
            </div>
          </div>
        </div>
        <div className="donwload_cv_button_for_the_side_button">
          <button onClick={downloadCV}>
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideInfoBar;
