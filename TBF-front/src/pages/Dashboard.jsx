import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-customColor-otherpagesbackground min-h-screen w-full flex flex-col items-center py-8">
      <div className="max-w-5xl bg-customColor-rmcardbackground rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="flex justify-between space-x-52 items-center mb-8">
          <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
            Start Monitoring
          </button>
          <h1 className="text-2xl font-semibold text-gray-700">REALTIME METRICS</h1>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Stop Monitoring
          </button>
        </div>
        
        <div className="flex justify-between">
        <div className="grid grid-cols-2 gap-14">
          <div className="bg-gray-100 p-4 rounded-md shadow flex flex-col items-center">
            <p className="font-medium text-gray-600">SPEED (RPM)</p>
            <div className="mt-2 text-2xl">⚙️</div>
          </div>
          <div className="bg-gray-100 p-4 rounded-md shadow flex flex-col items-center">
            <p className="font-medium text-gray-600">CURRENT DRAWN</p>
            <div className="mt-2 text-2xl">⚡</div>
          </div>
          <div className="bg-gray-100 p-4 rounded-md shadow flex flex-col items-center">
            <p className="font-medium text-gray-600">VIBRATION</p>
            <div className="mt-2 text-2xl">📳</div>
          </div>
          <div className="bg-gray-100 p-4 rounded-md shadow flex flex-col items-center">
            <p className="font-medium text-gray-600">AIR PRESSURE</p>
            <div className="mt-2 text-2xl">🌬️</div>
          </div>
          <div className="bg-gray-100 p-4 rounded-md shadow flex flex-col items-center">
            <p className="font-medium text-gray-600">TEMPERATURE</p>
            <div className="mt-2 text-2xl">🌡️</div>
          </div>
          <div className="bg-gray-100 p-4 rounded-md shadow flex flex-col items-center">
            <p className="font-medium text-gray-600">SENSORS PLACED</p>
            <div className="mt-2 text-2xl">🔧</div>
          </div>
          <div className="bg-gray-100 col-span-2 p-4 rounded-md shadow flex flex-col items-center">
          <p className="font-medium text-gray-600">PREDICTED FAULT</p>
          <div className="mt-2 text-2xl">❗</div>
        </div>
        </div>
        </div>

        {/* Footer Section */}
        
      </div>
    </div>
  );
};

export default Dashboard;
