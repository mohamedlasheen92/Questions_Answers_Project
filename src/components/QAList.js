import React from 'react'
import { Accordion, Row } from 'react-bootstrap'
import { questions_answers } from '../data';


export default function QAList({ data, delQA }) {

  let theData = JSON.parse(localStorage.getItem("items"));

  const deleteItem = (event, index) => {
    // console.log(event.target.parentElement.parentElement.parentElement);
    // event.target.parentElement.parentElement.parentElement.remove();
    questions_answers.splice(index, 1);
    delQA();

  }

  return (
    <>
      <Row>

        <Accordion defaultActiveKey="0" className='mt-5'>
          {
            localStorage.getItem("items") != null ? theData.map((item, index) => {
              return (
                <Accordion.Item eventKey={item.id} key={index} >
                  <Accordion.Header className='border-none ques'>{item.question}</Accordion.Header>
                  <Accordion.Body>
                    <p className='answer'>{item.answer}</p>
                    <button className='btn btn-danger btn-sm' onClick={(event) => deleteItem(event, index)}>delete</button>
                  </Accordion.Body>
                </Accordion.Item>
              )
            }) : <h2 className='text-secondary fw-bold text-center'>No Data</h2>
          }
        </Accordion>


      </Row>


    </>
  )
}
