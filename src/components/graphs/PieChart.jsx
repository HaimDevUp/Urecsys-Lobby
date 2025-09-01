import React from 'react';
import { PieChart as MuiPieChart } from '@mui/x-charts';

const PieChart = ({ 
  data, 
  height = 400, 
  width = '100%',
  title = 'Pie Chart',
  colors = ['#1976d2', '#42a5f5', '#90caf9', '#e3f2fd', '#ff9800', '#f44336'],
  margin = { top: 20, right: 20, bottom: 40, left: 20 },
  showLabels = true,
  showTooltip = true
}) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <h3 style={{ marginBottom: '20px', color: '#333' }}>{title}</h3>
      <MuiPieChart
        series={[
          {
            data: data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        height={height}
        width={width}
        colors={colors}
        margin={margin}
        slotProps={{
          legend: {
            direction: 'row',
            position: { vertical: 'top', horizontal: 'middle' },
            padding: 20,
          },
        }}
      />
    </div>
  );
};

export default PieChart; 