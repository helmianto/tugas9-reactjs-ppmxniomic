import React from 'react';
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';

// Ini bawaan Dokumentasi React Bootstrap 
const popOver = (
    <Popover id="popover-contained">
        <Popover.Header as="h3">Jajal</Popover.Header>
        <Popover.Body>
            <strong>Holy guacamole!</strong> Check this info.
        </Popover.Body>
    </Popover>
);
const popOverBasic = (
    <Popover id="popover-positioned-right">
        Informasi Website ini mengggunakan Popover tanpa styling, karena bawaan dokumentasi ketika digunakan muncul eror yang masih yang masih saya bingung debugging-nya gimana.
    </Popover>
);

const PopoverComp = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popOverBasic}>
        <Button variant="primary">Informasi</Button>
    </OverlayTrigger>
);

export default PopoverComp;