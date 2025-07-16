
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Hospital as HospitalIcon, Phone, MapPin, Clock } from 'lucide-react';

const Hospital = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const hospitals = [
    { id: 1, name: 'ধুনট সরকারি হাসপাতাল', type: 'সরকারি', address: 'ধুনট সদর, বগুড়া', phone: '01711000011', services: 'জরুরি সেবা, অপারেশন, প্রসব সেবা', hours: '২৪ ঘন্টা' },
    { id: 2, name: 'আধুনিক হাসপাতাল', type: 'বেসরকারি', address: 'ধুনট বাজার, বগুড়া', phone: '01711000012', services: 'সাধারণ চিকিৎসা, ল্যাব টেস্ট', hours: 'সকাল ৮টা - রাত ১০টা' },
    { id: 3, name: 'ইসলামী হাসপাতাল', type: 'বেসরকারি', address: 'ধুনট পৌরসভা, বগুড়া', phone: '01711000013', services: 'কার্ডিওলজি, নিউরোলজি', hours: 'সকাল ৯টা - রাত ৯টা' },
    { id: 4, name: 'মা ও শিশু হাসপাতাল', type: 'বিশেষায়িত', address: 'ধুনট রেলস্টেশন, বগুড়া', phone: '01711000014', services: 'মাতৃত্বকালীন সেবা, শিশু চিকিৎসা', hours: '২৪ ঘন্টা' },
    { id: 5, name: 'হার্ট কেয়ার সেন্টার', type: 'বিশেষায়িত', address: 'ধুনট সদর, বগুড়া', phone: '01711000015', services: 'হৃদরোগ চিকিৎসা, ইসিজি', hours: 'সকাল ৮টা - সন্ধ্যা ৮টা' },
    { id: 6, name: 'দৃষ্টি চিকিৎসালয়', type: 'বিশেষায়িত', address: 'ধুনট বাজার, বগুড়া', phone: '01711000016', services: 'চোখের চিকিৎসা, অপারেশন', hours: 'সকাল ৯টা - সন্ধ্যা ৭টা' },
    { id: 7, name: 'জেনারেল হাসপাতাল', type: 'বেসরকারি', address: 'ধুনট পৌরসভা, বগুড়া', phone: '01711000017', services: 'সাধারণ চিকিৎসা, এক্স-রে', hours: 'সকাল ৭টা - রাত ১১টা' },
    { id: 8, name: 'ডেন্টাল কেয়ার', type: 'বিশেষায়িত', address: 'ধুনট সদর, বগুড়া', phone: '01711000018', services: 'দাঁতের চিকিৎসা, অপারেশন', hours: 'সকাল ৯টা - সন্ধ্যা ৮টা' },
    { id: 9, name: 'নিউরো সেন্টার', type: 'বিশেষায়িত', address: 'ধুনট রেলস্টেশন, বগুড়া', phone: '01711000019', services: 'মস্তিষ্ক ও স্নায়ু চিকিৎসা', hours: 'সকাল ৮টা - সন্ধ্যা ৬টা' },
    { id: 10, name: 'স্বাস্থ্য কেন্দ্র', type: 'সরকারি', address: 'ধুনট বাজার, বগুড়া', phone: '01711000020', services: 'প্রাথমিক চিকিৎসা, টিকাদান', hours: 'সকাল ৮টা - বিকাল ৪টা' }
  ];

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hospital.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-4">
          <div className="flex items-center">
            <HospitalIcon className="mr-2" size={20} />
            <h1 className="text-lg font-bold">হাসপাতাল</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="হাসপাতাল খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredHospitals.map((hospital) => (
              <div key={hospital.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{hospital.name}</h3>
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                    {hospital.type}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{hospital.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>সময়: {hospital.hours}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={14} className="mr-2 text-gray-400" />
                    <a href={`tel:${hospital.phone}`} className="text-blue-600">{hospital.phone}</a>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    <strong>সেবাসমূহ:</strong> {hospital.services}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Hospital;
