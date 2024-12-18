import Image from "next/image";

export default function homePage() {
  return (
    <>

      <div className="relative w-full h-[600px]">
        <img
          src="logoimage.jpg"
          className="w-full h-full " // Adjust width and height here
          alt="Hetal's Home Kitchen Logo"
          
        />
        <div className="absolute inset-0 flex items-end justify-center">
          <p className="text-xl font-semibold text-center  text-gray-700">
            Food are freshly from high-quality raw vegetable and grocery products. Please place your order as soon as possible.
          </p>
        </div>
      </div>

      <div className="join mt-8 ml-24 space-x-4">
        <div className="flex flex-col group hover:bg-gray-200 border p-4 rounded-lg transition-all">
          <img
            src="https://media.istockphoto.com/id/1458973879/photo/rajasthani-traditional-cuisine-dal-baati.jpg?s=612x612&w=0&k=20&c=bBspCwj57CtdD0m66dZpNpNU_Dou3o7l1PscMUsijQc="
            alt="Image 1"
            className="border border-gray-200 w-44 h-44 object-cover group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 rounded-lg"
          />
          <h3 className="mt-2 text-2xl">Dalbati</h3>
          <h3 className="text-xl font-medium text-gray-600">£6</h3>
        </div>
        
        <div className="flex flex-col group hover:bg-gray-200 border p-4 rounded-lg transition-all">
          <img
            src="https://media.istockphoto.com/id/1327433011/photo/pav-bhaji-indian-street-food-bharuch-gujarat-india.jpg?s=612x612&w=0&k=20&c=R_Nl3Ig6qTNMidQkjXH0It8MINDJY-C5GMiIv-HxO04="
            alt="Image 2"
            className="border border-gray-200 w-44 h-44 object-cover group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 rounded-lg"
          />
          <h3 className="mt-2 text-2xl">Pavbhaji</h3>
          <h3 className="text-xl font-medium text-gray-600">£5</h3>
        </div>
      </div>
    </>
  );
}
