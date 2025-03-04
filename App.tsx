import React, { useState } from 'react';
import { 
  Bell, 
  Settings, 
  CreditCard, 
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  Home,
  Send,
  PieChart,
  LogOut,
  Menu,
  X
} from 'lucide-react';

// Mock data for transactions
const transactions = [
  { id: 1, type: 'trade', amount: 750, date: '2024-03-15', category: 'Trading', description: 'Stock Trade - AAPL' },
  { id: 2, type: 'profit', amount: 500, date: '2024-03-15', category: 'Income', description: 'Profit Added' },
  { id: 3, type: 'expense', amount: -555, date: '2024-03-14', category: 'Fees', description: 'Monthly Fee' },
  { id: 4, type: 'trade', amount: 325, date: '2024-03-13', category: 'Trading', description: 'Trade Profit' },
  { id: 5, type: 'income', amount: 2350, date: '2024-03-12', category: 'Salary', description: 'Monthly Salary' },
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar Navigation */}
      <nav className="hidden md:block w-64 bg-[#1a237e] p-6 text-white">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Signal FX</h1>
        </div>
        
        <div className="space-y-4">
          <NavItem icon={<Home size={20} />} text="Dashboard" active />
          <NavItem icon={<CreditCard size={20} />} text="Cards" />
          <NavItem icon={<Send size={20} />} text="Transfers" />
          <NavItem icon={<PieChart size={20} />} text="Analytics" />
          <NavItem icon={<Settings size={20} />} text="Settings" />
          <div className="pt-8">
            <NavItem icon={<LogOut size={20} />} text="Logout" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Sidebar */}
      <nav className={`fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-[#1a237e] p-6 text-white transition-transform duration-200 ease-in-out z-50 md:hidden`}>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Signal FX</h1>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <NavItem icon={<Home size={20} />} text="Dashboard" active />
          <NavItem icon={<CreditCard size={20} />} text="Cards" />
          <NavItem icon={<Send size={20} />} text="Transfers" />
          <NavItem icon={<PieChart size={20} />} text="Analytics" />
          <NavItem icon={<Settings size={20} />} text="Settings" />
          <div className="pt-8">
            <NavItem icon={<LogOut size={20} />} text="Logout" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">Welcome back, Nicolae Vasiliv!</h2>
              <p className="text-gray-600">Monday, 15 March 2024</p>
            </div>
          </div>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <Bell size={20} />
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Balance Card */}
          <div className="col-span-1 md:col-span-4 bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-600">Total Balance</h3>
              <Wallet size={24} className="text-[#1a237e]" />
            </div>
            <p className="text-3xl font-bold">$6,754.00</p>
            <div className="mt-4 flex items-center text-green-500">
              <ArrowUpRight size={16} />
              <span className="ml-1">+2.3% from last month</span>
            </div>
          </div>

          {/* Income Card */}
          <div className="col-span-1 md:col-span-4 bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-600">Income</h3>
              <ArrowUpRight size={24} className="text-green-500" />
            </div>
            <p className="text-3xl font-bold">$2,350.00</p>
            <div className="mt-4 flex items-center text-green-500">
              <ArrowUpRight size={16} />
              <span className="ml-1">+4.7% from last month</span>
            </div>
          </div>

          {/* Expenses Card */}
          <div className="col-span-1 md:col-span-4 bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-600">Expenses</h3>
              <ArrowDownLeft size={24} className="text-red-500" />
            </div>
            <p className="text-3xl font-bold">$555.00</p>
            <div className="mt-4 flex items-center text-red-500">
              <ArrowDownLeft size={16} />
              <span className="ml-1">-1.5% from last month</span>
            </div>
          </div>

          {/* Transaction History */}
          <div className="col-span-1 md:col-span-8 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Recent Transactions</h3>
            <div className="space-y-4 overflow-x-auto">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    transaction.type === 'profit' || transaction.type === 'trade' ? 'bg-green-50' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-2 rounded-full ${
                        transaction.type === 'profit' || transaction.type === 'trade'
                          ? 'bg-green-100 text-green-600'
                          : transaction.type === 'income'
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {transaction.type === 'profit' || transaction.type === 'income' || transaction.type === 'trade' ? (
                        <ArrowUpRight size={20} />
                      ) : (
                        <ArrowDownLeft size={20} />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-gray-500">{transaction.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-semibold ${
                        transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                    </p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Overview */}
          <div className="col-span-1 md:col-span-4 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Monthly Overview</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Income</span>
                  <span className="font-medium">75%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-full w-3/4 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Expenses</span>
                  <span className="font-medium">45%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-full w-[45%] bg-red-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Savings</span>
                  <span className="font-medium">25%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-full w-1/4 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Navigation Item Component
function NavItem({ icon, text, active = false }) {
  return (
    <button
      className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
        active ? 'bg-white/10' : 'hover:bg-white/5'
      }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

export default App;