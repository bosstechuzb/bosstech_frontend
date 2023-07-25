import React, { useContext } from "react";
import { Box, Container, OuterContainer, RightSideItem } from "./style";
import mail from "../../assets/icons/contact/circledEnvelope.svg";
import tel from "../../assets/icons/contact/phone.svg";
import address from "../../assets/icons/contact/address.svg";
import { LangContext } from "./../../context/lang";
import { data_contact } from "../../utils/data";
import axios from "axios";
import { useState } from "react";

function Contact() {
  const [language] = useContext(LangContext);
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [message, setMessage] = useState("");

  function reset() {
    setName("");
    setEmailOrPhone("");
    setMessage("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name,
      emailOrPhone,
      message,
    };
    // console.log("Form data: ", obj);
    reset();
    axios
      .post(`https://tech.bossblog.uz/api/v1/message`, obj, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        reset();
        alert("Successfully sent!");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong, please try again later!");
      });
  };

  return (
    <OuterContainer id="contact">
      <Container>
        <Box>
          <Box.LeftSide onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={data_contact[language]?.input_name}
              minLength={2}
              maxLength={100}
              title="Please include only letters"
              required
            />

            <input
              type="text"
              value={emailOrPhone}
              name="emailOrPhone"
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder={data_contact[language]?.input_phone_email}
              required
            />
            <textarea
              placeholder={data_contact[language]?.input_message}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={8}
              required
            ></textarea>
            <div>
              <button type="submit" id="liveToastBtn">
                {data_contact[language]?.button}
              </button>
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
