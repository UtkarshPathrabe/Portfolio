import React from "react";
import Link from 'next/link';
import { SideDrawerNavigation, SideDrawerNavigationItems, SideDrawerNavigationItem, NavLink } from './SideDrawerStyles';
import { toolbarItemsList } from '../../constants/toolbar';

const SideDrawer = ({ isOpen }) => (
    <SideDrawerNavigation isOpen={isOpen}>
        <SideDrawerNavigationItems>
            {toolbarItemsList.map(({ label, url }) => (
                <SideDrawerNavigationItem key={label}>
                    <Link href={url} passHref>
                        <NavLink>
                            {label}
                        </NavLink>
                    </Link>
                </SideDrawerNavigationItem>
            ))}
        </SideDrawerNavigationItems>
    </SideDrawerNavigation>
);

export default SideDrawer;