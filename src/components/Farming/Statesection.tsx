
import { fact } from '@/assests/Farming'
import React from 'react'
import { Typography } from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


const StatsSection = () => {
    const stats = [
      { id: 1, count: '15+', label: 'PLANT NURSERIES', icon: <LocalFloristIcon style={{ fontSize: 40 }} /> },
      { id: 2, count: '99+', label: 'ORGANIC ORCHARDS', icon: <AgricultureIcon style={{ fontSize: 40 }} /> },
      { id: 3, count: '365+', label: 'ENVIRONMENTALISTS', icon: <AgricultureIcon style={{ fontSize: 40 }} /> },
      { id: 4, count: '26+', label: 'YEARS OF FARMING', icon: <CalendarTodayIcon style={{ fontSize: 40 }} /> },
    ];


  return (
    <div className="relative">
  {/* Image as background */}
  <img
    src={fact.src} // Make sure fact.src contains the correct image path
    alt="Background Image"
    className="w-full h-auto object-cover rounded-lg"
  />

  {/* Overlay the stats on top of the image */}
  <div className="absolute inset-0 flex flex-col justify-center">
    <div className="relative z-10 max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(stat => (
          <div
            key={stat.id}
            className="flex flex-col items-center justify-center p-8 shadow-xl border border-spacing-7 text-white rounded-lg "
          >
            <div className="mb-2 text-4xl">{stat.icon}</div>
            <Typography variant="h6" component="h2" className="font-bold">
              {stat.count}
            </Typography>
            <Typography variant="body2" component="p" className="mt-1 text-[#9cc623] text-sm">
              {stat.label}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  )
}

export default StatsSection;