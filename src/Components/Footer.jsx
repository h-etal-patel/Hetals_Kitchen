import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";


export default function FooterPage() {
    return (
        <>
            <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
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
                </nav>
            </footer>
          
        </>
    );
}