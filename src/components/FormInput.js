import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { questions_answers } from '../data';

export default function FormInput({ onAdd, notify }) {
  const [qu, setQuestion] = useState("");
  const [an, setAnswer] = useState("");

  // Push data to array
  const addNewItem = () => {
    if (qu.length > 0 && an.length > 0) {
      questions_answers.push({ id: Math.random(), question: qu, answer: an });
      setQuestion("");
      setAnswer("");
      onAdd();
    } else {
      notify("Please, complete the data", "Error");
    }
  }
  return (
    <>
      <Row>

        <Col md="5">
          <Form.Control value={qu} onChange={(event) => setQuestion(event.target.value)} type="text" placeholder="Enter question" className='shadow-none' maxLength="60" />
        </Col>

        <Col md="5" className='my-3 my-md-0'>
          <Form.Control value={an} onChange={(event) => setAnswer(event.target.value)} type="text" placeholder="Enter answer" className='shadow-none' />
        </Col>

        <Col md="2" className=' text-center px-2 p-0'>
          <Button variant="warning" onClick={() => addNewItem()} className=' w-100' type="submit">
            Add
          </Button>
        </Col>

      </Row>

    </>
  )
}
