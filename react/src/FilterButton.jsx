import PropTypes from "prop-types";
import { useContext } from "react";
import styled from "styled-components";
import AppContext from "./AppContext";

const Button = styled.button`
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) =>
    props.active ? (props) => props.theme.color : "transparent"};
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  padding: 4px;
  border-radius: 3px;
  background: none;
`;

const FilterButton = ({ label, onClick, active }) => {
  console.log("render <FilterButton />");
  const { theme } = useContext(AppContext);

  return (
    <Button theme={theme} onClick={onClick} active={active}>
      {label}
    </Button>
  );
};

FilterButton.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onCLick: PropTypes.func,
};

FilterButton.defaultProps = {
  active: false,
  onClick: () => {},
};

export default FilterButton;
