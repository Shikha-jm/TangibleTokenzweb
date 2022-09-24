import React from "react";

function ContactUs() {
  return (
    <>
      <div className="contact-form-sec">
        <div className="container-wrap">
          <div className="form-contact">
            <h1 className="border-head">Contact</h1>
            <form>
              <p>
                <input type="text" placeholder="Name" />
              </p>
              <p>
                <input type="text" placeholder="Email" />
              </p>
              <p>
                <input type="text" placeholder="Phone Number" />
              </p>
              <p>
                <textarea type="textarea" placeholder="Message" />
              </p>
              <input type="submit" className="send-btn" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
