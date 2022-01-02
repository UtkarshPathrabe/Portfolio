import React, { useState } from 'react';

import Footer from '../components/Footer/Footer';
import Toolbar from '../components/Toolbar/Toolbar';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';
import { Container, MainContainer } from './LayoutStyles';

export const Layout = ({children}) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(current => !current);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;
  if (sideDrawerOpen) {
    backdrop = (<Backdrop onClickHandler={backdropClickHandler} />);
  }

  return (
    <Container>
      <Toolbar toggleButtonHandler={drawerToggleClickHandler} />
      <SideDrawer isOpen={sideDrawerOpen} itemClickHandler={backdropClickHandler} />
      {backdrop}
      <MainContainer>
        {children}
      </MainContainer>
      <Footer/>
    </Container>
  )
};
