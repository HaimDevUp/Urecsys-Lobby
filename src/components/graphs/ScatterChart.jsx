import React from 'react';
import { ScatterChart as MuiScatterChart } from '@mui/x-charts';

const ScatterChart = ({ 
  data, 
  xAxis, 
  yAxis, 
  height = 400, 
  width = '100%',
  title = 'Scatter Chart',
  colors = ['#1976d2', '#42a5f5', '#90caf9', '#e3f2fd'],
  margin = { top: 20, right: 20, bottom: 40, left: 60 },
  markerSize = 6
}) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  // MUI מצפה למבנה נתונים עם series
  const series = Object.keys(data[0]).filter(key => key !== 'x' && key !== 'y' && key !== 'category');
  
  const chartData = data.map((item, index) => {
    const result = { id: index };
    if (item.x) result.x = item.x;
    if (item.y) result.y = item.y;
    if (item.category) result.category = item.category;
    series.forEach(key => {
      result[key] = item[key];
    });
    return result;
  });

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <h3 style={{ marginBottom: '20px', color: '#333' }}>{title}</h3>
      <MuiScatterChart
        dataset={chartData}
        xAxis={xAxis}
        yAxis={yAxis}
        series={series.length > 0 ? series.map(key => ({ dataKey: key, label: key })) : [{ dataKey: 'y', label: 'Y' }]}
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

export default ScatterChart; 