import "./Contact.css";
const Contact = () => {
  return (
    <div id="main1">
      <div className="left1">
        <span>Contact us</span>
        <h1>GET IN TOUCH WITH US</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
          minim veniam quis nostrud exercitation ullamco
        </p>
        <div id="icon1">
          <div className="icon11">
            <span></span>
            <div className="info">
              <h2>Our Location</h2>
              <p>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
            </div>
          </div>
          <div className="icon11">
            <span></span>
            <div className="info">
              <h2>Phone Number</h2>
              <p>(+62)81 414 257 9980</p>
            </div>
          </div>
          <div className="icon11">
            <span></span>
            <div className="info">
              <h2>Email Address</h2>
              <p>info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right1">
        <form action="#">
            <input type="text" name="" id="" placeholder="Your Name"/><br />
            <input type="email" name="" id="" placeholder="Your Email"/><br />
            <input type="text" name="" id="" placeholder="Your Phone"/><br />
            <input type="text" name="" id="" placeholder="Your Message"/>
        </form>
      </div>

    </div>
  );
};

export default Contact;
