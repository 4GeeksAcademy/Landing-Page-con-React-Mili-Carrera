import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Nabvar = () => {
	return (

		<div className="container">
			<div className="Navbar navbar bg-dark border-bottom border-body">
				<h3 className="logo mb-0 col-md-3 text-light">Start Bootstrap</h3>
				<ul class="nav justify-content-end">

					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="#">Active</a>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" aria-disabled="true">Home</a>
					<li class="nav-item">
						<a class="nav-link disabled" aria-disabled="true">About us</a>
					<li class="nav-item">
						<a class="nav-link disabled" aria-disabled="true">Disabled</a>
					
					</li>
				</ul>


			</div>



		</div>




	);
};

export default Nabvar;