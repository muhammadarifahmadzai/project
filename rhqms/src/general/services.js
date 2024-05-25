import React from 'react';

const services = [
  {
    title: 'Patient Services',
    description: 'The main services provided by the Patient Services are receiving complaints from patients and clients and communicating with concern departments to solve the incidence as well as communicating with admitting wards in regard to any issue related to the admitted patients.',
    imageUrl: 'https://images.pexels.com/photos/4386470/pexels-photo-4386470.jpeg?auto=compress&cs=tinysrgb&w=600' // Replace with your image URL
  },
  {
    title: 'General Services',
    description: 'General Services provides following services which are supervising the cleaning, laundry, and gardening services provided by the individual contract companies, supervising the food service rendered to the patients and ensure its safety and receiving requests and determining needed equipment, tools, furniture, and offices equipment for hospital.',
    imageUrl: 'https://images.pexels.com/photos/5697255/pexels-photo-5697255.jpeg?auto=compress&cs=tinysrgb&w=600' // Replace with your image URL
  },
  {
    title: 'Medical Stores',
    description: 'Medical Stores storage the medication and medical supplies as per the policy, preparing unavailable medication list for prompt purchase, determining the needed medication and medical supply for the hospital, and proposing and studying the pharmacological work at the pharmacies and medical stores.',
    imageUrl: 'https://via.placeholder.com/300?text=Medical+Stores' // Replace with your image URL
  },
  {
    title: 'Financial Affairs',
    description: 'The Financial Affairs department responsible for preparing Local Purchase Orders (LPO) for the purchased items, provide services after checking its legally, reviewing all the financial documents before paying and preparing projects contracts and execution.',
    imageUrl: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600' // Replace with your image URL
  },
  {
    title: 'Health Information',
    description: 'The main services provided by the Health Information are receiving medical reports requests and handling to concern parties (personal, government, private), typing medical reports, coordinating and following the medical board issues, receiving and replying on the referrals sent by e-referral or fax from other health institutions. Also, it is responsible for patients appointments, receiving and distributing patients at the OPD and collecting treatment fees.',
    imageUrl: 'https://via.placeholder.com/300?text=Health+Information' // Replace with your image URL
  },
  {
    title: 'Public Relation & Media',
    description: 'The Public Relation and Media department is responsible for welcoming hospital\'s guests, supervising on conferences and workshops, welcoming and preparing visit program and facilitate issues for the visitors and experts. In regard to the media, it is responsible for following and replying on all the issues related to the hospital published in the multimedia, organizing all the interviews for the hospital\'s authorities and reviewing all the materials before publishing and covering all the hospital activities and publishing them in the media.',
    imageUrl: 'https://via.placeholder.com/300?text=Public+Relation+%26+Media' // Replace with your image URL
  }
];

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div 
                className="bg-cover bg-center h-48" 
                style={{ backgroundImage: `url(${service.imageUrl})` }}
              ></div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
