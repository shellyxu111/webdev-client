export default function YourForm() {
  return (
    <div>
      <h4>Your Form</h4>
      <form
        id="wd-your-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h5>Text Fields</h5>
        <label htmlFor="wd-your-first-name">First name:</label>
        <input type="text" placeholder="Shelly" id="wd-your-first-name" />
        <br />
        <label htmlFor="wd-your-last-name">Last name:</label>
        <input type="text" placeholder="Xu" id="wd-your-last-name" />
        <br />
        <label htmlFor="wd-your-password">Password:</label>
        <input type="password" defaultValue="shelly111" id="wd-your-password" />

        <h5>Text Boxes</h5>
        <label htmlFor="wd-your-bio">Short bio:</label>
        <br />
        <textarea
          id="wd-your-bio"
          cols={30}
          rows={6}
          defaultValue="Shelly Xu is a student at Northeastern University who is learning web development."
        />

        <h5>Radio Buttons</h5>
        <label>Class standing:</label>
        <br />
        <input type="radio" name="your-standing" id="wd-your-freshman" />
        <label htmlFor="wd-your-freshman">Freshman</label>
        <br />
        <input type="radio" name="your-standing" id="wd-your-sophomore" />
        <label htmlFor="wd-your-sophomore">Sophomore</label>
        <br />
        <input type="radio" name="your-standing" id="wd-your-junior" />
        <label htmlFor="wd-your-junior">Junior</label>
        <br />
        <input type="radio" name="your-standing" id="wd-your-senior" />
        <label htmlFor="wd-your-senior">Senior</label>
        <br />
        <input
          type="radio"
          name="your-standing"
          id="wd-your-graduate"
          defaultChecked
        />
        <label htmlFor="wd-your-graduate">Graduate</label>
        <br />
        <label>Enrollment status:</label>
        <br />
        <input
          type="radio"
          name="your-enrollment"
          id="wd-your-full-time"
          defaultChecked
        />
        <label htmlFor="wd-your-full-time">Full time</label>
        <br />
        <input type="radio" name="your-enrollment" id="wd-your-part-time" />
        <label htmlFor="wd-your-part-time">Part time</label>

        <h5>Checkboxes</h5>
        <label>Programming Languages you want to learn:</label>
        <br />
        <input type="checkbox" name="your-languages" id="wd-your-chkbox-js" />
        <label htmlFor="wd-your-chkbox-js">JavaScript</label>
        <br />
        <input type="checkbox" name="your-languages" id="wd-your-chkbox-ts" />
        <label htmlFor="wd-your-chkbox-ts">TypeScript</label>
        <br />
        <input type="checkbox" name="your-languages" id="wd-your-chkbox-python" />
        <label htmlFor="wd-your-chkbox-python">Python</label>
        <br />
        <input type="checkbox" name="your-languages" id="wd-your-chkbox-java" />
        <label htmlFor="wd-your-chkbox-java">Java</label>
        <br />
        <input type="checkbox" name="your-languages" id="wd-your-chkbox-sql" />
        <label htmlFor="wd-your-chkbox-sql">SQL</label>
        <br />

        <h5>Dropdowns</h5>
        <label htmlFor="wd-your-select-major">Major: </label>
        <br />
        <select id="wd-your-select-major" defaultValue="CSA">
          <option value="CSA">Computer Science - ALIGN</option>
          <option value="DS">Data Science</option>
          <option value="IS">Information Systems</option>
          <option value="CY">Cybersecurity</option>
        </select>
        <br />
        <label htmlFor="wd-your-select-topics">Topics to deepen this term: </label>
        <br />
        <select
          multiple
          id="wd-your-select-topics"
          defaultValue={["REACT", "MONGODB"]}
        >
          <option value="REACT">React</option>
          <option value="MONGODB">MongoDB</option>
          <option value="NODEJS">Node.js</option>
          <option value="EXPRESS">Express</option>
          <option value="TYPESCRIPT">TypeScript</option>
        </select>

        <h5>Other Field Types</h5>
        <label htmlFor="wd-your-email">Email: </label>
        <input
          type="email"
          placeholder="xu.beiy@northeastern.edu"
          id="wd-your-email"
        />
        <br />
        <label htmlFor="wd-your-grad-year">Graduation year: </label>
        <input
          type="number"
          placeholder="2027"
          min={2024}
          max={2035}
          id="wd-your-grad-year"
        />
        <br />
        <label htmlFor="wd-your-start-date">Program start date: </label>
        <input type="date" defaultValue="2025-09-01" id="wd-your-start-date" />
        <br />
        <label htmlFor="wd-your-excitement">
          How excited are you about Web Development (0-10):{" "}
        </label>
        <input
          type="range"
          defaultValue="10"
          min="0"
          max="10"
          id="wd-your-excitement"
        />

        <h5>Buttons</h5>
        <button id="wd-your-button-save" type="submit">
          Save
        </button>
        <button id="wd-your-button-cancel" type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}
