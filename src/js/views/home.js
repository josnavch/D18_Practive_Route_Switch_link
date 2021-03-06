import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<span className="navbar-brand mb-0 h1"> React Boilerplate</span>

		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
