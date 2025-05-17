import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[var(--white-color)] text-[var(--gray-600)] py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--main-color-blue)] mb-4">CaseChronicles</h2>
          <p className="text-sm">
            Explore real-world case studies & enhance your practical knowledge with industry-level content.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/explore" className="hover:text-[var(--main-color-blue)]">Explore</Link></li>
            <li><Link to="/categories" className="hover:text-[var(--main-color-blue)]">Categories</Link></li>
            <li><Link to="/about" className="hover:text-[var(--main-color-blue)]">About</Link></li>
            <li><Link to="/resources" className="hover:text-[var(--main-color-blue)]">Resources</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/help-center" className="hover:text-[var(--main-color-blue)]">Help Center</Link></li>
            <li><Link to="/faq" className="hover:text-[var(--main-color-blue)]">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--main-color-blue)]">Contact Us</Link></li>
            <li><Link to="/terms" className="hover:text-[var(--main-color-blue)]">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-4">Subscribe to our Newsletter</h3>
          <p className="text-sm mb-4">Get latest updates and case study insights directly to your inbox.</p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-[var(--gray-200)] rounded focus:outline-none focus:border-[var(--main-color-blue)]" />
            <button className="cursor-pointer px-4 py-2 bg-[var(--main-color-blue)] text-[var(--white-color)] rounded hover:bg-[var(--main-color-blue)]">Subscribe</button>
          </form>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 text-xl text-[var(--gray-600)]">
            <Link to="#" className="text-[var(--main-color-blue)]"><FaInstagram /></Link>
            <Link to="#" className="text-[var(--main-color-blue)]"><FaTwitter /></Link>
            <Link to="#" className="text-[var(--main-color-blue)]"><FaLinkedin /></Link>
            <Link to="#" className="text-[var(--main-color-blue)]"><FaYoutube /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
