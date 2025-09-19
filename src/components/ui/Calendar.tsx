'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import type { Event } from '@/lib/api';

interface CalendarProps {
  events: Event[];
  onEventClick?: (event: Event) => void;
}

const Calendar = ({ events, onEventClick }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const today = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  // Get first day of month and number of days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const firstDayWeekday = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();
  
  // Get previous month's last days to fill the grid
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Navigate months
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };
  
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };
  
  const goToToday = () => {
    setCurrentDate(new Date());
  };
  
  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateString);
  };
  
  // Handle event click with scroll prevention
  const handleEventClick = (event: Event) => {
    if (onEventClick) {
      onEventClick(event);
      // Prevent body scroll when modal opens
      document.body.style.overflow = 'hidden';
    }
  };

  // Generate calendar days
  const calendarDays = [];
  
  // Previous month's days
  for (let i = firstDayWeekday - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    const date = new Date(currentYear, currentMonth - 1, day);
    calendarDays.push({
      date,
      day,
      isCurrentMonth: false,
      isToday: false,
      events: getEventsForDate(date)
    });
  }
  
  // Current month's days
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day);
    const isToday = date.toDateString() === today.toDateString();
    calendarDays.push({
      date,
      day,
      isCurrentMonth: true,
      isToday,
      events: getEventsForDate(date)
    });
  }
  
  // Next month's days to fill the grid
  const remainingDays = 42 - calendarDays.length; // 6 rows × 7 days
  for (let day = 1; day <= remainingDays; day++) {
    const date = new Date(currentYear, currentMonth + 1, day);
    calendarDays.push({
      date,
      day,
      isCurrentMonth: false,
      isToday: false,
      events: getEventsForDate(date)
    });
  }
  
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Calendar Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={goToPreviousMonth}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold">
              {monthNames[currentMonth]} {currentYear}
            </h2>
          </div>
          
          <button
            onClick={goToNextMonth}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={goToToday}
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
          >
            Today
          </button>
        </div>
      </div>
      
      {/* Day Names */}
      <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
        {dayNames.map((dayName) => (
          <div key={dayName} className="p-3 text-center font-semibold text-gray-700 text-sm">
            {dayName}
          </div>
        ))}
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7">
        {calendarDays.map((calendarDay, index) => (
          <div
            key={index}
            className={`min-h-[100px] p-2 border-b border-r border-gray-100 ${
              !calendarDay.isCurrentMonth ? 'bg-gray-50' : 'bg-white'
            } hover:bg-blue-50 transition-colors`}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-sm font-medium ${
                    calendarDay.isToday
                      ? 'bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center'
                      : calendarDay.isCurrentMonth
                      ? 'text-gray-900'
                      : 'text-gray-400'
                  }`}
                >
                  {calendarDay.day}
                </span>
                {calendarDay.events.length > 0 && (
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                )}
              </div>
              
              {/* Events for this day */}
              <div className="flex-1 space-y-1">
                {calendarDay.events.length > 0 && (
                  <div className="space-y-1">
                    {calendarDay.events.map((event, index) => (
                      <button
                        key={event.id}
                        onClick={() => handleEventClick(event)}
                        className="w-full text-left p-1 bg-blue-100 hover:bg-blue-200 rounded text-xs text-blue-800 transition-colors block"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium truncate flex-1 mr-1">
                            {event.title}
                          </span>
                          <span className="text-blue-600 text-xs whitespace-nowrap">
                            {event.time}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;