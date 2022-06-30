import React from "react";
import Container from "../UI/Container/Container";
const Widget = ({title, className, children}) => {
  return (
    <Container style={{ flexDirection: "column" }}>
      <Container style={{ padding: 10, margin: 0 }}>
        <h1>{title}</h1>
      </Container>
      <Container className={className}>
        {children}
      </Container>
    </Container>
  );
};
export default Widget;