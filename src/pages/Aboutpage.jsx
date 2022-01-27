import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function Aboutpage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This App is for give feedback</p>
        <Link to="/">
          <p>Back to Home Page</p>
        </Link>
      </div>
    </Card>
  );
}

export default Aboutpage;
