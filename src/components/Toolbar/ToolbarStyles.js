import styled from 'styled-components';

export const ToolbarContainer = styled.header`
    position: fixed;
    width: 100%;
    background: #060d1c;
    height: 64px;
    top: 0;
    left: 0;
    z-index: 1;
    @media ${(props) => props.theme.breakpoints.sm} {
        height: 32px;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        height: 48px;
    }
`;

export const ToolbarNavigation = styled.nav`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
`;

export const DrawerToggleButtonContainer = styled.div`
    display: none;
    @media ${(props) => props.theme.breakpoints.lg} {
        display: block;
    }
`;

export const ToolbarLogo = styled.div`
    margin-left: 0;
    @media ${(props) => props.theme.breakpoints.lg} {
        margin-left: 1rem;
    }
`;

export const ToolbarLogoNavLink = styled.a`
    font-size: 2.5rem;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.4s ease;
    &:hover {
        color: #fff;
        opacity: 1;
        cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.5rem;
    }
`;

export const ToolbarNavigationItems = styled.div`
    @media ${(props) => props.theme.breakpoints.lg} {
        display: none;
    }
`;

export const ToolbarNavigationItemsList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
`;

export const ToolbarNavigationItem = styled.div`
    padding: 0 1rem;
`;

export const NavLink = styled.a`
    font-size: 2rem;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.4s ease;
    &:hover {
        color: #fff;
        opacity: 1;
        cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 0.5rem;
    }
`;

export const Spacer = styled.div`
    flex: 1;
`;