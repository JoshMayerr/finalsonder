export default function ProductPage({
  title,
  description,
  price,
  image1,
  image2,
}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-5 sm:gap-16 p-12 max-w-6xl mx-auto -mt-6 font-mono">
        <div className="col-span-3 flex flex-col justify-center items-center mt-8">
          <div className=" space-y-8 flex flex-col justify-center items-center">
            <img
              className="bg-gray-100  p-6 rounded-2xl"
              src={image1}
              alt="tee"
            />
            <img
              className="bg-gray-100 p-6 rounded-2xl"
              src={image2}
              alt="tee"
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col  sm:mt-48 mt-4">
          <div className="">
            <div className="">
              <h1 className="text-4xl font-extrabold">{title}</h1>
              <p className="text-sm text-gray-500 mt-4">{description}</p>
              <p className="text-sm mt-1">{price}</p>
              <button className="bg-black text-white w-full rounded-lg p-3 mt-5">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
