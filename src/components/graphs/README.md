# קומפוננטי גרפים

תיקייה זו מכילה קומפוננטי React שונים לגרפים המבוססים על `@mui/x-charts`.

## גרפים זמינים

### 1. BarChart - גרף עמודות
```jsx
import { BarChart } from './graphs';

<BarChart
  data={barData}
  xAxis={[{ dataKey: 'month', scaleType: 'band' }]}
  yAxis={[{ scaleType: 'linear' }]}
  title="כותרת הגרף"
  height={400}
  width="100%"
  colors={['#1976d2', '#42a5f5']}
/>
```

### 2. LineChart - גרף קווי
```jsx
import { LineChart } from './graphs';

<LineChart
  data={lineData}
  xAxis={[{ dataKey: 'month', scaleType: 'band' }]}
  yAxis={[{ scaleType: 'linear' }]}
  title="כותרת הגרף"
  height={400}
  curve="smooth" // או "linear"
/>
```

### 3. PieChart - גרף עוגה
```jsx
import { PieChart } from './graphs';

<PieChart
  data={[
    { id: 0, value: 10, label: 'תווית 1' },
    { id: 1, value: 20, label: 'תווית 2' }
  ]}
  title="כותרת הגרף"
  height={400}
/>
```

### 4. ScatterChart - גרף פיזור
```jsx
import { ScatterChart } from './graphs';

<ScatterChart
  data={scatterData}
  xAxis={[{ dataKey: 'x', scaleType: 'linear' }]}
  yAxis={[{ dataKey: 'y', scaleType: 'linear' }]}
  title="כותרת הגרף"
  height={400}
/>
```

### 5. ComparisonChart - גרף השוואתי אופקי
```