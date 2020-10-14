import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { CardGroup, Card } from "react-bootstrap";

import Hero from "../components/Hero";
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: [{
                border: "primary",
                variant: "top",
                src : "https://lh3.googleusercontent.com/-V1bYen-_uBc/X4cBxiYuKpI/AAAAAAABA10/dFOCTJmpK-kH1cfHgOi7eNA7Si-rk4kigCK8BGAsYHg/s0/2020-10-14.jpg",
                card_title: "Primary Card Title",
                card_header: "Header",
                card_mute: "Last updated 3 mins ago",
                card_text: "Some quick example text to build on the card title and make up the bulk of the card's content."
            },
            {
                border: "danger",
                variant: "top",
                src : "https://lh3.googleusercontent.com/-oWE0h3mJAX4/X4cBwyEjChI/AAAAAAABA1o/Pe398YFN37cQjmRDiTwO6uA7Ybn1DgtFACK8BGAsYHg/s0/2020-10-14.jpg",
                card_title: "Primary Card Title",
                card_header: "Header",
                card_mute: "Last updated 3 mins ago",
                card_text: "Some quick example text to build on the card title and make up the bulk of the card's content."
            },
            {
                border: "info",
                variant: "top",
                src : "https://lh3.googleusercontent.com/-ygd7vAKtnts/X4cBxZ_Lk2I/AAAAAAABA1w/Cn2XykhoqkQwStahI_cGVlamzN9L8icnACK8BGAsYHg/s0/2020-10-14.jpg",
                card_title: "Primary Card Title",
                card_header: "Header",
                card_mute: "Last updated 3 mins ago",
                card_text: "Some quick example text to build on the card title and make up the bulk of the card's content."
            }]
        };
    }

    render() {
        return (
            <div>
                <Hero title={this.props.title} subTitle={this.props.subTitle} text={this.props.text} />
                <Container className="mt-5">
                    <CardGroup>
                        {
                            this.state.cardData.map((data, i ) =>{
                                return (
                                    <Card key= {i} border={data.border} style={{ width: "18rem", "margin": "10px" }}>
                                        <Card.Img variant={data.variant} src={data.src} />
                                        <Card.Header>{data.Header}</Card.Header>
                                        <Card.Body>
                                        <Card.Title>{data.card_title}</Card.Title>
                                        <Card.Text>
                                            {data.card_text}
                                        </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">{data.card_mute}</small>
                                        </Card.Footer>
                                    </Card>
                                )
                            })
                        }
                    </CardGroup>
                </Container>
                
            </div>
        );
    }
}
export default HomePage;
