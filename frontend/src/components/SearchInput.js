import React from "react";
import { searchIcon } from "../icons/svgIcons";
import StyledInput from "../styles/InputStyles";
import StyledSearchInput from "../styles/StyledSearchInput";

const SearchInput = props => {
  return (
    <StyledSearchInput>
      <div className="icon">{searchIcon}</div>
      <StyledInput margin="0" padding="2px" height="100%">
        <input
          type="text"
          name="search"
          value={props.value}
          placeholder="Search Twitter"
          onChange={props.handleInput}
        />
      </StyledInput>
    </StyledSearchInput>
  );
};
export default SearchInput;
