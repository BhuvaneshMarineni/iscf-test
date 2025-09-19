'use client';

import { useState, useEffect, useCallback } from 'react';
import { Shield, Users, Calendar, Camera, Settings, LogOut, Eye, Edit, Trash2, Plus, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

// Type definitions
interface Event {
  id: number;
  title: string;
  date: string;
  status: string;
  attendees: number;
}

interface Photo {
  id: number;
  title: string;
  category: string;
  date: string;
  count: number;
}

interface Program {
  id: number;
  title: string;
  schedule: string;
  status: string;
  participants: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const { isLoggedIn, user, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState('overview');
  const [events, setEvents] = useState<Event[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  // Redirect if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/admin/login');
    }
  }, [isLoggedIn, router]);

  // Fetch data from APIs
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [eventsRes, galleryRes, programsRes] = await Promise.all([
        fetch('/api/events'),
        fetch('/api/gallery'),
        fetch('/api/programs')
      ]);
      
      const eventsData = await eventsRes.json();
      const galleryData = await galleryRes.json();
      const programsData = await programsRes.json();
      
      setEvents(eventsData.map((e: any) => ({
        id: e.id,
        title: e.title,
        date: e.date,
        status: e.status,
        attendees: e.currentAttendees || 0
      })));
      
      setPhotos(galleryData.map((g: any) => ({
        id: g.id,
        title: g.title,
        category: g.category,
        date: g.date,
        count: g.images?.length || 0
      })));
      
      setPrograms(programsData.map((p: any) => ({
        id: p.id,
        title: p.title,
        schedule: p.schedule,
        status: p.status,
        participants: p.currentParticipants || 0
      })));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn, fetchData]);

  // Calculate stats with proper typing
  const getStats = () => [
    { label: 'Total Events', value: events.length.toString(), icon: Calendar, color: 'blue' },
    { label: 'Gallery Albums', value: photos.length.toString(), icon: Camera, color: 'green' },
    { label: 'Active Programs', value: (programs as Program[]).filter(p => p.status === 'active').length.toString(), icon: Users, color: 'purple' },
    { label: 'Total Participants', value: (programs as Program[]).reduce((sum, p) => sum + p.participants, 0).toString(), icon: BarChart3, color: 'orange' },
  ];

  const stats = getStats();

  const deleteEvent = async (id: number) => {
    if (confirm('Are you sure you want to delete this event?')) {
      try {
        const response = await fetch(`/api/events/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setEvents(events.filter(e => e.id !== id));
          // Trigger data refresh on events page
          localStorage.setItem('admin-data-updated', Date.now().toString());
          window.dispatchEvent(new CustomEvent('admin-data-updated'));
        }
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  const deletePhoto = async (id: number) => {
    if (confirm('Are you sure you want to delete this photo album?')) {
      try {
        const response = await fetch(`/api/gallery/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setPhotos(photos.filter(p => p.id !== id));
          // Trigger data refresh on events page
          localStorage.setItem('admin-data-updated', Date.now().toString());
          window.dispatchEvent(new CustomEvent('admin-data-updated'));
        }
      } catch (error) {
        console.error('Error deleting photo album:', error);
      }
    }
  };

  const deleteProgram = async (id: number) => {
    if (confirm('Are you sure you want to delete this program?')) {
      try {
        const response = await fetch(`/api/programs/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setPrograms(programs.filter(p => p.id !== id));
          // Trigger data refresh on events page
          localStorage.setItem('admin-data-updated', Date.now().toString());
          window.dispatchEvent(new CustomEvent('admin-data-updated'));
        }
      } catch (error) {
        console.error('Error deleting program:', error);
      }
    }
  };

  const toggleProgramStatus = async (id: number) => {
    const program = programs.find(p => p.id === id);
    if (!program) return;
    
    const newStatus = program.status === 'active' ? 'paused' : 'active';
    
    try {
      const response = await fetch(`/api/programs/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (response.ok) {
        setPrograms(programs.map(p => 
          p.id === id ? { ...p, status: newStatus } : p
        ));
        // Trigger data refresh on events page
        localStorage.setItem('admin-data-updated', Date.now().toString());
        window.dispatchEvent(new CustomEvent('admin-data-updated'));
      }
    } catch (error) {
      console.error('Error updating program status:', error);
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/admin/login');
  };

  if (!isLoggedIn) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Shield className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ISCF Admin</h1>
                <p className="text-sm text-gray-600">Welcome, {user?.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Eye className="w-5 h-5 inline mr-2" />
                View Site
              </Link>
              <button 
                onClick={handleLogout}
                className="text-red-600 hover:text-red-700 px-3 py-2 rounded-lg hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-5 h-5 inline mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: Settings },
              { id: 'events', label: 'Events', icon: Calendar },
              { id: 'gallery', label: 'Gallery', icon: Camera },
              { id: 'programs', label: 'Programs', icon: Users },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                      <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/admin/events/add"
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <Plus className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Add Event</h3>
                    <p className="text-sm text-gray-600">Create a new event</p>
                  </div>
                </div>
              </Link>

              <Link
                href="/admin/gallery/upload"
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors">
                    <Plus className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Upload Photos</h3>
                    <p className="text-sm text-gray-600">Add to gallery</p>
                  </div>
                </div>
              </Link>

              <Link
                href="/admin/programs/add"
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-purple-100 group-hover:bg-purple-200 transition-colors">
                    <Plus className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Add Program</h3>
                    <p className="text-sm text-gray-600">Create new program</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Manage Events</h2>
              <Link
                href="/admin/events/add"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Event
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Event
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Attendees
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {events.map((event) => (
                      <tr key={event.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{event.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{event.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            event.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                            event.status === 'active' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {event.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{event.attendees}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-700">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => deleteEvent(event.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Manage Gallery</h2>
              <Link
                href="/admin/gallery/upload"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Upload Photos
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {photos.map((photo) => (
                <div key={photo.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="aspect-square bg-gray-200 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-1">{photo.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{photo.category}</p>
                    <p className="text-xs text-gray-500 mb-2">{photo.date} • {photo.count} photos</p>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-blue-50 text-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-100 transition-colors">
                        Edit
                      </button>
                      <button 
                        onClick={() => deletePhoto(photo.id)}
                        className="flex-1 bg-red-50 text-red-600 px-3 py-1 rounded text-sm hover:bg-red-100 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Programs Tab */}
        {activeTab === 'programs' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Manage Programs</h2>
              <Link
                href="/admin/programs/add"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Program
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.map((program) => (
                <div key={program.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{program.title}</h3>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => toggleProgramStatus(program.id)}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          program.status === 'active' 
                            ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        } transition-colors`}
                      >
                        {program.status === 'active' ? 'Pause' : 'Activate'}
                      </button>
                      <button className="text-blue-600 hover:text-blue-700">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => deleteProgram(program.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{program.schedule}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className={`px-2 py-1 rounded-full ${
                      program.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {program.status}
                    </span>
                    <span>{program.participants} participants</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}