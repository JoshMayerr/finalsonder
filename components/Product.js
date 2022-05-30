import Link from "next/link";

export default function Product({ title, description, price, image, dink }) {
  return (
    <>
      <Link href={dink}>
        <a className="flex flex-col items-center">
          <div className="bg-gray-100 w-3/4 rounded-lg p-6 shadow-sm">
            <div className="">
              <img layout="fill" src={image} alt="tshirt" />
            </div>
          </div>
          <div className="pt-6 text-left w-3/4 ">
            <h3 className="font-extrabold text-2xl sm:text-3xl">{title}</h3>
            <p className="text-gray-500 text-xs sm:text-sm pt-2 pb-2 tracking-tight">
              {description}
            </p>
            <p className="text-xs sm:text-sm">{price}</p>
          </div>
        </a>
      </Link>
    </>
  );
}
