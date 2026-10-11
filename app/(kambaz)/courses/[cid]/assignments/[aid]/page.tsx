import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="w-full max-w-3xl">
      <div className="mb-4">
        <label htmlFor="wd-name" className="mb-2 block text-sm font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          defaultValue="A1 - ENV + HTML"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="wd-description"
          className="mb-2 block text-sm font-medium"
        >
          Description
        </label>
        <textarea
          id="wd-description"
          rows={10}
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link to the Kambaz application, Links to all relevant source code repositories. The Kambaz application should include a link to navigate back to the landing page."
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        />
      </div>
      <div className="mb-4 grid items-center gap-2 md:grid-cols-[160px_1fr]">
        <label
          htmlFor="wd-points"
          className="text-sm font-medium md:text-right"
        >
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          defaultValue={100}
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        />
      </div>
      <div className="mb-4 grid items-center gap-2 md:grid-cols-[160px_1fr]">
        <label htmlFor="wd-group" className="text-sm font-medium md:text-right">
          Assignment Group
        </label>
        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>
      <div className="mb-4 grid items-center gap-2 md:grid-cols-[160px_1fr]">
        <label
          htmlFor="wd-display-grade-as"
          className="text-sm font-medium md:text-right"
        >
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
        </select>
      </div>
      <div className="mb-4 grid items-start gap-2 md:grid-cols-[160px_1fr]">
        <label
          htmlFor="wd-submission-type"
          className="pt-2 text-sm font-medium md:text-right"
        >
          Submission Type
        </label>

        <div className="rounded border border-neutral-300 p-4">
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className="mb-4 w-full rounded border border-neutral-300 bg-white px-3 py-2"
          >
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
            <option value="NO_SUBMISSION">No Submission</option>
          </select>

          <h3 className="mb-3 text-sm font-semibold">Online Entry Options</h3>

          <div className="space-y-4">
            <label
              htmlFor="wd-text-entry"
              className="flex items-center gap-2 text-sm"
            >
              <input type="checkbox" name="check-entry" id="wd-text-entry" />
              Text Entry
            </label>

            <label
              htmlFor="wd-website-url"
              className="flex items-center gap-2 text-sm"
            >
              <input
                type="checkbox"
                name="check-entry"
                id="wd-website-url"
                defaultChecked
              />
              Website URL
            </label>

            <label
              htmlFor="wd-media-recordings"
              className="flex items-center gap-2 text-sm"
            >
              <input
                type="checkbox"
                name="check-entry"
                id="wd-media-recordings"
              />
              Media Recordings
            </label>

            <label
              htmlFor="wd-student-annotation"
              className="flex items-center gap-2 text-sm"
            >
              <input
                type="checkbox"
                name="check-entry"
                id="wd-student-annotation"
              />
              Student Annotation
            </label>

            <label
              htmlFor="wd-file-upload"
              className="flex items-center gap-2 text-sm"
            >
              <input type="checkbox" name="check-entry" id="wd-file-upload" />
              File Uploads
            </label>
          </div>
        </div>
      </div>
      <div className="mb-4 grid items-start gap-2 md:grid-cols-[160px_1fr]">
        <div className="pt-2 text-sm font-medium md:text-right">Assign</div>

        <div className="rounded border border-neutral-300 p-4">
          <div className="mb-4">
            <div id="wd-assign-to-label" className="mb-2 text-sm font-semibold">
              Assign to
            </div>

            <div
              id="wd-assign-to"
              aria-labelledby="wd-assign-to-label"
              className="w-full rounded border border-neutral-300 bg-white p-2"
            >
              <span className="inline-flex items-center gap-6 rounded bg-neutral-100 px-3 py-1 text-sm">
                Everyone
                <button
                  type="button"
                  aria-label="Remove Everyone"
                  className="text-lg leading-none text-neutral-500 hover:text-neutral-900"
                >
                  ×
                </button>
              </span>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="wd-due-date"
              className="mb-2 block text-sm font-semibold"
            >
              Due
            </label>
            <input
              type="datetime-local"
              id="wd-due-date"
              defaultValue="2024-05-13T23:59"
              className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label
                htmlFor="wd-available-from"
                className="mb-2 block text-sm font-semibold"
              >
                Available from
              </label>
              <input
                type="datetime-local"
                id="wd-available-from"
                defaultValue="2024-05-06T00:00"
                className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="wd-available-until"
                className="mb-2 block text-sm font-semibold"
              >
                Until
              </label>
              <input
                type="datetime-local"
                id="wd-available-until"
                defaultValue="2024-05-20T23:59"
                className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="wd-ai-editor-notes"
          className="mb-2 block text-sm font-medium"
        >
          Sample notes
        </label>
        <textarea
          id="wd-ai-editor-notes"
          rows={4}
          placeholder="Sample notes for this assignment."
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        />
      </div>
      <hr className="my-6 border-neutral-200" />

      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-neutral-900 no-underline hover:bg-neutral-200"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm text-white no-underline hover:bg-red-700"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
