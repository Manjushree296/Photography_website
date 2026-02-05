import React, { useState } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Please fill all required fields");
      return;
    }

    toast.success("Message sent successfully!");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="contact-ref">
      <div className="wrapper">

        <div className="grid">

          {/* LEFT */}
          <div>
            <h1>GET IN TOUCH</h1>
            <p className="subtitle">
              You are just a call away to make your memories special
            </p>

            <div className="info">
              <FiMapPin className="icon" />
              <div>
                <div className="info-title">ADDRESS</div>
                <p>
                  Divya Enclave Building, Shop No. B4,<br />
                  Opposite Canara College, Jail Road,<br />
                  M G Road, Mangalore – 575003, Karnataka
                </p>
              </div>
            </div>

            <div className="info">
              <FiPhone className="icon" />
              <div>
                <div className="info-title">PHONE</div>
                <p>+91 98452 19355</p>
              </div>
            </div>

            <div className="info">
              <FiMail className="icon" />
              <div>
                <div className="info-title">EMAIL</div>
                <p>Lathishphotography@gmail.com</p>
              </div>
            </div>
          </div>

          {/* RIGHT - Google Map (replacing contact form) */}
          <div>
            <h2>OUR LOCATION</h2>
            <div className="map-embed">
              <iframe
                title="Lathish Photography Location"
                src="https://www.google.com/maps?q=Lathish+Photography,+Jail+Rd,+opp.+Canara+College,+Mangaluru&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

        </div>

        {/* removed duplicate map: map is now placed in the right column */}

      </div>
    </div>
  );
};

export default Contact;
