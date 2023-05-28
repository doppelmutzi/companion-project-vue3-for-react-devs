import { string } from "prop-types";
import styled from "styled-components";

const Headline = styled.h1`
  color: ${(props) => props.color};
  font-size: 100px;
  font-weight: 100;
  text-align: center;
`;

const HeadlineComponent = ({ color }) => {
  console.log("render <Headline />");
  return <Headline color={color}>todos.jsx</Headline>;
};

HeadlineComponent.propTypes = {
  color: string,
};

HeadlineComponent.defaultProps = {
  color: "rgba(175, 47, 47, 0.15)",
};

export default HeadlineComponent;
