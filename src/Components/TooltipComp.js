import React, { useRef, useState } from 'react';
import { Button, Tooltip } from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay';

function TooltipComp() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
      <>
        <Button ref={target} onClick={() => setShow(!show)}>
            View Website
        </Button>
        <Overlay target={target.current} show={show} placement="bottom">
            {(props) => (
                <Tooltip id="overlay-example" {...props}>
                Akses Sport v1.0
                </Tooltip>
            )}
        </Overlay>
      </>
    );
}

export default TooltipComp;