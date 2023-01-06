export default function ErrorMessage() {
  return (
    <div className="flex justify-center items-center h-full" role="status">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-900 ">
          Something Went Wrong
        </h1>

        <h5 className="text-lg font-semibold text-gray-500 ">
          Please Try Again
        </h5>
      </div>
    </div>
  );
}
