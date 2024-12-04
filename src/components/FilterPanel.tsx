import React from 'react';
import { FilterOptions } from '../types/Card';
import { Search } from 'lucide-react';

interface FilterPanelProps {
  filters: FilterOptions;
  setFilters: React.Dispatch<React.SetStateAction<FilterOptions>>;
}

export default function FilterPanel({ filters, setFilters }: FilterPanelProps) {
  const handleSelectChange = (category: keyof FilterOptions, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: value === '' ? [] : [value]
    }));
  };

  const handleBooleanChange = (category: keyof FilterOptions, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: value === 'true'
    }));
  };

  return (
    <div className="sticky top-0 bg-white z-10 p-4">
      <div className="flex items-center gap-2 mb-6">
        <Search className="w-5 h-5 text-gray-500" />
        <h2 className="text-lg font-semibold">検索条件</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center gap-4">
          <label className="whitespace-nowrap text-sm font-medium text-gray-700 w-32">年会費</label>
          <select
            className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={filters.annualFee[0] || ''}
            onChange={(e) => handleSelectChange('annualFee', e.target.value)}
          >
            <option value="">指定なし</option>
            <option value="無料">無料</option>
            <option value="5,000円以下">5,000円以下</option>
            <option value="10,000円以下">10,000円以下</option>
            <option value="20,000円以下">20,000円以下</option>
            <option value="20,000円超">20,000円超</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label className="whitespace-nowrap text-sm font-medium text-gray-700 w-32">ポイント還元率</label>
          <select
            className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={filters.pointRate[0] || ''}
            onChange={(e) => handleSelectChange('pointRate', e.target.value)}
          >
            <option value="">指定なし</option>
            <option value="0.5%以上">0.5%以上</option>
            <option value="1.0%以上">1.0%以上</option>
            <option value="1.5%以上">1.5%以上</option>
            <option value="2.0%以上">2.0%以上</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label className="whitespace-nowrap text-sm font-medium text-gray-700 w-32">マイル還元率</label>
          <select
            className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={filters.mileRate[0] || ''}
            onChange={(e) => handleSelectChange('mileRate', e.target.value)}
          >
            <option value="">指定なし</option>
            <option value="0.5%以上">0.5%以上</option>
            <option value="1.0%以上">1.0%以上</option>
            <option value="1.5%以上">1.5%以上</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label className="whitespace-nowrap text-sm font-medium text-gray-700 w-32">国際ブランド</label>
          <select
            className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={filters.brand[0] || ''}
            onChange={(e) => handleSelectChange('brand', e.target.value)}
          >
            <option value="">指定なし</option>
            <option value="VISA">VISA</option>
            <option value="Mastercard">Mastercard</option>
            <option value="AMEX">AMEX</option>
            <option value="JCB">JCB</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label className="whitespace-nowrap text-sm font-medium text-gray-700 w-32">プライオリティパス</label>
          <select
            className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={filters.priorityPass.toString()}
            onChange={(e) => handleBooleanChange('priorityPass', e.target.value)}
          >
            <option value="false">指定なし</option>
            <option value="true">付帯あり</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label className="whitespace-nowrap text-sm font-medium text-gray-700 w-32">ETCカード年会費</label>
          <select
            className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={filters.etcCard.toString()}
            onChange={(e) => handleBooleanChange('etcCard', e.target.value)}
          >
            <option value="false">指定なし</option>
            <option value="true">無料</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label className="whitespace-nowrap text-sm font-medium text-gray-700 w-32">保険特典</label>
          <select
            className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={filters.insurance.toString()}
            onChange={(e) => handleBooleanChange('insurance', e.target.value)}
          >
            <option value="false">指定なし</option>
            <option value="true">充実</option>
          </select>
        </div>
      </div>
    </div>
  );
}