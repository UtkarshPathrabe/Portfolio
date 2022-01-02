import React from "react";
import Link from 'next/link';
import { ToolbarContainer, ToolbarNavigation, DrawerToggleButtonContainer, ToolbarLogo, ToolbarLogoNavLink, ToolbarNavigationItems, ToolbarNavigationItemsList, ToolbarNavigationItem, NavLink, Spacer } from './ToolbarStyles.js';
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
        </ToolbarNavigation>
    </ToolbarContainer>
);

export default Toolbar;