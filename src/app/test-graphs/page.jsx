'use client';

import { ComparisonChart } from '../../components/graphs';

export default function TestGraphsPage() {
  const testData = [
    { label: 'PM2.5', currentValue: 12, targetValue: 35 },
    { label: 'CO2', currentValue: 450, targetValue: 800 },
  ];

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>
        בדיקת גרפים
      </h1>
      
      <div style={{ marginBottom: '40px' }}>
        <ComparisonChart
          data={testData}
          title="השוואת מדדי איכות אוויר"
          height={200}
        />
      </div>
      
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f0f8ff', 
        borderRadius: '8px',
        border: '1px solid #ddd'
      }}>
        <h3>הסבר על הגרף:</h3>
        <ul>
          <li><strong>PM2.5:</strong> ערך נוכחי 12 מתוך יעד 35 (ירוק)</li>
          <li><strong>CO2:</strong> ערך נוכחי 450 מתוך יעד 800 (ירוק)</li>
          <li>הפסים הירוקים מייצגים את הערכים הנוכחיים</li>
          <li>הפסים האדומים מייצגים את היעדים</li>
        </ul>
      </div>
    </div>
  );
} 