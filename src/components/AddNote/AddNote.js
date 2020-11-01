import React, { useState } from 'react';
import './AddNote.css';
import { Collapse, Button, CardBody, Card, Input } from 'reactstrap';

const AddNote = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState("");

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="add-note">
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}> Quick Note </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <Input type="textarea" name="note" id="note" value={note} placeholder="Write anything..." onChange={e => setNote(e.target.value)} />
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default AddNote;