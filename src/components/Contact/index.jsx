import React, { useContext } from "react";
import { Box, Container, OuterContainer, RightSideItem } from "./style";
import mail from "../../assets/icons/contact/circledEnvelope.svg";
import tel from "../../assets/icons/contact/phone.svg";
import address from "../../assets/icons/contact/address.svg";
import { LangContext } from "./../../context/lang/index";
import { data_contact } from "../../resources/data";

function Contact() {
  const [language] = useContext(LangContext);

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
                placeholder={data_contact[language]?.input_name}
                minLength={2}
                maxLength={100}
                pattern="[A-Za-z\s]+"
                title="Please include only letters"
                required
              />

              <input
                type="text"
                name="phone_email"
                placeholder={data_contact[language]?.input_phone_email}
                required
              />
              <textarea
                placeholder={data_contact[language]?.input_message}
                name="message"
                rows={8}
                required
              ></textarea>
              <div>
                <button type="submit">{data_contact[language]?.button}</button>
              </div>
            </Box.LeftSide>
            <Box.RightSide>
              <RightSideItem>
                <img src={mail} alt="email" />
                <a
                  href={`mailto:${data_contact[language]?.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data_contact[language]?.email}
                </a>
              </RightSideItem>
              <RightSideItem>
                <img src={tel} alt="phone number" />
                <a
                  href={`tel:${data_contact[language]?.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data_contact[language]?.phone}
                </a>
              </RightSideItem>
              <RightSideItem>
                <img src={address} alt="address" />
                <p>{data_contact[language]?.address}</p>
              </RightSideItem>
            </Box.RightSide>
          </Box>
      </Container>
    </OuterContainer>
  );
}

export default Contact;
