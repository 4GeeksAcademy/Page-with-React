import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<div className="mx-5 mt-5">
				<Jumbotron />
				<div className="row row-cols-1 row-cols-md-4 g-4 text-center">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
			
		</>
		
	);
};

export default Home;
