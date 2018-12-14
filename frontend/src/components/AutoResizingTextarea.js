import React from "react";
class AutoResizingTextarea extends React.Component {
  state = {
    prevTextLength: "",
    scrollHeight: 74,
    textarea: ""
  };
  textareaDiv = React.createRef();
  textarea = React.createRef();
  fakeDiv = React.createRef();
  handleResize = e => {
    const { prevTextLength } = this.state;
    //whenever scroll height of textarea changes we change its parent div's hieght
    //yes calculating layouts is a perf heavy task,also setting height on every change
    //but....we can handle input and resizing in two different function
    //and debonce resizign funtion

    //scroll height increases when a new line is added
    //so instead of increasing on each input we are changing textarea height on
    //scrollheight change and after minimum height
    if (
      e.target.scrollHeight > 74 &&
      e.target.scrollHeight !== this.state.scrollHeight
    ) {
      //when adding texts
      //two different checks,bcoz deleting has other caveats to solve
      if (prevTextLength < e.target.value.length) {
        this.textareaDiv.current.style.height = e.target.scrollHeight + "px";
        this.setState({ scrollHeight: e.target.scrollHeight });
      }
    }
    //if deleting text
    if (
      prevTextLength > e.target.value.length &&
      this.state.scrollHeight >= 90
    ) {
      //set to 1 bcoz scrollHeight only gives actual value if it is higer than actual heigth
      e.target.style.height = "1px";
      this.textareaDiv.current.style.height = e.target.scrollHeight + "px";
      e.target.style.height = "100%";
      this.setState({ scrollHeight: e.target.scrollHeight });
    }
    this.setState({
      prevTextLength: this.textarea.current.value.length
    });

    this.setState(
      () => ({
        textarea: this.textarea.current.value
      }),
      () => {
        // just to highlight overlimit text
        //grab all text above 140 wrap them in span tag
        const { textarea } = this.state;
        if (textarea.length > 140) {
          const extra = textarea
            .substring(140)
            .split("")
            .map(char => `<span className="extra-char">${char}</span>`)
            .join("");
          this.fakeDiv.current.innerHTML = textarea.substring(0, 140) + extra;
        } else {
          //sync pseudo div with textarea text
          //so that deleting also deletes text in fake div also, populated in above if block
          this.fakeDiv.current.innerHTML = textarea;
        }
      }
    );
  };

  render() {
    const { textarea } = this.state;
    return (
      <div
        className="textarea-container"
        ref={this.textareaDiv}
        onClick={() => this.textarea.current.focus()}
      >
        <div className="fake-div" ref={this.fakeDiv} />
        <textarea
          className="textarea"
          ref={this.textarea}
          value={textarea}
          placeholder="What's happening ?"
          onChange={e => {
            this.props.handleInput(e.target.value);
            this.handleResize(e);
          }}
        />
      </div>
    );
  }
}
export default AutoResizingTextarea;
