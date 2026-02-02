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
                  Divya Enaclave Building, Shop No. B4,<br />
                  Opposite Canara College, Jail Road,<br />
                  M G Road, Mangalore – 575003, Karnataka
                </p>
              </div>
            </div>

            <div className="info">
              <FiPhone className="icon" />
              <div>
                <div className="info-title">PHONE</div>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="info">
              <FiMail className="icon" />
              <div>
                <div className="info-title">EMAIL</div>
                <p>contact@lathishphotography.com</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h2>LEAVE A MESSAGE</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />

              <button type="submit">SUBMIT</button>
            </form>
          </div>

        </div>

        {/* MAP */}
        <div className="map">
          <iframe
            title="Lathish Photography Location"
            src="https://www.google.com/maps?q=Lathish+Photography,+Jail+Rd,+opp.+Canara+College,+Mangaluru&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;
