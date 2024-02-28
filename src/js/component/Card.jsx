import React from "react";

const Card = () => {
    return (    
        
            <div className="col">
                <div className="card h-100">
                    <img src="https://picsum.photos/id/1/500/325" className="card-img-top bg-secondary" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde non temporibus reiciendis quisquam.</p>
                    </div>
                    <div className="card-footer bg-light">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
                
    );
};

export default Card;