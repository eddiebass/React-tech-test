import React from "react";
import "./Tyre.css";

const Tyre = (ty) => {
	return (
		<section>
			<div className="container">
				<div className="sub-container">
					<h2>{ty.name}</h2>

					<h4>{ty.model}</h4>
				</div>
				<div className="para-container">
					<p className={`para ${ty.tyres[0].type.toLowerCase()}`}>
						{ty.tyres[0].type}
					</p>
					<p className="para green">{ty.tyres[0].size}</p>
				</div>
				<p className="justo">{`£${ty.tyres[0].price}`}</p>
			</div>
		</section>
	);
};

export default Tyre;
