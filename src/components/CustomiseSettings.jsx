// SettingsModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const SettingsModal = ({ show, handleClose, applySettings }) => {
    const [themeColor, setThemeColor] = useState('');
    const [layout, setLayout] = useState('');

    const handleApply = () => {
        applySettings({ themeColor, layout });
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Customize Your Website</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="themeColor">
                        <Form.Label>Theme Color</Form.Label>
                        <Form.Control
                            type="color"
                            value={themeColor}
                            onChange={(e) => setThemeColor(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="layout">
                        <Form.Label>Layout</Form.Label>
                        <Form.Control
                            as="select"
                            value={layout}
                            onChange={(e) => setLayout(e.target.value)}
                        >
                            <option value="">Select Layout</option>
                            <option value="layout1">Layout 1</option>
                            <option value="layout2">Layout 2</option>
                            {/* Add more layout options as needed */}
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleApply}>
                    Apply
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SettingsModal;
