import React from 'react';
import {css} from 'emotion';
import Page from '../common/Page';
import BigControl from '../../assets/bigControl_svg';
import BigControlHover from '../../assets/bigControlHover_svg';
import BigPrint from '../../assets/bigPrint_svg';
import BigPrintHover from '../../assets/bigPrintHover_svg';
import BigSettings from '../../assets/bigSettings_svg';
import BigSettingsHover from '../../assets/bigSettingsHover_svg';
import MenuButton from '../common/MenuButton';
import WifiOff from '../../assets/noWifi_svg';

export default () => {
  const styleBody = css({
    display: 'grid !important',
    gridColumnGap: '20px',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateRows: 'auto'
  });

  return (
    <Page>
      <Page.Header>
        Mang'OS Non Commercial
        <Page.RightButton icon={<WifiOff/>}/>
      </Page.Header>
      <Page.Body className={styleBody}>
        <MenuButton
          icon={<BigControl/>}
          iconHover={<BigControlHover/>}
          to='/control'>
          Control
        </MenuButton>
        <MenuButton
          icon={<BigPrint/>}
          iconHover={<BigPrintHover/>}
          disabled
          to='/files'>
          Files
        </MenuButton>
        <MenuButton
          icon={<BigSettings/>}
          iconHover={<BigSettingsHover/>}
          disabled
          to='/settings'>
          Settings
        </MenuButton>
      </Page.Body>
    </Page>
  );
};
