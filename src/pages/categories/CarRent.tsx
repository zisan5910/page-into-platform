
import React, { useState } from 'react';
import TopNavigation from '../../components/TopNavigation';
import BottomNavigation from '../../components/BottomNavigation';
import SearchAndFilter from '../../components/SearchAndFilter';
import { Car, Phone, MapPin, DollarSign } from 'lucide-react';

const CarRent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const cars = [
    { id: 1, owner: 'মোহাম্মদ আলী', carType: 'প্রাইভেট কার', model: 'টয়োটা প্রিমিও', location: 'ধুনট সদর', phone: '01711000041', rate: '১৫০০ টাকা/দিন', availability: 'উপলব্ধ' },
    { id: 2, owner: 'রহিম উদ্দিন', carType: 'মাইক্রোবাস', model: 'হিয়াস এইচ১', location: 'ধুনট বাজার', phone: '01711000042', rate: '৪০০০ টাকা/দিন', availability: 'উপলব্ধ' },
    { id: 3, owner: 'করিম মিয়া', carType: 'অটো রিক্সা', model: 'বাজাজ অটো', location: 'ধুনট পৌরসভা', phone: '01711000043', rate: '৮০০ টাকা/দিন', availability: 'বুকড' },
    { id: 4, owner: 'ফারুক আহমেদ', carType: 'জিপ', model: 'মাহিন্দ্রা বোলেরো', location: 'ধুনট রেলস্টেশন', phone: '01711000044', rate: '২৫০০ টাকা/দিন', availability: 'উপলব্ধ' },
    { id: 5, owner: 'নুরুল ইসলাম', carType: 'সেডান', model: 'হোন্ডা সিটি', location: 'ধুনট সদর', phone: '01711000045', rate: '২০০০ টাকা/দিন', availability: 'উপলব্ধ' },
    { id: 6, owner: 'জামাল হোসেন', carType: 'পিকআপ', model: 'টাটা এস', location: 'ধুনট বাজার', phone: '01711000046', rate: '১৮০০ টাকা/দিন', availability: 'বুকড' },
    { id: 7, owner: 'সালাম উল্লাহ', carType: 'ভ্যান', model: 'সুজুকি ভ্যান', location: 'ধুনট পৌরসভা', phone: '01711000047', rate: '১২০০ টাকা/দিন', availability: 'উপলব্ধ' },
    { id: 8, owner: 'ইকবাল হুসাইন', carType: 'এসইউভি', model: 'টয়োটা রাভ৪', location: 'ধুনট সদর', phone: '01711000048', rate: '৩৫০০ টাকা/দিন', availability: 'উপলব্ধ' },
    { id: 9, owner: 'হাসান আলী', carType: 'হ্যাচব্যাক', model: 'মারুতি সুইফট', location: 'ধুনট রেলস্টেশন', phone: '01711000049', rate: '১৩০০ টাকা/দিন', availability: 'উপলব্ধ' },
    { id: 10, owner: 'তানভীর রহমান', carType: 'লাক্সারি', model: 'টয়োটা ক্যামরি', location: 'ধুনট বাজার', phone: '01711000050', rate: '৫০০০ টাকা/দিন', availability: 'বুকড' }
  ];

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.carType.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.model.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-4">
          <div className="flex items-center">
            <Car className="mr-2" size={20} />
            <h1 className="text-lg font-bold">গাড়ি ভাড়া</h1>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder="গাড়ি বা মালিক খুঁজুন..."
        />

        <div className="px-4 py-2">
          <div className="grid gap-3">
            {filteredCars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{car.model}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    car.availability === 'উপলব্ধ' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {car.availability}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Car size={14} className="mr-2 text-gray-400" />
                    <span>{car.carType} - {car.owner}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-gray-400" />
                    <span>{car.location}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={14} className="mr-2 text-gray-400" />
                    <span className="font-semibold text-green-600">{car.rate}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={14} className="mr-2 text-gray-400" />
                    <a href={`tel:${car.phone}`} className="text-blue-600">{car.phone}</a>
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

export default CarRent;
