import React from "react";
import {
  AntContainer,
  BooRow,
  MessengerGroup,
  FooterTitle,
  FooterText,
} from "./style";

import telegram from "../../assets/images/telegram.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <Outlet />
      <AntContainer>
        <BooRow>
          <MessengerGroup>
            <MessengerGroup.Telegram>
              <a href="https://t.me/dtmuzb">
                <img src={telegram} />
              </a>
            </MessengerGroup.Telegram>
            <MessengerGroup.YouTube>
              <a href="https://www.youtube.com/dtmuzb">
                <img src={youtube} />
              </a>
            </MessengerGroup.YouTube>
            <MessengerGroup.Instagram>
              <a href="https://www.instagram.com/dtmuzb/">
                <img src={instagram} />
              </a>
            </MessengerGroup.Instagram>
            <MessengerGroup.Facebook>
              <a href="https://www.facebook.com/dtmuzb">
                <img src={facebook} />
              </a>
            </MessengerGroup.Facebook>
          </MessengerGroup>
        </BooRow>
        <BooRow>
          <FooterTitle>
            © DTM 2021 |
            <img
              src={telegram}
              alt="telegram"
              width={"20px"}
              height={"20px"}
            />{" "}
            <a href="https://t.me/mandat2021bot">Mandat Telegram BOT</a>
          </FooterTitle>
          <FooterText>
            Saytdagi barcha ma'lumotlar O‘zbekiston Respublikasi qonunchiligi,
            shuningdek mualliflik huquqi va turdosh huquqlar to‘g‘risidagi
            qonunchilikka muvofiq himoya qilinadi. Ushbu saytda chop etilgan har
            qanday materiallardan to‘liq yoki qisman foydalanganda ma'lumotlar
            manbai (www.dtm.uz) ko‘rsatilishi shart.
          </FooterText>
        </BooRow>
      </AntContainer>
    </React.Fragment>
  );
};

export default Footer;
