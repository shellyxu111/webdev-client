export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This sentence is far longer than the box that holds it, so the
          declared width of 120px and height of 60px are easy to see as the text
          wraps and overflows past the yellow background.
        </div>
        <div
          id="wd-your-dimension"
          className="wd-your-dimension wd-bg-color-green"
        >
          My
          dimension111111111111111111111111111111111111111111111111111111111111111111111111111
        </div>
      </div>
    </div>
  );
}
