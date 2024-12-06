import { db } from "@/utils/dbConnection";
import Image from "next/image";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";

export default async function menuDetailsPage({ params }) {
    const food_items = (await db.query(`SELECT * FROM food_items WHERE route_name=$1`, [params.menudetails])).rows;
    console.log(food_items);
    return (
        <>
            <div className="p-8 space-y-8">
                {food_items.map((items) => (
                    <div
                        key={items.food_id}
                        className="flex flex-col items-center"
                    >
                        <div className="flex flex-row">
                            <div className="">
                                <Image
                                    className="rounded-lg hover:scale-105 duration-300"
                                    src={items.img_src}
                                    alt={items.prod_name}
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="ml-6">
                                <h1 className="text-5xl font-bold">{items.prod_name}</h1>
                                <h2 className="text-4xl font-bold">£{items.unit_price}</h2>
                                <div className="flex flex-col">

                                    <h1 className="m-2">QUNTITY</h1>

                                    <input type="number" className="input input-bordered w-20 text-center" min={1} />

                                    <button type="sumbit" className="btn btn-wide bg-black text-white">BUY</button>

                                    <button type="sumbit" className="btn btn-wide "><CiShoppingCart /> Add to Cart</button>
                                </div>

                                <div className="flex flex-row space-x-2 mt-4">
                                    <a href="https://www.facebook.com/XdW2Q4yhuQxkkc5x " className="text-2xl">
                                        <ImFacebook2 />
                                    </a>
                                    <a href="https://www.instagram.com/hetalshomekitchen/" className="text-2xl">
                                        <BsInstagram />
                                    </a>
                                    <a href="https://api.whatsapp.com/send/?phone=%2B447928042962&text&type=phone_number&app_absent=0" className="text-2xl">
                                        <RiWhatsappFill />
                                    </a>
                                </div>
                                <br />
                                <br />


                                <h2 className="text-gray-700 text-sm leading-relaxed text-wrap">
                                    {items.description}
                                </h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
