import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from 'react-icons/fa';

function Contact() {
  const contactInfo = {
    address: {
      street: "123 Main Street",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
    phone: "(555) 555-5555",
    email: "info@yourwebsite.com",
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
          <h3>Address</h3>
          <p>
            <FaMapMarkerAlt /> {/* Address icon */}
            {contactInfo.address.street}, {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
          </p>
        </div>

        <div>
          <h3>Phone</h3>
          <p>
            <FaPhoneAlt /> {/* Phone icon */}
            {contactInfo.phone}
          </p>
        </div>

        <div>
          <h3>Email</h3>
          <p>
            <FaEnvelope /> {/* Email icon */}
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </p>
        </div>

        <div>
          <h3>Social Media</h3>
          <ul>
            <li>
              <a href={contactInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram /> {/* Instagram */}
              </a>
            </li>
            <li>
              <a href={contactInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook /> {/* Facebook */}
              </a>
            </li>
            <li>
              <a href={contactInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> {/* LinkedIn */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
