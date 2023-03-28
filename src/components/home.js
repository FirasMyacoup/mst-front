import React from "react";
import Button from '@mui/material/Button';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to our website!</h1>
        <p className="lead">
        Welcome to m website!!</p>
        <hr className="my-4" />
        <Button  href="/griddeal" variant="outlined">View deals</Button>
        <br>
        </br>
        <br>
        </br>
        <Button  href="/deals" variant="outlined">Add Deals</Button>

      </div>
    </div>
  );
};

export default Homepage;