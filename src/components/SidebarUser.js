import React from "react";
import { Image } from "react-bootstrap";


export default function SidebarUser(props) {

	const {user} = props;
	return (
		<div
			style={{ display: "flex", margin: "20px" }}
		>
			<Image
				style={{ width: "30%" }}
				src={require(`../assets/pictures/${user.picture}`)}
				roundedCircle
			/>
			<span style={{ padding: "20px" }}>
				{user.first_name} {user.last_name}
			</span>
		</div>
	);
}
