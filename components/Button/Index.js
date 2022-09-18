export function Button({ title, type, className }) {
  return (
    <button
      className={`${
        type === "primary"
          ? "bg-primary text-white hover:bg-secondary hover:text-white"
          : "bg-tetiary text-dark hover:bg-primary hover:text-white"
      }  py-4 px-6 rounded-full transition-all ${className}`}
    >
      {title}
    </button>
  );
}
