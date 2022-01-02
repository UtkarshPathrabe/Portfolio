import React from "react";
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai';

import { ToolbarContainer, ToolbarNavigation, DrawerToggleButtonContainer, ToolbarLogo, ToolbarLogoNavLink, ToolbarNavigationItems, ToolbarNavigationItemsList, ToolbarNavigationItem, NavLink, Spacer, SocialIconsContainer, SocialIcons } from './ToolbarStyles.js';
import { toolbarItemsList } from '../../constants/toolbar';
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton.js";

const Toolbar = ({ toggleButtonHandler }) => (
    <ToolbarContainer>
        <ToolbarNavigation>
            <DrawerToggleButtonContainer>
                <DrawerToggleButton onClickHandler={toggleButtonHandler} />
            </DrawerToggleButtonContainer>
            <ToolbarLogo>
                <Link href='#' passHref>
                    <ToolbarLogoNavLink>
                        Home
                    </ToolbarLogoNavLink>
                </Link>
            </ToolbarLogo>
            <Spacer />
            <ToolbarNavigationItems>
                <ToolbarNavigationItemsList>
                    {toolbarItemsList.map(({ label, url }) => (
                        <ToolbarNavigationItem key={label}>
                            <Link href={url} passHref>
                                <NavLink>
                                    {label}
                                </NavLink>
                            </Link>
                        </ToolbarNavigationItem>
                    ))}
                </ToolbarNavigationItemsList>
            </ToolbarNavigationItems>
            <Spacer />
            <SocialIconsContainer>
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
        </ToolbarNavigation>
    </ToolbarContainer>
);

export default Toolbar;