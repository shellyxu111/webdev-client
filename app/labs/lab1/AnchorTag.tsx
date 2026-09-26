export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/shellyxu111/webdev-client" id="wd-github">
        GitHub
      </a>
      <br />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
      <br />
      Please{" "}
      <a href="https://op.gg/" id="wd-your-link">
        click here
      </a>{" "}
      to see your League of Legends stats
      <br />
      Please{" "}
      <a
        href="https://www.linkedin.com/in/beiyi-xu/"
        id="wd-your-github"
        target="_blank"
        rel="noreferrer"
      >
        click here
      </a>{" "}
      to see Shelly Xu&apos;s LinkedIn profile
      <br />
    </>
  );
}
