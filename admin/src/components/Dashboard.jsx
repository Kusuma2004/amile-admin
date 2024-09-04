import React from 'react';

import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import Cards from './Cards/Cards';
import AnimatedChartRow from './Charts';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);


     
    

const Dashboard = () => {
  // Data for each chart
  
  

  return (
    <div>
      <h2 className="text-2xl font-bold mb-1">Dashboard</h2>
          <Cards/>
          <AnimatedChartRow/>
        
      
    </div>
  );
};

export default Dashboard;
