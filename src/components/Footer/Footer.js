import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Mail</LinkTitle>
          <LinkItem href='mailTo:uapathrabe@gmail.com'>uapathrabe@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>This is my personal website and the opinion expressed here do not relate to my organization I work with or work for.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/UtkarshPathrabe' target='_blank'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/utkarshpathrabe/' target='_blank'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.instagram.com/utkarsh_pathrabe/' target='_blank'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.facebook.com/utkarshpathrabe/' target='_blank'>
            <AiFillFacebook size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://twitter.com/UtkarshPathrabe' target='_blank'>
            <AiFillTwitterCircle size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;