import React from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";

function App() {
  const { t } = useTranslation();

  const handle = (lang) => {
    i18next.changeLanguage(lang);
  };
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Language
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handle("uz")} href="#/action-1">Uzbek</Dropdown.Item>
                <Dropdown.Item  onClick={() => handle("ru")} href="#/action-2">Russian</Dropdown.Item>
                <Dropdown.Item onClick={() => handle("en")} href="#/action-3">English</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <h4>{t("text.text_paragraph")}</h4>


      {/* <button onClick={() => handle("uz")}>Uzbek</button>
      <button onClick={() => handle("en")}>English</button>
      <button onClick={() => handle("ru")}>Russian</button> */}
    </div>
  );
}

export default App;
