export default function ForegroundColors() {
    return (
      <div id="wd-css-colors">
        <h2>Colors</h2>
        <h3 className="wd-fg-color-blue">Foreground color</h3>
        <p className="wd-fg-color-red">
          The text in this paragraph is red but{" "}
          <span className="wd-fg-color-green">this text is green</span>
        </p>
        <p id="wd-ai-fg" className="wd-fg-color-blue">
          A nested element can override its parent&apos;s color, so{" "}
          <span className="wd-fg-color-black">this span is black</span>
        </p>
        <p id="wd-your-fg" className="wd-fg-color-black">
            This paragraph has a green foreground color but{" "}
            <span className="wd-fg-color-blue">this text is blue</span>
        </p>
      </div>
    );
  }