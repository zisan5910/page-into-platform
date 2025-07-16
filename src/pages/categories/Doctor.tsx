import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Stethoscope, Phone, MapPin, Clock } from 'lucide-react';

const Doctor = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const doctors = [
    { id: 1, name: 'ডাঃ মোহাম্মদ আলী', specialization: 'কার্ডিওলজিস্ট', hospital: 'ধুনট হাসপাতাল', phone: '01711000001', chamber: 'সকাল ৯টা - দুপুর ১টা', location: 'ধুনট সদর' },
    { id: 2, name: 'ডাঃ ফাতেমা খানম', specialization: 'গাইনোকোলজিস্ট', hospital: 'সরকারি হাসপাতাল', phone: '01711000002', chamber: 'বিকাল ৪টা - সন্ধ্যা ৮টা', location: 'ধুনট সদর' },
    { id: 3, name: 'ডাঃ আব্দুল করিম', specialization: 'শিশু বিশেষজ্ঞ', hospital: 'আধুনিক চিকিৎসালয়', phone: '01711000003', chamber: 'সকাল ৮টা - দুপুর ১২টা', location: 'ধুনট বাজার' },
    { id: 4, name: 'ডাঃ রহিমা বেগম', specialization: 'চর্ম রোগ বিশেষজ্ঞ', hospital: 'স্বাস্থ্য কেন্দ্র', phone: '01711000004', chamber: 'বিকাল ৩টা - সন্ধ্যা ৭টা', location: 'ধুনট পৌরসভা' },
    { id: 5, name: 'ডাঃ নুরুল ইসলাম', specialization: 'অর্থোপেডিক', hospital: 'ইসলামী হাসপাতাল', phone: '01711000005', chamber: 'সকাল ১০টা - দুপুর ২টা', location: 'ধুনট রেলস্টেশন' },
    { id: 6, name: 'ডাঃ সালমা আক্তার', specialization: 'চোখের ডাক্তার', hospital: 'দৃষ্টি চিকিৎসালয়', phone: '01711000006', chamber: 'বিকাল ৪টা - রাত ৮টা', location: 'ধুনট সদর' },
    { id: 7, name: 'ডাঃ মোস্তফা কামাল', specialization: 'মেডিসিন বিশেষজ্ঞ', hospital: 'জেনারেল হাসপাতাল', phone: '01711000007', chamber: 'সকাল ৯টা - দুপুর ১টা', location: 'ধুনট বাজার' },
    { id: 8, name: 'ডাঃ রোকেয়া খাতুন', specialization: 'দাঁতের ডাক্তার', hospital: 'ডেন্টাল কেয়ার', phone: '01711000008', chamber: 'বিকাল ৫টা - রাত ৯টা', location: 'ধুনট পৌরসভা' },
    { id: 9, name: 'ডাঃ ইব্রাহিম খলিল', specialization: 'নিউরোলজিস্ট', hospital: 'নিউরো সেন্টার', phone: '01711000009', chamber: 'সকাল ৮টা - দুপুর ১২টা', location: 'ধুনট সদর' },
    { id: 10, name: 'ডাঃ শামসুন নাহার', specialization: 'হৃদরোগ বিশেষজ্ঞ', hospital: 'হার্ট কেয়ার', phone: '01711000010', chamber: 'বিকাল ৪টা - সন্ধ্যা ৮টা', location: 'ধুনট বাজার' }
  ];

  const specializationOptions = [
    { value: 'কার্ডিওলজিস্ট', label: 'কার্ডিওলজিস্ট' },
    { value: 'গাইনোকোলজিস্ট', label: 'গাইনোকোলজিস্ট' },
    { value: 'শিশু বিশেষজ্ঞ', label: 'শিশু বিশেষজ্ঞ' },
    { value: 'চর্ম রোগ বিশেষজ্ঞ', label: 'চর্ম রোগ বিশেষজ্ঞ' },
    { value: 'অর্থোপেডিক', label: 'অর্থোপেডিক' },
    { value: 'চোখের ডাক্তার', label: 'চোখের ডাক্তার' },
    { value: 'মেডিসিন বিশেষজ্ঞ', label: 'মেডিসিন বিশেষজ্ঞ' },
    { value: 'দাঁতের ডাক্তার', label: 'দাঁতের ডাক্তার' }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || doctor.specialization === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Stethoscope className="mr-2" size={20} />
            <h1 className="text-lg font-bold">ডাক্তার</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="ডাক্তার বা হাসপাতাল খুঁজুন..."
          filterOptions={specializationOptions}
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{doctor.name}</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {doctor.specialization}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{doctor.hospital}, {doctor.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2 text-gray-400" />
                    <span>চেম্বার: {doctor.chamber}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={14} className="mr-2 text-gray-400" />
                    <a href={`tel:${doctor.phone}`} className="text-blue-600">{doctor.phone}</a>
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

export default Doctor;
