import styled from "styled-components";
const StyledHorizontalScrollMenu = styled.div`
  display: flex;
  align-items: baseline;
  padding: 0 10px;
  margin-top: 10px;
  border-bottom: 1px solid ${props => props.theme.lightGray};
  svg {
    height: 18px;
    width: 18px;
    padding: 0;
    vertical-align: middle;
  }
  .left-arrow,
  .right-arrow {
    max-width: 20px;
  }
  .left-arrow.active,
  .right-arrow.active {
    .fill {
      fill: ${props => props.theme.primary};
    }
  }
  .nav {
    flex: 1;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .list-item.active {
    color: ${props => props.theme.primary};
    border-bottom: 2px solid ${props => props.theme.primary};
  }
`;
export default StyledHorizontalScrollMenu;
