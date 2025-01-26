export default function ErrorHandling({ message = "Something went wrong." }) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-red-500 text-center font-medium">{message}</p>
      </div>
    </div>
  );
}
