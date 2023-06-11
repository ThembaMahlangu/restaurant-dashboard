import { PieChart } from 'react-minimal-pie-chart';

const FinancesTabContent = () => {
  // Dummy data for pie charts
  const revenueData = [
    { title: 'Online Orders', value: 60, color: '#10B981' },
    { title: 'In-Store Orders', value: 30, color: '#FBBF24' },
    { title: 'Takeaway Orders', value: 10, color: '#6366F1' },
  ];

  const expensesData = [
    { title: 'Ingredients', value: 40, color: '#10B981' },
    { title: 'Utilities', value: 25, color: '#FBBF24' },
    { title: 'Staff Salary', value: 20, color: '#6366F1' },
    { title: 'Miscellaneous', value: 15, color: '#F87171' },
  ];

  // Dummy data for finance cards
  const financeCardsData = [
    { title: 'Total Revenue', value: 'R10,000' },
    { title: 'Total Expenses', value: 'R6,000' },
    { title: 'Net Income', value: 'R4,000' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-blue-400 rounded-lg p-5">
      <div className="col-span-1">
        <h2 className="text-xl font-bold mb-4">Revenue Breakdown</h2>
        <PieChart
          data={revenueData}
          lineWidth={60}
          paddingAngle={2}
          radius={40}
          label={({ dataEntry }) => `${dataEntry.title} ${dataEntry.value}%`}
          labelStyle={{ fontSize: '8px', fill: '#fff' }}
        />
      </div>
      <div className="col-span-1">
        <h2 className="text-xl font-bold mb-4">Expenses Breakdown</h2>
        <PieChart
          data={expensesData}
          lineWidth={60}
          paddingAngle={2}
          radius={40}
          label={({ dataEntry }) => `${dataEntry.title} ${dataEntry.value}%`}
          labelStyle={{ fontSize: '8px', fill: '#fff' }}
        />
      </div>
      <div className="col-span-1">
        <h2 className="text-xl font-bold mb-4">Financial Summary</h2>
        <div className="grid grid-cols-2 gap-4">
          {financeCardsData.map((card, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow flex flex-col justify-center items-center"
            >
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <span className="text-2xl font-bold">{card.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancesTabContent;
