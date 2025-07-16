import TopNavigation from '../components/TopNavigation';
import BottomNavigation from '../components/BottomNavigation';

const MyApps = () => {
  const apps = [
    {
      id: 1,
      name: 'Dhunat News',
      description: 'ধুনটের সর্বশেষ খবর',
      icon: '📰',
      url: 'https://dhunatnews.com'
    },
    {
      id: 2,
      name: 'Dhunat Jobs',
      description: 'ধুনটের চাকরির খবর',
      icon: '💼',
      url: 'https://dhunatjobs.com'
    },
    {
      id: 3,
      name: 'Dhunat Online Shop',
      description: 'ধুনটের অনলাইন দোকান',
      icon: '🛒',
      url: 'https://dhunatonlineshop.com'
    },
    {
      id: 4,
      name: 'Dhunat Blood Bank',
      description: 'ধুনটের রক্ত ব্যাংক',
      icon: '🩸',
      url: 'https://dhunatbloodbank.com'
    },
    {
      id: 5,
      name: 'Dhunat Doctors',
      description: 'ধুনটের ডাক্তার তালিকা',
      icon: '👨‍⚕️',
      url: 'https://dhunatdoctors.com'
    },
    {
      id: 6,
      name: 'Dhunat Ambulance',
      description: 'ধুনটের এম্বুলেন্স সেবা',
      icon: '🚑',
      url: 'https://dhunatambulance.com'
    },
    {
      id: 7,
      name: 'Dhunat Fire Service',
      description: 'ধুনটের ফায়ার সার্ভিস',
      icon: '🔥',
      url: 'https://dhunatfireservice.com'
    },
    {
      id: 8,
      name: 'Dhunat Police',
      description: 'ধুনটের পুলিশ',
      icon: '👮',
      url: 'https://dhunatpolice.com'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-bengali">
      <TopNavigation />
      
      <div className="pt-14 pb-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-4">
          <div className="text-center">
            <h1 className="text-lg font-bold font-bengali">আমার অ্যাপ</h1>
            <p className="text-purple-100 font-bengali text-sm">
              আপনার পছন্দের অ্যাপগুলো
            </p>
          </div>
        </div>

        {/* Apps List */}
        <div className="px-4 py-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {apps.map((app) => (
              <a
                key={app.id}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center space-x-3 p-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-lg">
                    {app.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 font-bengali text-sm">
                      {app.name}
                    </h3>
                    <p className="text-xs text-gray-600 font-bengali">
                      {app.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Developer Info */}
        <div className="mb-6">
          <h3 className="text-base font-bold text-gray-800 font-bengali mb-3">
            ডেভেলপার তথ্য
          </h3>
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4">
            <div className="text-center mb-3">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h4 className="font-bold text-purple-700 text-sm">Md Ridoan Mahmud Zisan</h4>
              <p className="text-xs text-gray-600 font-bengali">Full Stack Developer</p>
            </div>
            
            <button
              onClick={() => window.open('https://ridoan-zisan.netlify.app', '_blank')}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-bengali text-sm transition-colors"
            >
              ডেভেলপারের ওয়েবসাইট
            </button>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default MyApps;
