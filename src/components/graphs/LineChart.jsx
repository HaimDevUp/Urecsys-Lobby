import React from 'react';
import { LineChart as MuiLineChart } from '@mui/x-charts';

const LineChart = ({ 
  data, 
  xAxis, 
  yAxis, 
  height = 400, 
  width = '100%',
  title = 'Line Chart',
  colors = ['#1976d2', '#42a5f5', '#90caf9', '#e3f2fd'],
  margin = { top: 20, right: 20, bottom: 40, left: 60 },
  curve = 'linear'
}) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  // MUI מצפה למבנה נתונים עם series
  const series = Object.keys(data[0]).filter(key => key !== 'month' && key !== 'name' && key !== 'label');
  
  const chartData = data.map((item, index) => {
    const result = { id: index };
    series.forEach(key => {
      result[key] = item[key];
    });
    if (item.month) result.month = item.month;
    if (item.name) result.name = item.name;
    if (item.label) result.label = item.label;
    return result;
  });

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <h3 style={{ marginBottom: '20px', color: '#333' }}>{title}</h3>
      <MuiLineChart
        dataset={chartData}
        xAxis={xAxis}
        yAxis={yAxis}
        series={series.map(key => ({ dataKey: key, label: key, curve }))}
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

export default LineChart; 