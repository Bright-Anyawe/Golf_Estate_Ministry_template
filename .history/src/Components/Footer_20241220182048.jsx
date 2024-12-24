import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 p-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {/* Church Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Golf Estate Assembly(C.O.P)</h3>
          <p>
            Dedicated to spreading the Word of God and transforming lives
            through worship, teaching, and outreach.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/ministries" className="hover:underline">
                Ministries
              </a>
            </li>
            <li>
              <a href="/events" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <p>
            <strong>Address:</strong> Bethlemhem,, Citytown, Country
          </p>
          <p>
            <strong>Phone:</strong> +1 123-456-7890
          </p>
          <p>
            <strong>Email:</strong> info@churchofpentecost.com
          </p>
          <p>
            <strong>Office Hours:</strong> Mon - Fri, 9 AM - 5 PM
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 px-8">
        <div className="flex justify-between items-center ">
          <div>
            <p>
              &copy; {new Date().getFullYear()} Church of Pentecost. All rights
              reserved.
            </p>
          </div>
          <div className="flex space-x-6 text-gray-500">
            <a
              href="https://web.facebook.com/people/COP-Golf-Estate-Assembly/61561098698326/?_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300 transform hover:scale-110"
            >
              <FacebookIcon fontSize="large" />
            </a>
            <a
              href="https://twitter.com/churchofpentecost"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300 transform hover:scale-110"
            >
              <TwitterIcon fontSize="large" />
            </a>
            <a
              href="https://instagram.com/churchofpentecost"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition duration-300 transform hover:scale-110"
            >
              <InstagramIcon fontSize="large" />
            </a>
            <a
              href="https://youtube.com/churchofpentecost"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-300 transform hover:scale-110"
            >
              <YouTubeIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
