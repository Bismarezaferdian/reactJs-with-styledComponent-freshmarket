import React, { useState } from "react";
import Bounce from "react-reveal/Bounce";
import About from "../../images/signin.svg";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Img,
  ImgWrap,
  Location,
  KontenWrapp,
  Call,
  Mail,
  SocialIcons,
  SocialIconLinks,
  TitleKontak,
} from "./KontakElement";

const Kontak = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <InfoContainer id="contact" lightBg={true}>
        <InfoWrapper>
          <InfoRow imgStart={true}>
            <Column1>
              <Bounce top delay={600}>
                <TextWrapper>
                  <TitleKontak>Information contact & office</TitleKontak>
                  <KontenWrapp>
                    <Location />
                    jl. ks tubun no 50 slipi jakarta barat
                  </KontenWrapp>
                  <KontenWrapp>
                    <Call />
                    08221116695
                  </KontenWrapp>
                  <KontenWrapp>
                    <Mail />
                    gendisayujahe@gmail.com
                  </KontenWrapp>
                  <SocialIcons>
                    <SocialIconLinks
                      href="/"
                      target="_blank"
                      arial-label="Instagram"
                    >
                      <FaInstagram />
                    </SocialIconLinks>
                    <SocialIconLinks
                      href="https://www.instagram.com/bismarezaferdian/"
                      target="Direct Instagram"
                      arial-label="Facebook"
                    >
                      <FaFacebookF />
                    </SocialIconLinks>
                    <SocialIconLinks
                      href="/"
                      target="_blank"
                      arial-label="Twitter"
                    >
                      <FaYoutube />
                    </SocialIconLinks>
                    <SocialIconLinks
                      href="/"
                      target="_blank"
                      arial-label="Youtube"
                    >
                      <FaInstagram />
                    </SocialIconLinks>
                  </SocialIcons>
                </TextWrapper>
              </Bounce>
            </Column1>
            <Column2>
              <ImgWrap>
                <Bounce bottom delay={200}>
                  <Img src={About} />
                </Bounce>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Kontak;
