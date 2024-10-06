import Navbar from '../../Header-section/Navbar';
import Footer from "../../Footer-section/Footer";
import ScrollToTop from "react-scroll-to-top";

const PropertyListing = () => {
  const properties = [
    {
      title: '2BHK Apartment',
      location: 'Siwan',
      price: '$70,000',
      contact: '123-456-7890',
    },
    {
      title: '3 BHK House',
      location: 'Chennai',
      price: '$5,500',
      contact: '987-654-3210',
    },
    {
    title: '1 BHK Studio',
    location: 'Mumbai',
    price: '$35,000',
    contact: '111-222-3333',
  },
  {
    title: '4 BHK Villa',
    location: 'Pune',
    price: '$150,000',
    contact: '444-555-6666',
  },
  {
    title: '3 BHK Penthouse',
    location: 'Delhi',
    price: '$120,000',
    contact: '777-888-9999',
  },
  {
    title: '2 BHK Flat',
    location: 'Kolkata',
    price: '$55,000',
    contact: '222-333-4444',
  },
  {
    title: '1 BHK Apartment',
    location: 'Bangalore',
    price: '$40,000',
    contact: '555-666-7777',
  },
  {
    title: '5 BHK Mansion',
    location: 'Hyderabad',
    price: '$200,000',
    contact: '888-999-0000',
  },
  {
    title: 'Studio Apartment',
    location: 'Ahmedabad',
    price: '$30,000',
    contact: '333-444-5555',
  },
  {
    title: '2 BHK House',
    location: 'Goa',
    price: '$80,000',
    contact: '666-777-8888',
  },
  {
    title: '3 BHK Villa',
    location: 'Jaipur',
    price: '$95,000',
    contact: '999-000-1111',
  },
  {
    title: '4 BHK Duplex',
    location: 'Lucknow',
    price: '$110,000',
    contact: '222-111-0000',
  }
    // Add more properties here
  ];

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen flex flex-col mt-20">
        {/* Main Content */}
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Properties Available for Rent
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property, index) => (
                <div
                  key={index}
                  // Alternating colors for cards
                  className={`shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 ${
                    index % 2 === 0 ? 'bg-[#ebb4b6]' : 'bg-[#d1f2eb]'
                  }`}
                >
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800">
                      {property.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                      <strong>Location:</strong> {property.location}
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      <strong>Price:</strong> {property.price}
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      <strong>Owner Contact:</strong> {property.contact}
                    </p>

                    <button className={`mt-4 bg-teal-500 text-white px-4 py-2 rounded-full border border-gray-500 hover:bg-teal-600 ${index % 2 === 0 ? 'bg-[#d1f2eb]' : 'bg-[#ebb4b6]'}`}>
                      Contact Owner
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer />
      <ScrollToTop
        smooth
        color="darkgreen"
        className="flex justify-center hover:scale-125 duration-200 transition items-center p-1"
      />
    </>
  );
};

export default PropertyListing;
