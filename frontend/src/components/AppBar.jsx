export const Appbar = () => {
  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">PayTM App</div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">Hello</div>
        <div className="rounded-md h-12 w-24 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location = "/signin";
              }}
              className="flex flex-col justify-center h-full text-xl"
            >logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
