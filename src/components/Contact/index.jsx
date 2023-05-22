import React from "react";
import { Box, Container, OuterContainer, RightSideItem } from "./style";
import mail from "../../assets/icons/contact/circledEnvelope.svg";
import tel from "../../assets/icons/contact/phone.svg";
import address from "../../assets/icons/contact/address.svg";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // var formData = new FormData(e.target);
    // let obj = Object.fromEntries(formData);
    // console.log(obj);
  };

  return (
    <OuterContainer id="contact">
      <Container>
        <Box>
          <Box.LeftSide onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              minLength={2}
              maxLength={100}
              pattern="[A-Za-z\s]+"
              title="Please include only letters"
              required
            />
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              rows={8}
              required
            ></textarea>
            <div>
              <button type="submit">SEND</button>
            </div>
          </Box.LeftSide>
          <Box.RightSide>
            <RightSideItem>
              <img src={mail} alt="email" />
              <a
                href="mailto:mail@domain.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                mail@domain.com
              </a>
            </RightSideItem>
            <RightSideItem>
              <img src={tel} alt="phone number" />
              <a
                href="tel:+0010020034"
                target="_blank"
                rel="noopener noreferrer"
              >
                +001-002-0034
              </a>
            </RightSideItem>
            <RightSideItem>
              <img src={address} alt="address" />
              <p>26th Street, Digital Villa</p>
            </RightSideItem>
          </Box.RightSide>
        </Box>
      </Container>
    </OuterContainer>
  );
}

export default Contact;
