import React from "react";
import { Stack } from "react-bootstrap";
import Icons from "../../assets/icons/Icons";
import './SocialMediaIcons.scss';
type Props = {};

const SocialMediaIcons = (props: Props) => {
  return (
    <div className='socialMediaIcons mt-auto'>
      <Stack
        direction="horizontal"
        className="my-4 flex-wrap p-4 justify-content-md-start align-items-center gap-3"
        gap={3}
      >
        <a
          href="https://www.linkedin.com/in/murali-krishana-adapa/"
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <Icons width='45' height="45" icon="linkedIn" />
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:muraliadpame001@gmail.com"
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <Icons width='45' height="45" icon="gmail" />
          <span>Email</span>
        </a>
        
        <a
          href="https://www.behance.net/Murali-Krishna-Adapa"
          target="_blank"
          rel="noreferrer"
        >
          <Icons width='45' height="45" icon="be" />
          <span>Behance</span>
        </a>
        <a
          href="https://instagram.com/murali_adapa_?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          rel="noreferrer"
        >
          <Icons width='45' height="45" icon="instagram" />
          <span>Instagram</span>
        </a>
        
      </Stack>
    </div>
  );
};

export default SocialMediaIcons;
