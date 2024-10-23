import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-[1800px] mx-auto px-4">
        <div className="grid grid-cols-4 gap-8 mb-16">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">CUSTOMER CARE</h3>
            <ul className="space-y-3">
              {['Contact Us', 'Shipping Information', 'Returns & Exchanges', 'Order Tracking', 'Payment Methods'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">ABOUT</h3>
            <ul className="space-y-3">
              {['Our Story', 'Careers', 'Press', 'Sustainability', 'Affiliates'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">CONNECT</h3>
            <ul className="space-y-3">
              {['Instagram', 'Twitter', 'Facebook', 'Pinterest', 'Newsletter'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">LOCATION</h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                Montreal, Canada
              </p>
              <p className="text-sm text-gray-600">
                Currency: USD
              </p>
              <p className="text-sm text-gray-600">
                Language: English
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-gray-100">
          <p className="text-xs text-gray-500">© {currentYear} SSENCE</p>
          <div className="flex gap-6">
            {['Terms', 'Privacy', 'Accessibility', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-gray-500 hover:text-black transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;