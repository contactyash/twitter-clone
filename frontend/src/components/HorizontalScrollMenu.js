import React from "react";
import StyledHorizontalScrollMenu from "../styles/StyledHorizontalScrollMenu";
import { arrowLeft, arrowRight } from "../icons/svgIcons";
class HorizontalScrollMenu extends React.Component {
  scrollMenu = React.createRef();
  state = {
    scrollOn: false,
    scrollPrev: false,
    scrollNext: true
  };
  componentDidMount() {
    const scrollWidth = this.scrollMenu.current.scrollWidth;
    const clientWidth = this.scrollMenu.current.clientWidth;
    const scrollOn = scrollWidth > clientWidth ? true : false;
    this.setState({ scrollOn });
  }

  handleForward = () => {
    const scrollMenuWidth = this.scrollMenu.current.getBoundingClientRect()
      .width;
    const scrollLeft = this.scrollMenu.current.scrollLeft;
    const scrollWidth = this.scrollMenu.current.scrollWidth;

    this.scrollMenu.current.scrollTo({
      top: 0,
      left: `${scrollLeft + scrollMenuWidth - 30}`,
      behavior: "smooth"
    });

    if (scrollWidth - (scrollLeft + scrollMenuWidth) <= 0) {
      this.setState({
        scrollNext: false
      });
    } else {
      this.setState({
        scrollNext: true,
        scrollPrev: true
      });
    }
  };
  handleBackward = () => {
    var scrollMenuWidth = this.scrollMenu.current.getBoundingClientRect().width;
    const scrollLeft = this.scrollMenu.current.scrollLeft;

    this.scrollMenu.current.scrollTo({
      top: 0,
      left: `${scrollLeft - scrollMenuWidth + 30}`,
      behavior: "smooth"
    });
    if (scrollLeft <= 0) {
      this.setState({
        scrollPrev: false
      });
    } else {
      this.setState({
        scrollPrev: true,
        scrollNext: true
      });
    }
  };
  render() {
    const { scrollOn, scrollNext, scrollPrev } = this.state;
    return (
      <StyledHorizontalScrollMenu>
        {scrollOn && (
          <div
            className={scrollPrev ? "left-arrow active" : "left-arrow"}
            onClick={this.handleBackward}
          >
            {arrowLeft}
          </div>
        )}
        <nav ref={this.scrollMenu} className="nav">
          {this.props.children}
        </nav>
        {scrollOn && (
          <div
            className={scrollNext ? "right-arrow active" : "right-arrow"}
            onClick={this.handleForward}
          >
            {arrowRight}
          </div>
        )}
      </StyledHorizontalScrollMenu>
    );
  }
}
export default HorizontalScrollMenu;
