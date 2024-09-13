import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            EcomApp is your ultimate destination for online shopping. We offer a wide range of products
            including electronics, fashion, home goods, and more. Our mission is to provide an
            exceptional shopping experience with great customer service and fast delivery.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Founded in 2020, EcomApp has grown to become one of the most trusted names in online
            shopping. We are committed to innovation, sustainability, and customer satisfaction.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <img
              src="https://th.bing.com/th/id/OIP.5AHCyzk87SkLAbIDDamBagAAAA?w=474&h=368&rs=1&pid=ImgDetMain"
              alt="About Us Image"
              className="w-full rounded-lg shadow-lg"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
