
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import TopNavigation from '../components/TopNavigation';
import BottomNavigation from '../components/BottomNavigation';
import SearchAndFilter from '../components/SearchAndFilter';
import { Phone, MapPin, Star } from 'lucide-react';

const CategoryDetails = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Category data with complete information
  const categoryData: Record<string, any> = {
    'doctor': {
      title: 'ডাক্তার',
      icon: '👨‍⚕️',
      filterOptions: [
        { value: 'all', label: 'সব' },
        { value: 'general', label: 'সাধারণ চিকিৎসক' },
        { value: 'pediatric', label: 'শিশু বিশেষজ্ঞ' },
        { value: 'cardiology', label: 'হৃদরোগ বিশেষজ্ঞ' },
        { value: 'orthopedic', label: 'হাড় বিশেষজ্ঞ' },
        { value: 'gynecology', label: 'গাইনি বিশেষজ্ঞ' },
      ],
      data: [
        {
          id: 1,
          name: 'ডা. মোহাম্মদ আলী',
          specialty: 'সাধারণ চিকিৎসক',
          location: 'ধুনট সদর হাসপাতাল',
          phone: '০১৭১১-১২৩৪৫৬',
          category: 'general',
          image: '👨‍⚕️',
          experience: '১৫ বছর',
          chamber: 'সকাল ৯টা - দুপুর ১টা'
        },
        {
          id: 2,
          name: 'ডা. ফাতেমা খাতুন',
          specialty: 'শিশু বিশেষজ্ঞ',
          location: 'ধুনট মেডিকেল কলেজ',
          phone: '০১৭১১-৭৮৯০১২',
          category: 'pediatric',
          image: '👩‍⚕️',
          experience: '১২ বছর',
          chamber: 'বিকাল ৪টা - রাত ৮টা'
        },
        {
          id: 3,
          name: 'ডা. আব্দুল করিম',
          specialty: 'হৃদরোগ বিশেষজ্ঞ',
          location: 'ধুনট হার্ট হাসপাতাল',
          phone: '০১৭১১-৩৪৫৬৭৮',
          category: 'cardiology',
          image: '👨‍⚕️',
          experience: '২০ বছর',
          chamber: 'সকাল ১০টা - দুপুর ২টা'
        },
        {
          id: 4,
          name: 'ডা. রাশিদা বেগম',
          specialty: 'গাইনি বিশেষজ্ঞ',
          location: 'ধুনট উইমেন হাসপাতাল',
          phone: '০১৭১১-৯০১২৩৪',
          category: 'gynecology',
          image: '👩‍⚕️',
          experience: '১৮ বছর',
          chamber: 'বিকাল ৩টা - সন্ধ্যা ৭টা'
        },
        {
          id: 5,
          name: 'ডা. নুরুল ইসলাম',
          specialty: 'হাড় বিশেষজ্ঞ',
          location: 'ধুনট অর্থো হাসপাতাল',
          phone: '০১৭১১-৫৬৭৮৯০',
          category: 'orthopedic',
          image: '👨‍⚕️',
          experience: '১৪ বছর',
          chamber: 'সকাল ৮টা - দুপুর ১২টা'
        },
        {
          id: 6,
          name: 'ডা. সালমা আক্তার',
          specialty: 'সাধারণ চিকিৎসক',
          location: 'ধুনট কমিউনিটি হাসপাতাল',
          phone: '০১৭১১-৬৭৮৯০১',
          category: 'general',
          image: '👩‍⚕️',
          experience: '১০ বছর',
          chamber: 'বিকাল ৫টা - রাত ৯টা'
        },
        {
          id: 7,
          name: 'ডা. রফিক উদ্দিন',
          specialty: 'শিশু বিশেষজ্ঞ',
          location: 'ধুনট চাইল্ড কেয়ার',
          phone: '০১৭১১-৭৮৯০১২',
          category: 'pediatric',
          image: '👨‍⚕️',
          experience: '১৬ বছর',
          chamber: 'সকাল ৯টা - বিকাল ১টা'
        },
        {
          id: 8,
          name: 'ডা. নাসিমা বেগম',
          specialty: 'হৃদরোগ বিশেষজ্ঞ',
          location: 'ধুনট কার্ডিয়াক সেন্টার',
          phone: '০১৭১১-৮৯০১২৩',
          category: 'cardiology',
          image: '👩‍⚕️',
          experience: '২২ বছর',
          chamber: 'সকাল ১১টা - বিকাল ৩টা'
        },
        {
          id: 9,
          name: 'ডা. মোস্তাফিজুর রহমান',
          specialty: 'হাড় বিশেষজ্ঞ',
          location: 'ধুনট বোন কেয়ার',
          phone: '০১৭১১-৯০১২৩৪',
          category: 'orthopedic',
          image: '👨‍⚕️',
          experience: '১৩ বছর',
          chamber: 'বিকাল ২টা - সন্ধ্যা ৬টা'
        },
        {
          id: 10,
          name: 'ডা. রেহানা পারভীন',
          specialty: 'গাইনি বিশেষজ্ঞ',
          location: 'ধুনট মাতৃসেবা কেন্দ্র',
          phone: '০১৭১১-০১২৩৪৫',
          category: 'gynecology',
          image: '👩‍⚕️',
          experience: '১৯ বছর',
          chamber: 'সকাল ১০টা - দুপুর ২টা'
        }
      ]
    },
    'blood-donation': {
      title: 'রক্তদান',
      icon: '🩸',
      filterOptions: [
        { value: 'all', label: 'সব গ্রুপ' },
        { value: 'A+', label: 'A+' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B-', label: 'B-' },
        { value: 'AB+', label: 'AB+' },
        { value: 'AB-', label: 'AB-' },
        { value: 'O+', label: 'O+' },
        { value: 'O-', label: 'O-' },
      ],
      data: [
        {
          id: 1,
          name: 'মো. রহিম উদ্দিন',
          bloodGroup: 'A+',
          location: 'ধুনট সদর',
          phone: '০১৭১১-১১১১১১',
          category: 'A+',
          image: '🩸',
          lastDonation: '৩ মাস আগে',
          availability: 'উপলব্ধ'
        },
        {
          id: 2,
          name: 'সালমা বেগম',
          bloodGroup: 'O+',
          location: 'ধুনট বাজার',
          phone: '০১৭১১-২২২২২২',
          category: 'O+',
          image: '🩸',
          lastDonation: '৪ মাস আগে',
          availability: 'উপলব্ধ'
        },
        {
          id: 3,
          name: 'আব্দুল হালিম',
          bloodGroup: 'B+',
          location: 'ধুনট থানা এলাকা',
          phone: '০১৭১১-৩৩৩৩৩৩',
          category: 'B+',
          image: '🩸',
          lastDonation: '২ মাস আগে',
          availability: 'উপলব্ধ'
        },
        {
          id: 4,
          name: 'ফারিয়া খাতুন',
          bloodGroup: 'AB+',
          location: 'ধুনট কলেজ এলাকা',
          phone: '০১৭১১-৪৪৪৪৪৪',
          category: 'AB+',
          image: '🩸',
          lastDonation: '৫ মাস আগে',
          availability: 'উপলব্ধ'
        },
        {
          id: 5,
          name: 'করিম উদ্দিন',
          bloodGroup: 'A-',
          location: 'ধুনট বাস স্ট্যান্ড',
          phone: '০১৭১১-৫৫৫৫৫৫',
          category: 'A-',
          image: '🩸',
          lastDonation: '৬ মাস আগে',
          availability: 'উপলব্ধ'
        },
        {
          id: 6,
          name: 'রশিদা আক্তার',
          bloodGroup: 'B-',
          location: 'ধুনট পৌরসভা',
          phone: '০১৭১১-৬৬৬৬৬৬',
          category: 'B-',
          image: '🩸',
          lastDonation: '৩ মাস আগে',
          availability: 'উপলব্ধ'
        },
        {
          id: 7,
          name: 'মনিরুল ইসলাম',
          bloodGroup: 'O-',
          location: 'ধুনট হাসপাতাল এলাকা',
          phone: '০১৭১১-৭৭৭৭৭৭',
          category: 'O-',
          image: '🩸',
          lastDonation: '৪ মাস আগে',
          availability: 'উপলব্ধ'
        },
        {
          id: 8,
          name: 'নাসিমা বেগম',
          bloodGroup: 'AB-',
          location: 'ধুনট স্কুল এলাকা',
          phone: '০১৭১১-৮৮৮৮৮৮',
          category: 'AB-',
          image: '🩸',
          lastDonation: '২ মাস আগে',
          availability: 'উপলব্ধ'
        },
        {
          id: 9,
          name: 'তাহমিদ হাসান',
          bloodGroup: 'A+',
          location: 'ধুনট বাজার এলাকা',
          phone: '০১৭১১-৯৯৯৯৯৯',
          category: 'A+',
          image: '🩸',
          lastDonation: '৫ মাস আগে',
          availability: 'উপলব্ধ'
        },
        {
          id: 10,
          name: 'জরিনা খাতুন',
          bloodGroup: 'O+',
          location: 'ধুনট মেইন রোড',
          phone: '০১৭১১-০০০০০০',
          category: 'O+',
          image: '🩸',
          lastDonation: '৩ মাস আগে',
          availability: 'উপলব্ধ'
        }
      ]
    },
    'hospital': {
      title: 'হাসপাতাল',
      icon: '🏥',
      filterOptions: [
        { value: 'all', label: 'সব' },
        { value: 'government', label: 'সরকারি' },
        { value: 'private', label: 'বেসরকারি' },
      ],
      data: [
        {
          id: 1,
          name: 'ধুনট সদর হাসপাতাল',
          location: 'ধুনট সদর',
          phone: '০৫৪১-১২৩৪৫৬',
          category: 'government',
          image: '🏥',
          services: 'সাধারণ চিকিৎসা, জরুরি সেবা'
        },
        {
          id: 2,
          name: 'ধুনট প্রাইভেট ক্লিনিক',
          location: 'ধুনট বাজার',
          phone: '০১৭১১-৭৭৭৭৭৭',
          category: 'private',
          image: '🏥',
          services: 'বিশেষজ্ঞ চিকিৎসা, ডায়াগনস্টিক'
        },
        {
          id: 3,
          name: 'আল-হেলাল হাসপাতাল',
          location: 'ধুনট বাস স্ট্যান্ড',
          phone: '০১৭১১-১১১২২২',
          category: 'private',
          image: '🏥',
          services: 'সার্জারি, ইমার্জেন্সি'
        },
        {
          id: 4,
          name: 'ধুনট কমিউনিটি হাসপাতাল',
          location: 'ধুনট কলেজ রোড',
          phone: '০১৭১১-৩৩৩৪৪৪',
          category: 'government',
          image: '🏥',
          services: 'মাতৃসেবা, শিশু চিকিৎসা'
        },
        {
          id: 5,
          name: 'আদর্শ মেডিকেল সেন্টার',
          location: 'ধুনট থানা রোড',
          phone: '০১৭১১-৫৫৫৬৬৬',
          category: 'private',
          image: '🏥',
          services: 'ক্যান্সার চিকিৎসা, ডায়াবেটিস'
        },
        {
          id: 6,
          name: 'ধুনট আইকেয়ার হাসপাতাল',
          location: 'ধুনট মেইন রোড',
          phone: '০১৭১১-৭৭৭৮৮৮',
          category: 'private',
          image: '🏥',
          services: 'চোখের চিকিৎসা, লেজার সার্জারি'
        },
        {
          id: 7,
          name: 'ধুনট হার্ট ফাউন্ডেশন',
          location: 'ধুনট সদর এলাকা',
          phone: '০১৭১১-৯৯৯০০০',
          category: 'private',
          image: '🏥',
          services: 'হৃদরোগ চিকিৎসা, ECG'
        },
        {
          id: 8,
          name: 'ধুনট ডেন্টাল কেয়ার',
          location: 'ধুনট বাজার এলাকা',
          phone: '০১৭১১-১১১০০০',
          category: 'private',
          image: '🏥',
          services: 'দাঁতের চিকিৎসা, অর্থোডন্টিক্স'
        },
        {
          id: 9,
          name: 'ধুনট ফিজিওথেরাপি সেন্টার',
          location: 'ধুনট পৌরসভা এলাকা',
          phone: '০১৭১১-২২২১১১',
          category: 'private',
          image: '🏥',
          services: 'ফিজিওথেরাপি, পুনর্বাসন'
        },
        {
          id: 10,
          name: 'ধুনট মানসিক স্বাস্থ্য কেন্দ্র',
          location: 'ধুনট হাসপাতাল রোড',
          phone: '০১৭১১-৪৪৪৩৩৩',
          category: 'government',
          image: '🏥',
          services: 'মানসিক স্বাস্থ্য, কাউন্সেলিং'
        }
      ]
    },
    'diagnostic': {
      title: 'ডায়াগনস্টিক',
      icon: '🔬',
      filterOptions: [
        { value: 'all', label: 'সব' },
        { value: 'pathology', label: 'প্যাথলজি' },
        { value: 'radiology', label: 'রেডিওলজি' },
        { value: 'cardiology', label: 'কার্ডিওলজি' },
      ],
      data: [
        {
          id: 1,
          name: 'ইবনে সিনা ডায়াগনস্টিক',
          location: 'ধুনট সদর',
          phone: '০১৭১১-১০১০১০',
          category: 'pathology',
          image: '🔬',
          services: 'রক্ত পরীক্ষা, প্রস্রাব পরীক্ষা'
        },
        {
          id: 2,
          name: 'পপুলার ডায়াগনস্টিক',
          location: 'ধুনট বাজার',
          phone: '০১৭১১-২০২০২০',
          category: 'radiology',
          image: '🔬',
          services: 'এক্স-রে, আল্ট্রাসাউন্ড'
        },
        {
          id: 3,
          name: 'মেট্রো ডায়াগনস্টিক',
          location: 'ধুনট থানা রোড',
          phone: '০১৭১১-৩০৩০৩০',
          category: 'pathology',
          image: '🔬',
          services: 'মাইক্রোবায়োলজি, হিস্টোপ্যাথলজি'
        },
        {
          id: 4,
          name: 'ল্যাব এইড ডায়াগনস্টিক',
          location: 'ধুনট কলেজ এলাকা',
          phone: '০১৭১১-৪০৪০৪০',
          category: 'cardiology',
          image: '🔬',
          services: 'ইসিজি, ইকো কার্ডিওগ্রাম'
        },
        {
          id: 5,
          name: 'সেন্ট্রাল হসপিটাল ল্যাব',
          location: 'ধুনট বাস স্ট্যান্ড',
          phone: '০১৭১১-৫০৫০৫০',
          category: 'radiology',
          image: '🔬',
          services: 'সিটি স্ক্যান, এমআরআই'
        },
        {
          id: 6,
          name: 'আল-রাজী ডায়াগনস্টিক',
          location: 'ধুনট পৌরসভা',
          phone: '০১৭১১-৬০৬০৬০',
          category: 'pathology',
          image: '🔬',
          services: 'হরমোন টেস্ট, লিভার ফাংশন'
        },
        {
          id: 7,
          name: 'প্রিমিয়াম ডায়াগনস্টিক',
          location: 'ধুনট মেইন রোড',
          phone: '০১৭১১-৭০৭০৭০',
          category: 'radiology',
          image: '🔬',
          services: 'ম্যামোগ্রাফি, বোন ডেনসিটি'
        },
        {
          id: 8,
          name: 'স্কয়ার ডায়াগনস্টিক',
          location: 'ধুনট হাসপাতাল এলাকা',
          phone: '০১৭১১-৮০৮০৮০',
          category: 'cardiology',
          image: '🔬',
          services: 'হোল্টার মনিটরিং, স্ট্রেস টেস্ট'
        },
        {
          id: 9,
          name: 'আল-হেলাল ডায়াগনস্টিক',
          location: 'ধুনট স্কুল এলাকা',
          phone: '০১৭১১-৯০৯০৯০',
          category: 'pathology',
          image: '🔬',
          services: 'ক্যান্সার মার্কার, টিউমার মার্কার'
        },
        {
          id: 10,
          name: 'শহীদ সোহরাওয়ার্দী ল্যাব',
          location: 'ধুনট বাজার এলাকা',
          phone: '০১৭১১-০১০১০১',
          category: 'radiology',
          image: '🔬',
          services: 'ডিজিটাল এক্স-রে, কালার ডপলার'
        }
      ]
    },
    'car-rent': {
      title: 'গাড়ি ভাড়া',
      icon: '🚗',
      filterOptions: [
        { value: 'all', label: 'সব' },
        { value: 'car', label: 'প্রাইভেট কার' },
        { value: 'taxi', label: 'ট্যাক্সি' },
        { value: 'bus', label: 'মাইক্রোবাস' },
      ],
      data: [
        {
          id: 1,
          name: 'করিম ট্রান্সপোর্ট',
          location: 'ধুনট সদর',
          phone: '০১৭১১-১১১১১১',
          category: 'car',
          image: '🚗',
          services: 'প্রাইভেট কার, টয়োটা এলিয়ন',
          rate: '১৫০০ টাকা/দিন'
        },
        {
          id: 2,
          name: 'রহিম ট্যাক্সি সার্ভিস',
          location: 'ধুনট বাজার',
          phone: '০১৭১১-২২২২২২',
          category: 'taxi',
          image: '🚗',
          services: 'ট্যাক্সি সেবা, ২৪ ঘন্টা',
          rate: '১০ টাকা/কিমি'
        },
        {
          id: 3,
          name: 'হালিম মাইক্রোবাস',
          location: 'ধুনট থানা এলাকা',
          phone: '০১৭১১-৩৩৩৩৩৩',
          category: 'bus',
          image: '🚗',
          services: 'মাইক্রোবাস ভাড়া, ১৫ সিট',
          rate: '৩০০০ টাকা/দিন'
        },
        {
          id: 4,
          name: 'সালাম ট্রান্সপোর্ট',
          location: 'ধুনট কলেজ এলাকা',
          phone: '০১৭১১-৪৪৪৪৪৪',
          category: 'car',
          image: '🚗',
          services: 'হোন্ডা সিভিক, এসি সহ',
          rate: '২০০০ টাকা/দিন'
        },
        {
          id: 5,
          name: 'নাসির কার রেন্টাল',
          location: 'ধুনট বাস স্ট্যান্ড',
          phone: '০১৭১১-৫৫৫৫৫৫',
          category: 'car',
          image: '🚗',
          services: 'সুজুকি সুইফট, ফুয়েল ইফিশিয়েন্ট',
          rate: '১২০০ টাকা/দিন'
        },
        {
          id: 6,
          name: 'কবির ট্যাক্সি',
          location: 'ধুনট পৌরসভা',
          phone: '০১৭১১-৬৬৬৬৬৬',
          category: 'taxi',
          image: '🚗',
          services: 'সিএনজি অটোরিকশা',
          rate: '৮ টাকা/কিমি'
        },
        {
          id: 7,
          name: 'আব্দুল্লাহ রেন্ট এ কার',
          location: 'ধুনট মেইন রোড',
          phone: '০১৭১১-৭৭৭৭৭৭',
          category: 'car',
          image: '🚗',
          services: 'নিসান সানি, লাক্সারি',
          rate: '২৫০০ টাকা/দিন'
        },
        {
          id: 8,
          name: 'রফিক মাইক্রো সার্ভিস',
          location: 'ধুনট হাসপাতাল এলাকা',
          phone: '০১৭১১-৮৮৮৮৮৮',
          category: 'bus',
          image: '🚗',
          services: 'হায়াস মাইক্রোবাস, ২০ সিট',
          rate: '৩৫০০ টাকা/দিন'
        },
        {
          id: 9,
          name: 'হাসান ট্যাক্সি সেবা',
          location: 'ধুনট স্কুল এলাকা',
          phone: '০১৭১১-৯৯৯৯৯৯',
          category: 'taxi',
          image: '🚗',
          services: 'উবার স্টাইল সার্ভিস',
          rate: '১২ টাকা/কিমি'
        },
        {
          id: 10,
          name: 'সোহাগ প্রাইভেট কার',
          location: 'ধুনট বাজার এলাকা',
          phone: '০১৭১১-০০০০০০',
          category: 'car',
          image: '🚗',
          services: 'প্রিমিয়াম কার, ড্রাইভার সহ',
          rate: '৩০০০ টাকা/দিন'
        }
      ]
    },
    'police': {
      title: 'থানা',
      icon: '👮',
      filterOptions: [
        { value: 'all', label: 'সব' },
        { value: 'police', label: 'পুলিশ থানা' },
        { value: 'traffic', label: 'ট্রাফিক পুলিশ' },
      ],
      data: [
        {
          id: 1,
          name: 'ধুনট থানা',
          location: 'ধুনট সদর',
          phone: '০৫৪১-৫৬৭৮৯',
          category: 'police',
          image: '👮',
          services: 'সাধারণ অপরাধ তদন্ত',
          officer: 'ও.সি মোহাম্মদ আলী'
        },
        {
          id: 2,
          name: 'ট্রাফিক পুলিশ ইউনিট',
          location: 'ধুনট বাজার',
          phone: '০১৭১১-৯৯৯',
          category: 'traffic',
          image: '👮',
          services: 'ট্রাফিক নিয়ন্ত্রণ',
          officer: 'সার্জেন্ট রহিম উদ্দিন'
        },
        {
          id: 3,
          name: 'হাইওয়ে পুলিশ',
          location: 'ধুনট-বগুড়া সড়ক',
          phone: '০১৭১১-৮৮৮',
          category: 'traffic',
          image: '👮',
          services: 'হাইওয়ে নিরাপত্তা',
          officer: 'এ.এস.আই করিম উদ্দিন'
        },
        {
          id: 4,
          name: 'মহিলা ও শিশু নির্যাতন প্রতিরোধ',
          location: 'ধুনট থানা কমপ্লেক্স',
          phone: '০১৭১১-৭৭৭',
          category: 'police',
          image: '👮',
          services: 'মহিলা ও শিশু সুরক্ষা',
          officer: 'ইন্সপেক্টর ফাতেমা খাতুন'
        },
        {
          id: 5,
          name: 'সাইবার ক্রাইম ইউনিট',
          location: 'ধুনট থানা',
          phone: '০১৭১১-৬৬৬',
          category: 'police',
          image: '👮',
          services: 'সাইবার অপরাধ তদন্ত',
          officer: 'সাব-ইন্সপেক্টর নাসির'
        },
        {
          id: 6,
          name: 'র‍্যাপিড অ্যাকশন ব্যাটালিয়ন',
          location: 'ধুনট সদর',
          phone: '০১৭৭৭-৫৫৫৫৫৫',
          category: 'police',
          image: '👮',
          services: 'জরুরি অভিযান',
          officer: 'মেজর আব্দুল হালিম'
        },
        {
          id: 7,
          name: 'নদী পুলিশ',
          location: 'ধুনট নদী ঘাট',
          phone: '০১৭১১-৪৪৪',
          category: 'police',
          image: '👮',
          services: 'নদী পথ নিরাপত্তা',
          officer: 'এ.এস.আই হাফিজুর রহমান'
        },
        {
          id: 8,
          name: 'ইনভেস্টিগেশন ইউনিট',
          location: 'ধুনট থানা',
          phone: '০১৭১১-৩৩৩',
          category: 'police',
          image: '👮',
          services: 'গোয়েন্দা তদন্ত',
          officer: 'ইন্সপেক্টর মোস্তাফিজুর রহমান'
        },
        {
          id: 9,
          name: 'কমিউনিটি পুলিশ',
          location: 'ধুনট বিভিন্ন এলাকা',
          phone: '০১৭১১-২২২',
          category: 'police',
          image: '👮',
          services: 'সামাজিক নিরাপত্তা',
          officer: 'এ.এস.আই সালাউদ্দিন'
        },
        {
          id: 10,
          name: 'বিশেষ নিরাপত্তা ইউনিট',
          location: 'ধুনট থানা',
          phone: '০১৭১১-১১১',
          category: 'police',
          image: '👮',
          services: 'ভিআইপি নিরাপত্তা',
          officer: 'ইন্সপেক্টর নুরুল ইসলাম'
        }
      ]
    },
    'lawyer': {
      title: 'আইনজীবী',
      icon: '⚖️',
      filterOptions: [
        { value: 'all', label: 'সব' },
        { value: 'civil', label: 'দেওয়ানী' },
        { value: 'criminal', label: 'ফৌজদারী' },
        { value: 'family', label: 'পারিবারিক' },
      ],
      data: [
        {
          id: 1,
          name: 'ব্যারিস্টার মোহাম্মদ আলী',
          location: 'ধুনট কোর্ট এলাকা',
          phone: '০১৭১১-১০০১০০',
          category: 'civil',
          image: '⚖️',
          specialty: 'দেওয়ানী আইন, সম্পত্তি বিরোধ',
          experience: '২০ বছর'
        },
        {
          id: 2,
          name: 'অ্যাডভোকেট ফাতেমা খাতুন',
          location: 'ধুনট বার অ্যাসোসিয়েশন',
          phone: '০১৭১১-২০০২০০',
          category: 'family',
          image: '⚖️',
          specialty: 'পারিবারিক আইন, বিবাহবিচ্ছেদ',
          experience: '১৫ বছর'
        },
        {
          id: 3,
          name: 'আইনজীবী আব্দুল করিম',
          location: 'ধুনট সদর',
          phone: '০১৭১১-৩০০৩০০',
          category: 'criminal',
          image: '⚖️',
          specialty: 'ফৌজদারী আইন, জামিন',
          experience: '১৮ বছর'
        },
        {
          id: 4,
          name: 'অ্যাডভোকেট নাসির উদ্দিন',
          location: 'ধুনট কোর্ট',
          phone: '০১৭১১-৪০০৪০০',
          category: 'civil',
          image: '⚖️',
          specialty: 'ভূমি আইন, দলিল রেজিস্ট্রেশন',
          experience: '২২ বছর'
        },
        {
          id: 5,
          name: 'ব্যারিস্টার সালমা আক্তার',
          location: 'ধুনট বার লাইব্রেরি',
          phone: '০১৭১১-৫০০৫০০',
          category: 'family',
          image: '⚖️',
          specialty: 'নারী অধিকার, উত্তরাধিকার',
          experience: '১২ বছর'
        },
        {
          id: 6,
          name: 'আইনজীবী রফিক উদ্দিন',
          location: 'ধুনট থানা এলাকা',
          phone: '০১৭১১-৬০০৬০০',
          category: 'criminal',
          image: '⚖️',
          specialty: 'মাদক মামলা, চুরি-ডাকাতি',
          experience: '১৬ বছর'
        },
        {
          id: 7,
          name: 'অ্যাডভোকেট হাসান আলী',
          location: 'ধুনট বাজার এলাকা',
          phone: '০১৭১১-৭০০৭০০',
          category: 'civil',
          image: '⚖️',
          specialty: 'ব্যবসায়িক আইন, চুক্তি',
          experience: '১৪ বছর'
        },
        {
          id: 8,
          name: 'আইনজীবী রেহানা পারভীন',
          location: 'ধুনট মহিলা বার',
          phone: '০১৭১১-৮০০৮০০',
          category: 'family',
          image: '⚖️',
          specialty: 'শিশু অধিকার, দত্তক গ্রহণ',
          experience: '১০ বছর'
        },
        {
          id: 9,
          name: 'ব্যারিস্টার মনিরুল ইসলাম',
          location: 'ধুনট হাইকোর্ট বার',
          phone: '০১৭১১-৯০০৯০০',
          category: 'criminal',
          image: '⚖️',
          specialty: 'খুন মামলা, আপিল বিভাগ',
          experience: '২৫ বছর'
        },
        {
          id: 10,
          name: 'অ্যাডভোকেট তাহমিদ হাসান',
          location: 'ধুনট জুনিয়র বার',
          phone: '০১৭১১-১০১০১০',
          category: 'civil',
          image: '⚖️',
          specialty: 'সাইবার ল, বুদ্ধিবৃত্তিক সম্পত্তি',
          experience: '৮ বছর'
        }
      ]
    },
    'bus-schedule': {
      title: 'বাস সময়সূচী',
      icon: '🚌',
      filterOptions: [
        { value: 'all', label: 'সব রুট' },
        { value: 'dhaka', label: 'ঢাকা' },
        { value: 'bogura', label: 'বগুড়া' },
        { value: 'rangpur', label: 'রংপুর' },
      ],
      data: [
        {
          id: 1,
          name: 'হানিফ এন্টারপ্রাইজ',
          location: 'ধুনট বাস স্ট্যান্ড',
          phone: '০১৭১১-বাস-০০১',
          category: 'dhaka',
          image: '🚌',
          route: 'ধুনট - ঢাকা',
          schedule: 'সকাল ৬:০০, ৮:০০, দুপুর ২:০০',
          fare: '৪৫০ টাকা'
        },
        {
          id: 2,
          name: 'শ্যামলী পরিবহন',
          location: 'ধুনট বাস টার্মিনাল',
          phone: '০১৭১১-বাস-০০২',
          category: 'dhaka',
          image: '🚌',
          route: 'ধুনট - ঢাকা (নন-স্টপ)',
          schedule: 'রাত ১০:৩০, ১১:৩০',
          fare: '৫০০ টাকা'
        },
        {
          id: 3,
          name: 'এস আর ট্রাভেলস',
          location: 'ধুনট সদর',
          phone: '০১৭১১-বাস-০০৩',
          category: 'bogura',
          image: '🚌',
          route: 'ধুনট - বগুড়া',
          schedule: 'প্রতি ৩০ মিনিট অন্তর',
          fare: '৮০ টাকা'
        },
        {
          id: 4,
          name: 'গ্রীন লাইন',
          location: 'ধুনট হাইওয়ে',
          phone: '০১৭১১-বাস-০০৪',
          category: 'dhaka',
          image: '🚌',
          route: 'ধুনট - ঢাকা (এসি)',
          schedule: 'সকাল ৭:০০, বিকাল ৪:০০',
          fare: '৬৫০ টাকা'
        },
        {
          id: 5,
          name: 'নাবিল পরিবহন',
          location: 'ধুনট বাজার',
          phone: '০১৭১১-বাস-০০৫',
          category: 'rangpur',
          image: '🚌',
          route: 'ধুনট - রংপুর',
          schedule: 'সকাল ৮:০০, দুপুর ১:০০',
          fare: '২৮০ টাকা'
        },
        {
          id: 6,
          name: 'রয়্যাল কোচ',
          location: 'ধুনট বাস কাউন্টার',
          phone: '০১৭১১-বাস-০০৬',
          category: 'dhaka',
          image: '🚌',
          route: 'ধুনট - ঢাকা (ভলভো)',
          schedule: 'সন্ধ্যা ৬:০০, রাত ৯:০০',
          fare: '৭৫০ টাকা'
        },
        {
          id: 7,
          name: 'আল-আরাফাহ পরিবহন',
          location: 'ধুনট থানা রোড',
          phone: '০১৭১১-বাস-০০৭',
          category: 'bogura',
          image: '🚌',
          route: 'ধুনট - বগুড়া (লোকাল)',
          schedule: 'সকাল ৬:০০ থেকে রাত ৮:০০',
          fare: '৫০ টাকা'
        },
        {
          id: 8,
          name: 'দেশ ট্রাভেলস',
          location: 'ধুনট কলেজ গেট',
          phone: '০১৭১১-বাস-০০৮',
          category: 'rangpur',
          image: '🚌',
          route: 'ধুনট - রংপুর (এক্সপ্রেস)',
          schedule: 'সকাল ৯:০০, বিকাল ৫:০০',
          fare: '৩২০ টাকা'
        },
        {
          id: 9,
          name: 'সৌদিয়া পরিবহন',
          location: 'ধুনট বাস স্ট্যান্ড',
          phone: '০১৭১১-বাস-০০৯',
          category: 'dhaka',
          image: '🚌',
          route: 'ধুনট - ঢাকা (ডিলাক্স)',
          schedule: 'রাত ১২:০০, ১:০০',
          fare: '৫৫০ টাকা'
        },
        {
          id: 10,
          name: 'ইউনিক পরিবহন',
          location: 'ধুনট হাইওয়ে পয়েন্ট',
          phone: '০১৭১১-বাস-০১০',
          category: 'bogura',
          image: '🚌',
          route: 'ধুনট - বগুড়া (মিনিবাস)',
          schedule: 'প্রতি ১৫ মিনিট অন্তর',
          fare: '৬০ টাকা'
        }
      ]
    },
    'job': {
      title: 'চাকরি',
      icon: '💼',
      filterOptions: [
        { value: 'all', label: 'সব' },
        { value: 'government', label: 'সরকারি' },
        { value: 'private', label: 'বেসরকারি' },
        { value: 'ngo', label: 'এনজিও' },
      ],
      data: [
        {
          id: 1,
          name: 'ধুনট উপজেলা স্বাস্থ্য কমপ্লেক্স',
          location: 'ধুনট সদর',
          phone: '০৫৪১-৫৬৭৮৯০',
          category: 'government',
          image: '💼',
          position: 'নার্স (গ্রেড-১৮)',
          qualification: 'ডিপ্লোমা ইন নার্সিং',
          salary: '২৫,০০০ - ৩৫,০০০ টাকা'
        },
        {
          id: 2,
          name: 'ইসলামী ব্যাংক বাংলাদেশ',
          location: 'ধুনট শাখা',
          phone: '০১৭১১-জব-০০১',
          category: 'private',
          image: '💼',
          position: 'ব্যাংকিং অফিসার',
          qualification: 'স্নাতক (যে কোনো বিষয়)',
          salary: '৩০,০০০ - ৪৫,০০০ টাকা'
        },
        {
          id: 3,
          name: 'ব্র্যাক',
          location: 'ধুনট এলাকা অফিস',
          phone: '০১৭১১-জব-০০২',
          category: 'ngo',
          image: '💼',
          position: 'ক্ষুদ্রঋণ কর্মকর্তা',
          qualification: 'এইচএসসি/স্নাতক',
          salary: '২০,০০০ - ২৮,০০০ টাকা'
        },
        {
          id: 4,
          name: 'রূপালী ব্যাংক লিমিটেড',
          location: 'ধুনট শাখা',
          phone: '০১৭১১-জব-০০৩',
          category: 'government',
          image: '💼',
          position: 'ক্যাশ অফিসার',
          qualification: 'স্নাতক, কম্পিউটার দক্ষতা',
          salary: '২৮,০০০ - ৪০,০০০ টাকা'
        },
        {
          id: 5,
          name: 'গ্রামীণফোন',
          location: 'ধুনট কাস্টমার কেয়ার',
          phone: '০১৭১১-জব-০০৪',
          category: 'private',
          image: '💼',
          position: 'কাস্টমার সার্ভিস রিপ্রেজেন্টেটিভ',
          qualification: 'এইচএসসি, ইংরেজি জানা',
          salary: '১৮,০০০ - ২৫,০০০ টাকা'
        },
        {
          id: 6,
          name: 'এএসএ',
          location: 'ধুনট শাখা',
          phone: '০১৭১১-জব-০০৫',
          category: 'ngo',
          image: '💼',
          position: 'ফিল্ড অফিসার',
          qualification: 'স্নাতক, মোটরসাইকেল চালানো',
          salary: '২২,০০০ - ৩০,০০০ টাকা'
        },
        {
          id: 7,
          name: 'বিকাশ',
          location: 'ধুনট এজেন্ট পয়েন্ট',
          phone: '০১৭১১-জব-০০৬',
          category: 'private',
          image: '💼',
          position: 'এজেন্ট অপারেটর',
          qualification: 'এসএসসি, মোবাইল ব্যাংকিং জ্ঞান',
          salary: '১৫,০০০ - ২২,০০০ টাকা'
        },
        {
          id: 8,
          name: 'ধুনট পৌরসভা',
          location: 'পৌর ভবন',
          phone: '০৫৪১-৫৬৭৮৯১',
          category: 'government',
          image: '💼',
          position: 'কম্পিউটার অপারেটর',
          qualification: 'ডিপ্লোমা ইন কম্পিউটার',
          salary: '২০,০০০ - ৩০,০০০ টাকা'
        },
        {
          id: 9,
          name: 'সিটি ব্যাংক',
          location: 'ধুনট শাখা',
          phone: '০১৭১১-জব-০০৭',
          category: 'private',
          image: '💼',
          position: 'সেলস অফিসার',
          qualification: 'স্নাতক, সেলস এক্সপেরিয়েন্স',
          salary: '২৫,০০০ - ৩৮,০০০ টাকা'
        },
        {
          id: 10,
          name: 'কারিতাস বাংলাদেশ',
          location: 'ধুনট প্রকল্প অফিস',
          phone: '০১৭১১-জব-০০৮',
          category: 'ngo',
          image: '💼',
          position: 'প্রজেক্ট কো-অর্ডিনেটর',
          qualification: 'স্নাতকোত্তর, উন্নয়ন কাজে অভিজ্ঞতা',
          salary: '৩৫,০০০ - ৫০,০০০ টাকা'
        }
      ]
    },
    'teacher': {
      title: 'শিক্ষক',
      icon: '👨‍🏫',
      filterOptions: [
        { value: 'all', label: 'সব' },
        { value: 'school', label: 'স্কুল' },
        { value: 'college', label: 'কলেজ' },
        { value: 'tutor', label: 'প্রাইভেট টিউটর' },
      ],
      data: [
        {
          id: 1,
          name: 'মোহাম্মদ আলী হোসেন',
          location: 'ধুনট সরকারি উচ্চ বিদ্যালয়',
          phone: '০১৭১১-শিক্ষক-০১',
          category: 'school',
          image: '👨‍🏫',
          subject: 'গণিত',
          qualification: 'বিএসসি ইন ম্যাথ, বিএড',
          experience: '১৫ বছর'
        },
        {
          id: 2,
          name: 'ফাতেমা খাতুন',
          location: 'ধুনট সরকারি বালিকা উচ্চ বিদ্যালয়',
          phone: '০১৭১১-শিক্ষক-০২',
          category: 'school',
          image: '👩‍🏫',
          subject: 'বাংলা সাহিত্য',
          qualification: 'এমএ ইন বাংলা, বিএড',
          experience: '১২ বছর'
        },
        {
          id: 3,
          name: 'ড. আব্দুল করিম',
          location: 'ধুনট সরকারি কলেজ',
          phone: '০১৭১১-শিক্ষক-০৩',
          category: 'college',
          image: '👨‍🏫',
          subject: 'পদার্থবিজ্ঞান',
          qualification: 'পিএইচডি ইন ফিজিক্স',
          experience: '২০ বছর'
        },
        {
          id: 4,
          name: 'নাসির উদ্দিন আহমেদ',
          location: 'ধুনট টিউটোরিয়াল',
          phone: '০১৭১১-শিক্ষক-০৪',
          category: 'tutor',
          image: '👨‍🏫',
          subject: 'ইংরেজি, আইইএলটিএস',
          qualification: 'এমএ ইন ইংলিশ',
          experience: '৮ বছর'
        },
        {
          id: 5,
          name: 'রেহানা পারভীন',
          location: 'ধুনট মহিলা কলেজ',
          phone: '০১৭১১-শিক্ষক-০৫',
          category: 'college',
          image: '👩‍🏫',
          subject: 'রসায়ন',
          qualification: 'এমএসসি ইন কেমিস্ট্রি',
          experience: '১০ বছর'
        },
        {
          id: 6,
          name: 'হাফিজুর রহমান',
          location: 'ধুনট দাখিল মাদ্রাসা',
          phone: '০১৭১১-শিক্ষক-০৬',
          category: 'school',
          image: '👨‍🏫',
          subject: 'আরবি, ইসলামিক স্টাডিজ',
          qualification: 'কামিল, দাওরা হাদীস',
          experience: '১৮ বছর'
        },
        {
          id: 7,
          name: 'সালমা আক্তার',
          location: 'হোম টিউটর',
          phone: '০১৭১১-শিক্ষক-০৭',
          category: 'tutor',
          image: '👩‍🏫',
          subject: 'ক্লাস ৮-১০ সব বিষয়',
          qualification: 'বিএ অনার্স',
          experience: '৬ বছর'
        },
        {
          id: 8,
          name: 'তাহমিদ হাসান',
          location: 'ধুনট টেকনিক্যাল কলেজ',
          phone: '০১৭১১-শিক্ষক-০৮',
          category: 'college',
          image: '👨‍🏫',
          subject: 'কম্পিউটার সায়েন্স',
          qualification: 'বিএসসি ইন সিএসই',
          experience: '৫ বছর'
        },
        {
          id: 9,
          name: 'নুরুন্নাহার বেগম',
          location: 'ধুনট প্রাথমিক বিদ্যালয়',
          phone: '০১৭১১-শিক্ষক-০৯',
          category: 'school',
          image: '👩‍🏫',
          subject: 'প্রাথমিক শিক্ষা',
          qualification: 'ডিপ্লোমা ইন এডুকেশন',
          experience: '২২ বছর'
        },
        {
          id: 10,
          name: 'রফিকুল ইসলাম',
          location: 'অনলাইন টিউটর',
          phone: '০১৭১১-শিক্ষক-১০',
          category: 'tutor',
          image: '👨‍🏫',
          subject: 'এইচএসসি পদার্থ-রসায়ন',
          qualification: 'বিএসসি ইঞ্জিনিয়ারিং',
          experience: '৭ বছর'
        }
      ]
    },
    'entrepreneur': {
      title: 'উদ্যোক্তা',
      icon: '🚀',
      filterOptions: [
        { value: 'all', label: 'সব' },
        { value: 'tech', label: 'প্রযুক্তি' },
        { value: 'retail', label: 'খুচরা ব্যবসা' },
        { value: 'service', label: 'সেবা' },
      ],
      data: [
        {
          id: 1,
          name: 'করিম উদ্দিন',
          location: 'ধুনট টেক পার্ক',
          phone: '০১৭১১-উদ্যোক-০১',
          category: 'tech',
          image: '🚀',
          business: 'সফটওয়্যার ডেভেলপমেন্ট',
          description: 'মোবাইল অ্যাপ ও ওয়েব ডেভেলপমেন্ট',
          experience: '৮ বছর'
        },
        {
          id: 2,
          name: 'ফারহানা বেগম',
          location: 'ধুনট বাজার',
          phone: '০১৭১১-উদ্যোক-০২',
          category: 'retail',
          image: '🚀',
          business: 'ফ্যাশন হাউস',
          description: 'মহিলাদের পোশাক ও গয়না',
          experience: '১২ বছর'
        },
        {
          id: 3,
          name: 'আবুল হাসান',
          location: 'ধুনট সদর',
          phone: '০১৭১১-উদ্যোক-০৩',
          category: 'service',
          image: '🚀',
          business: 'ইভেন্ট ম্যানেজমেন্ট',
          description: 'বিবাহ ও সামাজিক অনুষ্ঠান আয়োজন',
          experience: '১০ বছর'
        },
        {
          id: 4,
          name: 'তানিয়া আক্তার',
          location: 'ধুনট অনলাইন',
          phone: '০১৭১১-উদ্যোক-০৪',
          category: 'tech',
          image: '🚀',
          business: 'ই-কমার্স প্ল্যাটফর্ম',
          description: 'অনলাইন মার্কেটপ্লেস',
          experience: '৫ বছর'
        },
        {
          id: 5,
          name: 'নাসির আহমেদ',
          location: 'ধুনট ইন্ডাস্ট্রিয়াল এরিয়া',
          phone: '০১৭১১-উদ্যোক-০৫',
          category: 'service',
          image: '🚀',
          business: 'ফুড প্রসেসিং',
          description: 'ঐতিহ্যবাহী খাবার প্যাকেজিং',
          experience: '১৫ বছর'
        },
        {
          id: 6,
          name: 'রিমা খাতুন',
          location: 'ধুনট হোম বেসড',
          phone: '০১৭১১-উদ্যোক-০৬',
          category: 'retail',
          image: '🚀',
          business: 'হস্তশিল্প',
          description: 'হাতে তৈরি পোশাক ও কারুশিল্প',
          experience: '৭ বছর'
        },
        {
          id: 7,
          name: 'জাহিদুল ইসলাম',
          location: 'ধুনট আইটি সেন্টার',
          phone: '০১৭১১-উদ্যোক-০৭',
          category: 'tech',
          image: '🚀',
          business: 'ডিজিটাল মার্কেটিং',
          description: 'সোশ্যাল মিডিয়া ও অনলাইন বিজ্ঞাপন',
          experience: '৬ বছর'
        },
        {
          id: 8,
          name: 'সালমা বেগম',
          location: 'ধুনট কৃষি খামার',
          phone: '০১৭১১-উদ্যোক-০৮',
          category: 'service',
          image: '🚀',
          business: 'অর্গানিক ফার্মিং',
          description: 'জৈব সবজি ও ফল চাষ',
          experience: '৯ বছর'
        },
        {
          id: 9,
          name: 'হাসান আলী',
          location: 'ধুনট ব্যবসায়িক এলাকা',
          phone: '০১৭১১-উদ্যোক-০৯',
          category: 'retail',
          image: '🚀',
          business: 'ইলেকট্রনিক্স শপ',
          description: 'মোবাইল ও কম্পিউটার আনুষাঙ্গিক',
          experience: '১১ বছর'
        },
        {
          id: 10,
          name: 'ফাতেমা সুলতানা',
          location: 'ধুনট বিউটি পার্লার',
          phone: '০১৭১১-উদ্যোক-১০',
          category: 'service',
          image: '🚀',
          business: 'বিউটি এন্ড ওয়েলনেস',
          description: 'মহিলাদের সৌন্দর্য সেবা',
          experience: '৮ বছর'
        }
      ]
    },
    'training': {
      title: 'প্রশিক্ষণ কেন্দ্র',
      icon: '🎓',
      filterOptions: [
        { value: 'all', label: 'সব' },
        { value: 'computer', label: 'কম্পিউটার' },
        { value: 'skill', label: 'দক্ষতা উন্নয়ন' },
        { value: 'language', label: 'ভাষা' },
      ],
      data: [
        {
          id: 1,
          name: 'ধুনট কম্পিউটার ট্রেনিং ইনস্টিটিউট',
          location: 'ধুনট সদর',
          phone: '০১৭১১-ট্রেনিং-০১',
          category: 'computer',
          image: '🎓',
          courses: 'অফিস অ্যাপ্লিকেশন, গ্রাফিক্স ডিজাইন',
          duration: '৩-৬ মাস',
          fee: '৮,০০০ - ১৫,০০০ টাকা'
        },
        {
          id: 2,
          name: 'ইসলামিক ফাউন্ডেশন স্কিল সেন্টার',
          location: 'ধুনট বাজার',
          phone: '০১৭১১-ট্রেনিং-০২',
          category: 'skill',
          image: '🎓',
          courses: 'সেলাই, রান্না, হস্তশিল্প',
          duration: '২-৪ মাস',
          fee: '৩,০০০ - ৮,০০০ টাকা'
        },
        {
          id: 3,
          name: 'ব্রিটিশ কাউন্সিল ইংলিশ সেন্টার',
          location: 'ধুনট কলেজ রোড',
          phone: '০১৭১১-ট্রেনিং-০৩',
          category: 'language',
          image: '🎓',
          courses: 'ইংরেজি ভাষা, আইইএলটিএস',
          duration: '৬-১২ মাস',
          fee: '১০,০০০ - ২৫,০০০ টাকা'
        },
        {
          id: 4,
          name: 'যুব উন্নয়ন ট্রেনিং সেন্টার',
          location: 'ধুনট থানা এলাকা',
          phone: '০১৭১১-ট্রেনিং-০৪',
          category: 'skill',
          image: '🎓',
          courses: 'মোটরসাইকেল মেকানিক, ইলেকট্রিক্যাল',
          duration: '৬ মাস',
          fee: '৫,০০০ - ১২,০০০ টাকা'
        },
        {
          id: 5,
          name: 'এনআইটি কম্পিউটার কলেজ',
          location: 'ধুনট আইটি পার্ক',
          phone: '০১৭১১-ট্রেনিং-০৫',
          category: 'computer',
          image: '🎓',
          courses: 'ওয়েব ডেভেলপমেন্ট, প্রোগ্রামিং',
          duration: '১ বছর',
          fee: '২০,০০০ - ৪০,০০০ টাকা'
        },
        {
          id: 6,
          name: 'আরবি ভাষা শিক্ষা কেন্দ্র',
          location: 'ধুনট জামে মসজিদ',
          phone: '০১৭১১-ট্রেনিং-০৬',
          category: 'language',
          image: '🎓',
          courses: 'আরবি ভাষা, কুরআন তিলাওয়াত',
          duration: '৯ মাস',
          fee: '২,০০০ - ৫,০০০ টাকা'
        },
        {
          id: 7,
          name: 'মহিলা কারিগরি ট্রেনিং কেন্দ্র',
          location: 'ধুনট মহিলা কলেজ',
          phone: '০১৭১১-ট্রেনিং-০৭',
          category: 'skill',
          image: '🎓',
          courses: 'বিউটিফিকেশন, ব্লক-বাটিক',
          duration: '৪ মাস',
          fee: '৪,০০০ - ১০,০০০ টাকা'
        },
        {
          id: 8,
          name: 'আইটি হাব বাংলাদেশ',
          location: 'ধুনট সাইবার সিটি',
          phone: '০১৭১১-ট্রেনিং-০৮',
          category: 'computer',
          image: '🎓',
          courses: 'সাইবার সিকিউরিটি, নেটওয়ার্কিং',
          duration: '৮ মাস',
          fee: '১৮,০০০ - ৩৫,০০০ টাকা'
        },
        {
          id: 9,
          name: 'কোরিয়ান ভাষা কেন্দ্র',
          location: 'ধুনট বিদেশি ভাষা ইনস্টিটিউট',
          phone: '০১৭১১-ট্রেনিং-০৯',
          category: 'language',
          image: '🎓',
          courses: 'কোরিয়ান ভাষা, কালচার স্টাডি',
          duration: '১ বছর',
          fee: '১৫,০০০ - ৩০,০০০ টাকা'
        },
        {
          id: 10,
          name: 'ড্রাইভিং ট্রেনিং স্কুল',
          location: 'ধুনট পৌর এলাকা',
          phone: '০১৭১১-ট্রেনিং-১০',
          category: 'skill',
          image: '🎓',
          courses: 'গাড়ি চালানো, ট্রাফিক আইন',
          duration: '১ মাস',
          fee: '৮,০০০ - ১২,০০০ টাকা'
        }
      ]
    }
  };

  const currentCategory = categoryData[categoryId || ''];

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-white font-bengali">
        <TopNavigation />
        <div className="pt-16 pb-20 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-800 font-bengali">
              ক্যাটাগরি খুঁজে পাওয়া যায়নি
            </h2>
          </div>
        </div>
        <BottomNavigation />
      </div>
    );
  }

  const filteredData = currentCategory.data.filter((item: any) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || item.category === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleMap = (location: string) => {
    window.open(`https://maps.google.com?q=${location}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3">
          <div className="flex items-center space-x-3">
            <span className="text-xl">{currentCategory.icon}</span>
            <div>
              <h1 className="text-base font-bold font-bengali">{currentCategory.title}</h1>
              <p className="text-orange-100 font-bengali text-xs">
                {filteredData.length} টি তথ্য
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilter={setFilterType}
          placeholder={`${currentCategory.title} খুঁজুন...`}
          filterOptions={currentCategory.filterOptions}
        />

        {/* Results */}
        <div className="px-4 space-y-2">
          {filteredData.map((item: any) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-3"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                  {item.image}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 font-bengali text-sm">
                    {item.name}
                  </h3>
                  
                  {item.specialty && (
                    <p className="text-xs text-gray-600 font-bengali mb-1">
                      {item.specialty}
                    </p>
                  )}
                  
                  {item.bloodGroup && (
                    <p className="text-xs text-red-600 font-bengali mb-1 font-semibold">
                      রক্তের গ্রুপ: {item.bloodGroup}
                    </p>
                  )}

                  {item.experience && (
                    <p className="text-xs text-gray-600 font-bengali mb-1">
                      অভিজ্ঞতা: {item.experience}
                    </p>
                  )}

                  {item.chamber && (
                    <p className="text-xs text-gray-600 font-bengali mb-1">
                      চেম্বার: {item.chamber}
                    </p>
                  )}

                  {item.services && (
                    <p className="text-xs text-gray-600 font-bengali mb-1">
                      সেবা: {item.services}
                    </p>
                  )}

                  {item.position && (
                    <p className="text-xs text-blue-600 font-bengali mb-1 font-semibold">
                      পদ: {item.position}
                    </p>
                  )}

                  {item.salary && (
                    <p className="text-xs text-green-600 font-bengali mb-1">
                      বেতন: {item.salary}
                    </p>
                  )}

                  {item.courses && (
                    <p className="text-xs text-purple-600 font-bengali mb-1">
                      কোর্স: {item.courses}
                    </p>
                  )}

                  {item.fee && (
                    <p className="text-xs text-orange-600 font-bengali mb-1">
                      ফি: {item.fee}
                    </p>
                  )}
                  
                  <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                    <MapPin className="h-3 w-3" />
                    <span className="font-bengali">{item.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-500" />
                      <span className="text-xs text-gray-600 font-bengali">৪.৮</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleCall(item.phone)}
                        className="flex items-center space-x-1 bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs font-bengali transition-colors"
                      >
                        <Phone className="h-3 w-3" />
                        <span>কল</span>
                      </button>
                      
                      <button
                        onClick={() => handleMap(item.location)}
                        className="flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs font-bengali transition-colors"
                      >
                        <MapPin className="h-3 w-3" />
                        <span>ম্যাপ</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {filteredData.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 font-bengali text-sm">কোনো তথ্য পাওয়া যায়নি</p>
            </div>
          )}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default CategoryDetails;
