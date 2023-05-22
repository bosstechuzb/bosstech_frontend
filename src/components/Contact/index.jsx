import React from "react";
import { Box, Container, OuterContainer, RightSideItem } from "./style";
import mail from "../../assets/icons/contact/circledEnvelope.svg";
import tel from "../../assets/icons/contact/phone.svg";
import address from "../../assets/icons/contact/address.svg";
import { Fade } from "react-reveal";

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
            <Fade>
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
            </Fade>
            <Fade>
              <input type="email" name="email" placeholder="Email" required />
            </Fade>
            <Fade>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
              />
            </Fade>
            <Fade>
              <textarea
                placeholder="Message"
                name="message"
                rows={8}
                required
              ></textarea>
            </Fade>
            <div>
              <Fade>
                <button type="submit">SEND</button>
              </Fade>
            </div>
          </Box.LeftSide>
          <Box.RightSide>
            <Fade right>
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
            </Fade>
            <Fade right>
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
            </Fade>
            <Fade right>
              <RightSideItem>
                <img src={address} alt="address" />
                <p>26th Street, Digital Villa</p>
              </RightSideItem>
            </Fade>
          </Box.RightSide>
        </Box>
      </Container>
    </OuterContainer>
  );
}

export default Contact;
