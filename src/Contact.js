import React from "react";
import ContactCard from "./ContactCard";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const contactInfo = {
    address: {
      street: "Kodathi gate, opposite Narayna reddy building",
      city: "Banglore",
      state: "Karnataka",
      zip: "560035",
    },
    phone: "+91 9739151421",
    email: "brushnbox@gmail.com",
    socialMedia: {
      instagram: "https://www.instagram.com/yourhandle",
      facebook: "https://www.facebook.com/yourpage",
      linkedin: "https://www.linkedin.com/yourprofile",
    },
  };

  return (
    <div className="contact-container">
      <div className="contact-details">
        <h2>Contact Us</h2>

        <div>
          {/* <h3>Address</h3> */}
          <p>
            <FaMapMarkerAlt /> {/* Address icon */}
            <a
              href="https://www.google.com/maps/place/Brush+and+box/@12.8973824,77.7180628,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1365b54036ff:0x9b3279699515811e!8m2!3d12.8973772!4d77.7206431!16s%2Fg%2F11vm1m_8lp?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactInfo.address.street}, {contactInfo.address.city},{" "}
              {contactInfo.address.state} {contactInfo.address.zip}
            </a>
          </p>
        </div>

        <div>
          {/* <h3>Phone</h3> */}
          <p>
            <FaPhoneAlt /> {/* Phone icon */}
            {contactInfo.phone}
          </p>
        </div>

        <div>
          {/* <h3>Email</h3> */}
          <p>
            <FaEnvelope /> {/* Email icon */}
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </p>
        </div>

        <div>
          {/* <h3>Social Media</h3> */}
          <ul>
            <li>
              <a
                href={contactInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /> {/* Instagram */}
              </a>
            </li>
            <li>
              <a
                href={contactInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook /> {/* Facebook */}
              </a>
            </li>
            <li>
              <a
                href={contactInfo.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> {/* LinkedIn */}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="cc">
        <ContactCard />
      </div>
    </div>
  );
}

export default Contact;
