
import { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilter: (type: string) => void;
  placeholder?: string;
  filterOptions?: { value: string; label: string }[];
}

const SearchAndFilter = ({ 
  onSearch, 
  onFilter, 
  placeholder = "খুঁজুন...",
  filterOptions = [
    { value: 'all', label: 'সব' },
    { value: 'name', label: 'নাম অনুযায়ী' },
    { value: 'location', label: 'এলাকা অনুযায়ী' },
  ]
}: SearchAndFilterProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className="px-4 py-2 bg-white">
      {/* Search Bar */}
      <div className="relative mb-2">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent font-bengali text-sm"
        />
      </div>

      {/* Filter Options - Always Visible */}
      <div className="flex flex-wrap gap-2">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onFilter(option.value)}
            className="px-3 py-1 text-xs bg-gray-50 border border-gray-200 rounded-full hover:bg-orange-50 hover:border-orange-300 transition-colors font-bengali"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchAndFilter;
