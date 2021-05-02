import React from "react";
import {
  Container,
  Wrapper,
  Row,
  Column,
  Link,
  Title,
  Header,
} from "./styles/contactForm";

export default function Contact({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Contact.Wrapper = function ContactWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Contact.Row = function ContactRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Contact.Column = function ContactColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Contact.Link = function ContactLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Contact.Title = function ContactWrapper({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Contact.Header = function ContactHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};
