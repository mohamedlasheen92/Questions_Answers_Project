import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./components/FormInput";
import QAList from "./components/QAList";
import { useState } from "react";
import { questions_answers } from "./data";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [data, setData] = useState(questions_answers);
  const addItem = () => {

    localStorage.setItem("items", JSON.stringify([...questions_answers]));

    setData([...questions_answers]);

    notify("Added successfully", "Success")


  }

  // Delete all data items
  const deleteAllItems = () => {
    // questions_answers.length = 0;
    questions_answers.splice(0, questions_answers.length);
    setData([]);

    localStorage.removeItem("items")
    notify("All deleted successfully", "Success");
  }

  const delQA = () => {
    setData([...questions_answers]);

    localStorage.setItem("items", JSON.stringify([...questions_answers]))

    if (JSON.parse(localStorage.getItem("items")).length <= 0) {
      deleteAllItems();
    }
    notify("The question was successfully deleted", "Success");
  }
  // To Push Notification
  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else toast.success(message);

  }

  return (
    <>

      <Container className="mt-5">
        <Row className="justify-content-center flex-column">
          <Col>
            <p className="fs-2 fw-bold text-center mb-5">Common Questions and Answers</p>
          </Col>
          <Col>
            <FormInput onAdd={addItem} notify={notify} />
            <QAList data={data} delQA={delQA} />

            {
              localStorage.getItem("items") != null &&
              <button className="btn btn-danger w-100 mt-3 mb-5" onClick={() => deleteAllItems()}>delete all</button>
            }
          </Col>

        </Row>
        <ToastContainer />
      </Container>


    </>
  );
}

export default App;
