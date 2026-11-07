import Link from "next/link";
import { FaFileAlt, FaTrashAlt } from "react-icons/fa";
import { useAssignmentsStore } from "../../../store/assignmentsStore";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
  canDelete,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
  canDelete: boolean;
}) {
  const deleteAssignment = useAssignmentsStore(
    (state) => state.deleteAssignment,
  );

  function confirmDelete() {
    const confirmed = window.confirm(`Delete "${title}"?`);
    if (confirmed) {
      deleteAssignment(aid);
    }
  }

  return (
    <li className="wd-assignment-list-item mb-3 flex gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
      <FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" />
      <div className="min-w-0 flex-1">
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link font-semibold text-neutral-900 no-underline"
        >
          {title}
        </Link>
        <div className="mt-1 text-sm text-neutral-600">{details}</div>
      </div>
      {canDelete && <button
        type="button"
        aria-label={`Delete ${title}`}
        title="Delete assignment"
        className="inline-flex self-center cursor-pointer border-0 bg-transparent p-1 text-xl text-red-600 hover:text-red-700"
        onClick={confirmDelete}
      >
        <FaTrashAlt aria-hidden="true" />
      </button>}
    </li>
  );
}
