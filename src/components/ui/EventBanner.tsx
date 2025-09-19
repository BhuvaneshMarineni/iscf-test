'use client';

import { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const EventBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentEvent, setCurrentEvent] = useState(0);

  const events = [
    {
      title: "Weekly Bible Study",
      date: "Every Thursday",
      time: "7:00 PM - 8:00 PM",
      location: "ODU Campus",
      description: "Join us for fellowship and faith exploration",
      urgent: false
    },
    {
      title: "Spring Welcome Banquet",
      date: "March 15, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "University Center",
      description: "Welcome new international students!",
      urgent: true
    },
    {
      title: "Cultural Food Festival",
      date: "April 20, 2024",
      time: "5:00 PM - 8:00 PM",
      location: "Student Commons",
      description: "Celebrate diversity through food and culture",
      urgent: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [events.length]);

  if (!isVisible) return null;

  const event = events[currentEvent];

  return (
    <div className={`relative left-0 right-0 z-20 overflow-hidden ${
      event.urgent 
        ? 'bg-gradient-to-r from-red-600 to-pink-600' 
        : 'bg-gradient-to-r from-google-blue-600 to-indigo-700'
    } text-white shadow-lg`}>
      <div className="relative py-3">
        <div className="flex items-center animate-marquee whitespace-nowrap">
          <div className="flex items-center space-x-8 px-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">{event.title}</span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
            </div>
            
            <span className="text-sm opacity-90">
              {event.description}
            </span>
          </div>

          {/* Duplicate content for seamless loop */}
          <div className="flex items-center space-x-8 px-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">{event.title}</span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
            </div>
            
            <span className="text-sm opacity-90">
              {event.description}
            </span>
          </div>
        </div>

        {/* Fixed controls on the right */}
        <div className="absolute right-0 top-0 h-full flex items-center bg-gradient-to-l from-current to-transparent pl-8 pr-4">
          <div className="flex items-center space-x-3 bg-black/20 rounded-lg px-3 py-2">
            <Link
              href="/events"
              className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded text-xs font-medium transition-colors flex items-center space-x-1"
            >
              <span>More</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
              aria-label="Close banner"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-5000 ease-linear"
          style={{ width: `${((currentEvent + 1) / events.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default EventBanner;