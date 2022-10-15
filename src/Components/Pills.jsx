import React, { useState } from 'react';
import Accordion from './Accordion';
import {
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBContainer,
  MDBRow as Row,
  MDBCol as Col,
} from 'mdb-react-ui-kit';

export default function Pills() {
  const [iconsActive, setIconsActive] = useState('pill1');

  const handleIconsClick = (value) => {
    if (value === iconsActive) {
      return;
    }

    setIconsActive(value);
  };

  return (
    <MDBContainer fluid className='ms-5'>
      <MDBTabs pills className='mb-3'>

            <MDBTabsItem className='mb-5'>
          <MDBTabsLink onClick={() => handleIconsClick('pill1')} active={iconsActive === 'pill1'}>
            <MDBIcon fas icon='map' className='me-2' /> Popular
          </MDBTabsLink>
        </MDBTabsItem>
        
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleIconsClick('pill2')} active={iconsActive === 'pill2'}>
            <MDBIcon fas icon='info' className='me-2' /> Discussion
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={iconsActive === 'pill1'} className='me-5'>
            <Accordion />
        </MDBTabsPane>
        <MDBTabsPane show={iconsActive === 'pill2'}>Tab 2 content</MDBTabsPane>
      </MDBTabsContent>
      </MDBContainer>
  );
}