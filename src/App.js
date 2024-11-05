import React from 'react';
import ButtonAppBar from './Appbar';
import SimpleBottomNavigation from './Button nav';
import TemporaryDrawer from './Drawer';
import BasicSpeedDial from './Speed dial';
import StandardImageList from './image list';
import BasicFocusTrap from './Focus trap';
import UnstyledSwitchIntroduction from './Switch'
function App() {
  return (
    <>
    <ButtonAppBar />
    <SimpleBottomNavigation />
    <TemporaryDrawer />
    <BasicSpeedDial />
    <StandardImageList />
    <BasicFocusTrap />
    <UnstyledSwitchIntroduction />
    </>
  );
}

export default App;