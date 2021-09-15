import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import "./SearchCom.css";
const SearchCom = ({ setName, setCurrentPage }) => {
  return (
    <div>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          onChange={(e) => {
            setName(e.target.value);
            setCurrentPage(1);
          }}
        />
        <Button variant="outline-success" onClick={(e) => e.preventDefault()}>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchCom;
