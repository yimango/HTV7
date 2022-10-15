import React, {useState} from 'react';
import { MDBAccordion, MDBAccordionItem, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {

    const [color1, setColor1] = useState(false);

    

    const btnColorChangeUp = () => {
        if(!color2){
            setColor1(!color1)
        }
        else{
            setColor1(!color1)
            setColor2(!color2)
        }
    }
    
    const [color2, setColor2] = useState(false);

    const btnColorChangeDown = () => {
        if(!color1){
            setColor2(!color2)
        }
        else{
            setColor1(!color1)
            setColor2(!color2)
        }
    }

  return (
    <MDBAccordion>
      <MDBAccordionItem collapseId={1} headerTitle='Title 1' className='pb-5'>
        <React.Fragment>
      <MDBBtn className="float-end me-3 mb-2" onClick={btnColorChangeUp} size='sm' floating style={ color1 ? { backgroundColor: 'Green' } : {backgroundColor: 'Blue'}} >
      <MDBIcon fas icon='arrow-up' />
    </MDBBtn>
    <MDBBtn className="float-end me-2 mb-2" onClick={btnColorChangeDown} size='sm' floating style={ color2 ? { backgroundColor: 'Red' } : {backgroundColor: 'Blue'}}>
      <MDBIcon fas icon='arrow-down' />
    </MDBBtn>
    </React.Fragment>
        </MDBAccordionItem>
    </MDBAccordion>
  );
}

//test