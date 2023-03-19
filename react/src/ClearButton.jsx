import styled from "styled-components";

const Button = styled.a`
  padding: 4px 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ClearButton = ({ onClick }) => {
  return <Button onClick={onClick}>Clear completed</Button>;
};

export default ClearButton;
