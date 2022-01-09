import React from "react";
import Link from 'next/link';
import { SideDrawerNavigation, SideDrawerNavigationItems, SideDrawerNavigationItem, NavLink, SocialIconsContainer, SocialIcons } from './SideDrawerStyles';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai';
import { toolbarItemsList } from '../../constants/toolbar';
import { AccordionContext } from '../../layout/Layout';

const SideDrawer = ({ isOpen, itemClickHandler, handleLinkClick }) => (
    <SideDrawerNavigation isOpen={isOpen}>
        <SideDrawerNavigationItems>
            <AccordionContext.Consumer>
                {(contextValue) => (
                    <>
                        {toolbarItemsList.map(({ label, url }) => (
                            <SideDrawerNavigationItem key={label}>
                                <Link href={url} passHref>
                                    <NavLink onClick={() => handleLinkClick({ contextValue, url })}>
                                        {label}
                                    </NavLink>
                                </Link>
                            </SideDrawerNavigationItem>
                        ))}
                    </>
                )}
            </AccordionContext.Consumer>
        </SideDrawerNavigationItems>
        <SocialIconsContainer onClick={itemClickHandler}>
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
        </SocialIconsContainer>
    </SideDrawerNavigation>
);

export default SideDrawer;