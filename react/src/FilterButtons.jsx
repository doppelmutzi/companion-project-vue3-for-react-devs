import { useState, useContext } from "react";
import styled from "styled-components";
import AppContext from "./AppContext";
import FilterButton from "./FilterButton";

const Container = styled.div`
  display: flex;
  > * + * {
    margin-left: 16px;
  }
`;

const FilterButtons = () => {
  console.log("render <FilterButtons />");
  const { setFilterIndex } = useContext(AppContext);
  const [index, setIndex] = useState(0);
  return (
    <Container>
      <FilterButton
        onClick={() => {
          setIndex(0);
          setFilterIndex(0);
        }}
        active={index === 0}
        label="All"
      />
      <FilterButton
        onClick={() => {
          setIndex(1);
          setFilterIndex(1);
        }}
        active={index === 1}
        label="Active"
      />
      <FilterButton
        onClick={() => {
          setIndex(2);
          setFilterIndex(2);
        }}
        active={index === 2}
        label="Completed"
      />
    </Container>
  );
};

export default FilterButtons;
