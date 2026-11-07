import { useModulesStore, type CourseModule } from "../../../store/modulesStore";
import Lesson from "./Lesson";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Module({ module }: { module: CourseModule }) {
  const updateModule = useModulesStore((state) => state.updateModule);

  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
      <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 ps-2">
        <span className="me-3 min-w-0 flex-1">
          {module.editing ? (
            <input
              aria-label="Module name"
              className="w-full rounded border border-neutral-300 px-2 py-1 text-base"
              defaultValue={module.name}
              onChange={(e) =>
                updateModule({ ...module, name: e.target.value })
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  updateModule({ ...module, editing: false });
                }
              }}
            />
          ) : (
            module.name
          )}
        </span>
        <ModuleControlButtons moduleId={module._id} />
      </div>

      <ul className="wd-lessons m-0 list-none p-0">
        {module.lessons?.map((lesson) => (
          <Lesson key={lesson._id} title={lesson.name} />
        ))}
      </ul>
    </li>
  );
}