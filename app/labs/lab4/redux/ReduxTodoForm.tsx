type ReduxTodoFormProps = {
    title: string;
    onTitleChange: (title: string) => void;
    isEditing: boolean;
    onSave: () => void;
  };

  export default function ReduxTodoForm({
    title,
    onTitleChange,
    isEditing,
    onSave,
  }: ReduxTodoFormProps) {
    return (
      <div className="mb-2 flex flex-wrap gap-2">
        <input
          id="wd-redux-todo-title"
          aria-label="Todo title"
          className="rounded border border-neutral-300 px-2 py-1"
          value={title}
          onChange={(event) => onTitleChange(event.target.value)}
        />
        <button
          type="button"
          id="wd-redux-add-todo"
          className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
          onClick={onSave}
        >
          {isEditing ? "Update" : "Add"}
        </button>
      </div>
    );
  }