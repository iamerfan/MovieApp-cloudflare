const Loading = ({ className, absloute }) => {
  return (
    <div
      className={`flex justify-center items-center flex-grow z-20 ${className} ${
        absloute &&
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      }`}
    >
      <div className="p-2 border-2 border-t-transparent animate-spin border-white rounded-full"></div>
    </div>
  );
};
export default Loading;
