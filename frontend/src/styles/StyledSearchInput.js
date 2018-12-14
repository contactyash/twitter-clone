import styled from "styled-components";
const StyledSearchInput = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.extraLightGray};
  border-radius: 24px;
  height: auto;
  &:focus-within {
    background-color: ${props => props.theme.secondary};
    border: 1px solid ${props => props.theme.primary};
    svg {
      .fill {
        fill: ${props => props.theme.primary};
      }
    }
  }

  svg {
    height: 16px;
    width: 16px;
    padding: 0;
    padding: 0 8px;
    position: relative;
    top: 3px;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: ${props => props.theme.primary};
    transition: background-color 5000s ease-in-out 0s;
  }
  input:focus {
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.primary};
  }

  input::placeholder {
    font-size: 12px;
  }
`;
export default StyledSearchInput;
