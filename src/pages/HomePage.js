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
                card_title: "Working selfie",
                card_header: "Header",
                card_mute: "Last updated 1 years ago",
                card_text: "I'm a bit of a workaholic. When I feel like I'm not doing something, it drives me insane."
            },
            {
                border: "danger",
                variant: "top",
                src : "https://lh3.googleusercontent.com/-oWE0h3mJAX4/X4cBwyEjChI/AAAAAAABA1o/Pe398YFN37cQjmRDiTwO6uA7Ybn1DgtFACK8BGAsYHg/s0/2020-10-14.jpg",
                card_title: "Once in the blue moon",
                card_header: "Header",
                card_mute: "Last updated 6 months ago",
                card_text: "Ham toh bhai jaise hain, waise rahenge Ab koyi khush ho, ya ho khafa, ham nahin badlenge, apni adaa Samjhe na samjhe koyi ham yahi kahenge."
            },
            {
                border: "info",
                variant: "top",
                src : "https://lh3.googleusercontent.com/-ygd7vAKtnts/X4cBxZ_Lk2I/AAAAAAABA1w/Cn2XykhoqkQwStahI_cGVlamzN9L8icnACK8BGAsYHg/s0/2020-10-14.jpg",
                card_title: "Chatkara",
                card_header: "Header",
                card_mute: "Last updated 4 year ago",
                card_text: "Do me padha toh kafi nai tha kya ????????? 3rd me kya padh k mil jayega"
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
