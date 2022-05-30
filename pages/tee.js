import ProductPage from "../components/ProductPage";

export default function Tee() {
  return (
    <>
      <ProductPage
        title="OF-COURSE Tee"
        description="Made to look like a 4 year old made it, but its Picasso the
                    4 year old. One size fits all."
        price="$39.00"
        image1="/teefront.png"
        image2="/teeback.png"
      />
    </>
    // <>
    //   <div className="flex items-center max-w-6xl mx-auto -mt-28 min-h-screen font-mono">
    //     <div className="bg-gray-100 rounded-2xl w-1/2 p-8 flex flex-col justify-center items-center">
    //       <img className="sm:w-2/3 xl:w-5/6" src="/teefront.png" alt="tee" />
    //       <div className="pt-6">Slider</div>
    //     </div>
    //     <div className="w-1/2 flex flex-col items-center justify-center">
    //       <div className="w-3/4 ">
    //         <div className="">
    //           <h1 className="text-4xl font-extrabold">OF-COURSE Tee</h1>
    //           <p className="text-sm text-gray-500 mt-4">
    //             Made to look like a 4 year old made it, but its Picasso the 4
    //             year old. One size fits all.
    //           </p>
    //           <p className="text-sm mt-1">$110.00</p>
    //           <button className="bg-black text-white w-full rounded-lg p-3 mt-5">
    //             Connect Wallet
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
