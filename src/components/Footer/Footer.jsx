import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="mt-24">
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <img src="https://i.ibb.co/JCGV8rK/pngwing-11.png" alt="" />
                    <p>Download the app by clicking the link below :</p>
                    <img className="w-[300px]" src="https://i.ibb.co/8mZD0sb/google-play-and-apple-app-store-logos-22-1.png" alt="" />
                </aside>
                <nav>
                    <header className="footer-title">Pages</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Service</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Contact</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <header className="footer-title">Social media</header>
                    <div className="flex gap-4">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram></FaInstagram>
                        <FaLinkedin></FaLinkedin>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;