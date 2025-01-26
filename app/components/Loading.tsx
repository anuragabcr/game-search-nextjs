export default function Loading({ text = "Loading..." }) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center space-y-2">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm text-gray-500">{text}</p>
      </div>
    </div>
  );
}
