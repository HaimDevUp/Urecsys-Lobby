import React from 'react';
import './Graphs.scss';

const ComparisonChart = ({ 
  data,
  labels,
  colors = ['#65B868', '#F80000'],
  isHebrew
}) => {
  if (!data || data.length === 0) {
    return ;
  }


  const barStyle = (color, width) => ({
    height: '10px',
    backgroundColor: color,
    width: `${width}%`,
    minWidth: '20px',
    transition: 'all 0.3s ease'
  });

  const getBarWidth = (value, maxValue) => {
    return Math.max((value / maxValue) * 100, 5); // מינימום 5% רוחב
  };

  const getMaxValue = () => {
    return Math.max(...data.flatMap(item => [item.val1, item.val2]));
  };

  const maxValue = getMaxValue();

  return (
    <div className={`urecsys-comparison-chart ${isHebrew ? "hebrew" : ""}`}>
        <table>
            <thead>
                <tr>
                    <th>{labels[0]}</th>
                    <th>{labels[1]}</th>
                    <th>{labels[2]}</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.label}</td>
                        <td><div className="urecsys-comparison-chart--bar" data-value={item.val1} style={barStyle(colors[0], getBarWidth(item.val1, maxValue))}></div></td>
                        <td><div className="urecsys-comparison-chart--bar" data-value={item.val2} style={barStyle(colors[1], getBarWidth(item.val2, maxValue))}></div></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

  );
};

export default ComparisonChart; 