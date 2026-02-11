import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome back, Shubham 👋</p>
      </header>

       
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Users</h2>
          <p className="text-3xl font-bold text-blue-600">1,245</p>
          <span className="text-sm text-gray-500">+15% this month</span>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
          <p className="text-3xl font-bold text-green-600">$12,340</p>
          <span className="text-sm text-gray-500">+8% this month</span>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-700">Active Projects</h2>
          <p className="text-3xl font-bold text-purple-600">27</p>
          <span className="text-sm text-gray-500">+3 new this week</span>
        </div>
      </section>

       
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6 h-64 flex items-center justify-center">
          <span className="text-gray-400">[Chart: User Growth]</span>
        </div>
        <div className="bg-white shadow rounded-lg p-6 h-64 flex items-center justify-center">
          <span className="text-gray-400">[Chart: Revenue Trend]</span>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
        <ul className="space-y-3">
          <li className="flex justify-between text-gray-600">
            <span>User <strong>Rahul</strong> signed up</span>
            <span className="text-sm text-gray-400">2h ago</span>
          </li>
          <li className="flex justify-between text-gray-600">
            <span>Project <strong>BondChat</strong> updated</span>
            <span className="text-sm text-gray-400">5h ago</span>
          </li>
          <li className="flex justify-between text-gray-600">
            <span>Payment received from <strong>Zerodha Clone</strong></span>
            <span className="text-sm text-gray-400">1d ago</span>
          </li>
        </ul>
      </section>

      {/* User Profile Summary */}
      <section className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Profile</h2>
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="rounded-full"
          />
          <div>
            <p className="text-lg font-bold text-gray-800">Shubham</p>
            <p className="text-gray-600">B.Tech CSE, MIT Moradabad</p>
            <p className="text-sm text-gray-500">Learning AI/ML & Full‑Stack Dev</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;