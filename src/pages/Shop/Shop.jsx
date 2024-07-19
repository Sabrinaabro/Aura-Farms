import React from 'react';
import { Container, Row, Col, Card, Nav } from 'react-bootstrap';
import './Shop.css'; 

const products = {
    fruits: [
        { name: 'Apple', price: '$2.99', imgSrc: 'apple.jpg' },
        { name: 'Banana', price: '$1.49', imgSrc: 'banana.jpg' }
        // Add more fruits here
    ],
    spices: [
        { name: 'Cinnamon', price: '$3.99', imgSrc: 'cinnamon.jpg' },
        { name: 'Pepper', price: '$2.49', imgSrc: 'pepper.jpg' }
        // Add more spices here
    ],
    grains: [
        { name: 'Rice', price: '$4.99', imgSrc: 'rice.jpg' },
        { name: 'Quinoa', price: '$5.99', imgSrc: 'quinoa.jpg' }
        // Add more grains here
    ],
    vegetables: [
        { name: 'Carrot', price: '$1.99', imgSrc: 'carrot.jpg' },
        { name: 'Broccoli', price: '$2.49', imgSrc: 'broccoli.jpg' }
        // Add more vegetables here
    ],
    others: [
        { name: 'Olive Oil', price: '$6.99', imgSrc: 'olive-oil.jpg' },
        { name: 'Honey', price: '$4.49', imgSrc: 'honey.jpg' }
        // Add more items here
    ]
};

const Shop = () => {
    return (
        <Container>
            <header>
                <h1>Our Products</h1>
                <Nav variant="tabs" defaultActiveKey="#fruits">
                    <Nav.Item>
                        <Nav.Link href="#fruits">Fruits</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#spices">Spices</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#grains">Grains</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#vegetables">Vegetables</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#others">Others</Nav.Link>
                    </Nav.Item>
                </Nav>
            </header>

            <main>
                {Object.entries(products).map(([category, items]) => (
                    <section id={category} className="product-category" key={category}>
                        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                        <Row>
                            {items.map((item, index) => (
                                <Col md={4} lg={3} key={index}>
                                    <Card className="product-card">
                                        <Card.Img variant="top" src={item.imgSrc} alt={item.name} />
                                        <Card.Body>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Text>{item.price}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </section>
                ))}
            </main>
        </Container>
    );
};

export default Shop;
