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
            <SocialIcons href='https://github.com/UtkarshPathrabe' target='_blank' rel='noopener noreferrer'>
                <AiFillGithub size='3rem' alt='github' />
            </SocialIcons>
            <SocialIcons href='https://www.linkedin.com/in/utkarshpathrabe/' target='_blank' rel='noopener noreferrer'>
                <AiFillLinkedin size='3rem' alt='linkedin' />
            </SocialIcons>
            <SocialIcons href='https://www.instagram.com/utkarsh_pathrabe/' target='_blank' rel='noopener noreferrer'>
                <AiFillInstagram size='3rem' alt='instagram' />
            </SocialIcons>
            <SocialIcons href='https://www.facebook.com/utkarshpathrabe/' target='_blank' rel='noopener noreferrer'>
                <AiFillFacebook size='3rem' alt='facebook' />
            </SocialIcons>
            <SocialIcons href='https://twitter.com/UtkarshPathrabe' target='_blank' rel='noopener noreferrer'>
                <AiFillTwitterCircle size='3rem' alt='twitter' />
            </SocialIcons>
        </SocialIconsContainer>
    </SideDrawerNavigation>
);

export default SideDrawer;