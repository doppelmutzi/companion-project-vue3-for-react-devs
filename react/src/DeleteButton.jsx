import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  font-size: 30px;
`;

const DeleteButton = ({ onClick, label }) => {
  console.log("render <DeleteButton />");
  return <Button onClick={onClick}>{label}</Button>;
};

DeleteButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

DeleteButton.defaultProps = {
  label: "❌",
  onClick: () => {},
};

export default DeleteButton;
