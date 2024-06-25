import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="pt-24 text-xl">
      <div className="px-8 text-white font-roboto flex justify-around max-md:flex-col md:items-center gap-y-16 mb-8">
        <div className="max-md:w-full flex items-center flex-col">
          <img src={logo} className="w-44 mb-6" alt="Adventure Vault's Logo" />
          <h2 className="text-green-600 text-4xl mb-2">Adventure Vault</h2>
          <p className="w-[250px] font-poppins text-gray-500 text-xs">
            We seek Adventure. Explore the beauty of Nature with Us !
          </p>
        </div>

        <div>
          <p className="mb-4 text-lg text-gray-400">Products</p>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="">Camp Vault</a>
            </li>
            <li>
              <a href="">Activities</a>
            </li>
            <li>
              <a href="">Vehicles</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-lg text-gray-400">General</p>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="">Blogs</a>
            </li>
            <li>
              <a href="">Activities</a>
            </li>
            <li>
              <a href="">Vehicles</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-lg text-gray-400">Socials</p>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">YouTube</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Faceboo</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-gray-500 text-center mt-16 mb-8 text-sm">
        &copy;2024 Adventure Vault. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
