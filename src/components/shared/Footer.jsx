import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import footerBg from "@/assets/footer-bg.jpg"
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${footerBg.src})`,
      }}
      className="bg-cover bg-center bg-no-repeat text-white/70"
    >
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid gap-6 md:gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/">
              <Image src={logo} alt="logo" width={300} height={100} />
            </Link>

            <p className="mt-4 text-sm leading-relaxed">
              Connecting students with expert tutors for personalized learning
              experiences and academic success.
            </p>
          </div>

          {/* Learning Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Learning Services</h3>

            <ul className="space-y-3 text-sm ">
              <li>
                <a href="#" className="hover:text-white transition">
                  Find a Tutor
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Online Classes
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Home Tutoring
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Exam Preparation
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Skill Development
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>

            <ul className="space-y-3 text-sm ">
              <li>📍 Dhaka, Bangladesh</li>
              <li>📞 +880 1234-567890</li>
              <li>✉️ support@mediqueue.com</li>
              <li>🕒 Sat - Thu: 9AM - 9PM</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 bg-white text-black transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 bg-white text-black transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 bg-white text-black transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 bg-white text-black transition-all duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-400 mt-12 pt-6 text-center text-sm">
          © {new Date().getFullYear()} MediQueue. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
