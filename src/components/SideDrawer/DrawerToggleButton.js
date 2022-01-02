import React from "react";
import { ToggleButton, ToggleButtonLine } from './DrawerToggleButtonStyles';

const DrawerToggleButton = ({ onClickHandler }) => (
    <ToggleButton onClick={onClickHandler}>
        <ToggleButtonLine />
        <ToggleButtonLine />
        <ToggleButtonLine />
    </ToggleButton>
);

export default DrawerToggleButton;