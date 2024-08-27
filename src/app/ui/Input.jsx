export default function Input({
  iconUrl,
  label,
  type,
  id,
  placeholder,
  textarea,
}) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center gap-2">
        {iconUrl}
        <label htmlFor={id} className="text-white cursor-pointer">
          {label}
        </label>
      </div>
      {textarea ? (
        <textarea
          className="w-full h-[100px] bg-transparent outline-none border-b-2 border-dashed border-stone-300 px-1 py-2 text-stone-300"
          placeholder={placeholder}
          id={id}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          className="bg-transparent outline-none border-b-2 border-dashed border-stone-300 px-1 py-2 text-stone-300"
        />
      )}
    </div>
  );
}
