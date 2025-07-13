import React from 'react';
import { Mail, Phone, MapPin, PhoneCall, Facebook, Instagram} from 'lucide-react';

const ContactUsPage = () => {
  return (
    <div className="bg-amber-50 text-orange-500 font-roboto">
      
<img src="/Images/10.jpg" alt="" className='w-full h-[60vh] object-cover'/>
      {/* Contact Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-orange-500">
            Reach Out to Our Dedicated Support Team
          </h2>
          <p className="text-md font-semibold text-gray-700 mb-2">
            Our team is ready to help. Your satisfaction is our priority
          </p>
          <p className="text-gray-600 mb-10">
            Got a question, need advice, or looking for help? Our knowledgeable team is here to assist you every step of the way. We're just a message or call away, ready to provide the guidance you need.
          </p>

          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <Mail className="text-black" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Email Address</p>
                <p className="font-medium text-black">rishika.verma242301@gmail.com , mishrashikha5791@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 border-b pb-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <Phone className="text-black" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone Number</p>
                <p className="font-medium text-black">+91 3456567878</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <MapPin className="text-black" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Our Location</p>
                <p className="font-medium text-black">Varanasi, UP, 221103</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#f5f8fb] text-gray-800 pt-12 md:text-center">
        <div className="max-w-7xl  px-6 grid grid-cols-2 md:grid-cols-3 gap-20 text-center md:text-center">
          {/* Our Services */}
          
          {/* Additional Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Additional Services</h3>
            <ul className="space-y-2">
              <li>Our Hotels</li>
              <li>Outstation Cabs</li>
              <li>Top Excursions Activities</li>
              
              <li>Stay</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Headings</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>JourneyToKashi</li>
              <li>Culture</li>
              <li>Excursions</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>Cancellation Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="bg-white mt-10 py-6 px-6 rounded-xl shadow-md max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-around gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/rishi.png" alt="Logo" className="h-12 w-14" />
            <span className="font-semibold text-orange-500 text-lg">Varanasi Tourism</span>
          </div>

          {/* Customer Support */}
          <div className="flex items-center gap-3">
            <div className="bg-orange-400 p-3 rounded-full text-white">
              <PhoneCall size={20} />
            </div>
            <div>
              <p className="font-semibold">Customer Support</p>
              <p>+91 XXX3456XXXXX</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="bg-orange-400 p-3 rounded-full text-white">
              <Mail size={20} />
            </div>
            <div>
              <p className="font-semibold">Drop Us an Email</p>
              <p>rishika.verma242301@gmail.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <div className="bg-orange-400 p-3 rounded-full text-white">
              <MapPin size={20} />
            </div>
            <div>
              <p className="font-semibold">Reach Us at</p>
              <p>Varanasi, UP, 221103</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="bg-white pt-6 border-t">
          {/* Cityscape Illustration */}
          <div className="w-full flex justify-center mb-6">
            <img
              src="/rishi.png" // ✅ Replace with actual image
              alt="Tourist Cityscape"
              className="max-h-32 object-contain"
            />
          </div>

          {/* Footer Bottom Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-4 text-sm text-gray-600 max-w-7xl mx-auto">
      
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUsPage;
