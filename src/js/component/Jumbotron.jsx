import React from "react";

const Jumbotron = () => {
    return (    
        <div className="p-5 mb-4 bg-light rounded-3 myJumbotron">
            <div className="container-fluid py-4">
                <h1 className="display-5 fw-normal">A Warm Welcome!</h1>
                <p className="col-md-12 fs-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita consequatur nihil maxime dolore placeat, eligendi molestias dolor nobis ut tempore doloremque iure sit necessitatibus aliquid molestiae odit quas vero vitae.</p>
                <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
            </div>
      </div>
    );
}

export default Jumbotron;