import React, { useState, useEffect } from 'react';
import {
  BarChart, Bar,
  LineChart, Line,
  AreaChart, Area,
  XAxis, YAxis,
  CartesianGrid, Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'A', value: 400 },
  { name: 'B', value: 300 },
  { name: 'C', value: 200 },
  { name: 'D', value: 278 },
  { name: 'E', value: 189 },
];

const chartTypes = [
  {
    name: 'Student',
    component: BarChart,
    dataComponent: Bar,
    colors: { fill: '#4a90e2', stroke: '#357abd' },
    axisBackground: '#f5f5f5'
  },
  {
    name: 'Mentor',
    component: LineChart,
    dataComponent: Line,
    colors: { fill: 'none', stroke: '#e94e77' },
    axisBackground: '#fff3f3'
  },
  {
    name: 'Transaction',
    component: AreaChart,
    dataComponent: Area,
    colors: { fill: 'rgba(92, 184, 92, 0.3)', stroke: '#5cb85c' },
    axisBackground: '#eaf4e4'
  },
];

const AnimatedChartRow = () => {
  const [activeChartIndex, setActiveChartIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getTabStyle = (index) => `
    px-4 py-2 mb-2 rounded-lg font-semibold text-sm
    transition-colors duration-300 text-center
    ${activeChartIndex === index 
      ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white border-2 border-blue-700' 
      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}
  `;

  const chartContainerStyle = `
    w-full h-96 bg-gradient-to-r from-white via-gray-100 to-gray-200 rounded-lg shadow-lg overflow-hidden
    transition-all duration-1000 ease-out transform
    ${isVisible ? 'translate-y-0 opacity-100 rotate-0 scale-100' : 'translate-y-full opacity-0 -rotate-12 scale-95'}
  `;

  const { component: ActiveChart, dataComponent: ActiveDataComponent, colors, axisBackground } = chartTypes[activeChartIndex];

  return (
    <div className="flex items-start justify-center mt-7 p-4 space-x-4">
      {/* Sidebar Tabs */}
      
      
      {/* Chart Container */}
      <div className="w-full max-w-4xl">
        <div className={chartContainerStyle}>
          <ResponsiveContainer width="100%" height="100%">
            <ActiveChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis 
                dataKey="name" 
                stroke="#333" 
                tick={{ fill: '#333' }}
                axisLine={{ stroke: axisBackground, strokeWidth: 2 }}
                tickLine={{ stroke: axisBackground }}
              />
              <YAxis 
                stroke="#333" 
                tick={{ fill: '#333' }}
                axisLine={{ stroke: axisBackground, strokeWidth: 2 }}
                tickLine={{ stroke: axisBackground }}
              />
              <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#ccc' }} />
              <ActiveDataComponent
                type="monotone"
                dataKey="value"
                fill={colors.fill}
                stroke={colors.stroke}
              />
            </ActiveChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        {chartTypes.map((chart, index) => (
          <button
            key={index}
            className={getTabStyle(index)}
            onClick={() => setActiveChartIndex(index)}
          >
            {chart.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnimatedChartRow;
