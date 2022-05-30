export default function Tee() {
  return (
    <>
      <div className="flex items-center max-w-6xl mx-auto -mt-28 min-h-screen font-mono">
        <div className="bg-slate-100 rounded-sm w-1/2 p-8 flex flex-col justify-center items-center">
          <img className="w-5/6" src="/teefront.png" alt="tee" />
          <span>slider</span>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="w-1/2 ">
            <div className="">
              <h1 className="text-4xl">OF-COURSE Tee</h1>
              <p className="text-sm text-gray-500 mt-4">
                Made to look like a 4 year old made it but they are the next
                Picasso. One size fits all.
              </p>
              <p className="text-sm mt-1">$110.00</p>
              <button className="bg-black text-white w-full rounded-lg p-3 mt-4">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
