import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Profile = (props) => {
	const { user } = props;
	return (
		<Container style={{ marginTop: "6em" }} 
		>
			<Row className="justify-content-around">
				<Col xs="8" lg="3">
				<div >
					<Image className="d-block ml-auto mb-5"
						style={{ width: "100%" }}
						src={require(`../assets/pictures/${user.picture}`)}
						roundedCircle
					/>
				</div>
					
				</Col>
				<Col xs="10" lg="6">
				<h1> {user.first_name} {user.last_name}</h1>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis accusantium optio, suscipit dolores dolor repudiandae libero dignissimos dolore explicabo, sed mollitia illo! Ipsum, commodi consectetur neque! Tenetur reiciendis explicabo vel.
				</Col>
				<Col xs="0" lg="2"></Col>
			</Row>
		</Container>
	);
};

export default Profile;
