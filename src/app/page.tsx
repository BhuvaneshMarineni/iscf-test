'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Calendar, Heart, Users, Globe, ArrowRight, MapPin, Clock, Home as HomeIcon, Star, Quote, GraduationCap, Award, CheckCircle } from 'lucide-react';
import { getFeaturedTestimonials, getActivePrograms } from '@/lib/api';
import type { Testimonial, Program } from '@/lib/api';

export default function Home() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [testimonialsData, programsData] = await Promise.all([
          getFeaturedTestimonials(),
          getActivePrograms()
        ]);
        setTestimonials(testimonialsData);
        setPrograms(programsData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white min-h-[700px] flex items-center px-6 md:px-12 lg:px-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="container mx-auto px-8 md:px-12 lg:px-20 py-24">
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="relative inline-block mb-6">
                <HomeIcon className="w-20 h-20 mx-auto text-white drop-shadow-lg" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
                Welcome Home, <br />
                <span className="text-gray-300 drop-shadow-lg">International Students</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed max-w-3xl mx-auto font-light">
              Since 1995, we've been creating a warm community and home away from home 
              for international students at Old Dominion University through friendship, 
              <span className="text-gray-200 font-medium">faith, and genuine hospitality.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                href="/events"
                className="bg-white text-gray-900 px-10 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg flex items-center justify-center shadow-2xl transform hover:scale-105"
              >
                <Calendar className="mr-3 w-6 h-6" />
                Join Our Events <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg shadow-xl"
              >
                <Users className="mr-3 w-6 h-6 inline" />
                Our Story
              </Link>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8 max-w-2xl mx-auto border border-white/20 shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white p-2 rounded-full mr-3">
                  <Calendar className="w-6 h-6 text-gray-900" />
                </div>
                <p className="text-xl font-bold text-white">Next Bible Study</p>
              </div>
              <p className="text-white text-lg mb-2">
                <strong>Weekly Bible Study</strong> - Every Thursday, 7:00 PM - 8:00 PM
              </p>
              <p className="text-gray-200 text-sm">All students welcome, regardless of background or beliefs!</p>
              <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>ODU Campus</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>Open to All</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block mb-8">
              <Heart className="w-16 h-16 mx-auto text-red-500 drop-shadow-lg" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight">
              We Are So Glad You Are Here!
            </h2>
            <div className="text-xl text-gray-700 leading-relaxed space-y-6">
              <p>
                Since 1995, our heart has been to serve and walk alongside international students 
                as you study and experience life in the United States. Through the friendship and 
                hospitality of American families and individuals, you will find a warm community, 
                a home away from home, and people eager to share life.
              </p>
              <p>
                Here, you can ask questions, explore faith, learn about Jesus, and build lasting 
                relationships across cultures. We believe every student is uniquely gifted and 
                deeply valued, and we count it a joy to journey with you.
              </p>
              <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-blue-600 mr-3" />
                  <Heart className="w-8 h-8 text-red-500" />
                </div>
                <p className="text-2xl font-bold text-gray-700 mb-2">
                  No matter where you come from or what you believe,
                </p>
                <p className="text-2xl font-bold text-gray-800">
                  you are welcome here!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Quote className="w-12 h-12 text-blue-600 mr-3" />
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Student Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from international students whose lives have been transformed through 
              friendship, faith, and community at ISCF
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {loading ? (
              // Loading skeleton
              [...Array(3)].map((_, index) => (
                <div key={index} className="bg-gray-100 rounded-2xl p-8 shadow-xl border border-gray-200 animate-pulse">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                    <div className="ml-4 flex-1">
                      <div className="h-5 bg-gray-300 rounded mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    </div>
                  </div>
                  <div className="h-4 bg-gray-300 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>
              ))
            ) : (
              testimonials.map((testimonial, index) => {
                const colors = ['blue', 'green', 'purple'];
                const color = colors[index % colors.length];
                
                return (
                  <div key={testimonial.id} className={`bg-${color}-50 rounded-2xl p-8 shadow-xl border border-${color}-200 transform hover:scale-105 transition-all duration-300`}>
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600 font-medium">{testimonial.country} • {testimonial.program}</p>
                        <div className="flex text-gray-400 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <Quote className={`w-8 h-8 text-${color}-400 mb-4`} />
                    <p className="text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonial.testimonial}"
                    </p>
                    <div className="flex items-center text-sm text-gray-600">
                      {testimonial.status === 'Graduate' || testimonial.status === 'Alumni' ? (
                        <GraduationCap className="w-4 h-4 mr-2" />
                      ) : (
                        <Award className="w-4 h-4 mr-2" />
                      )}
                      <span>{testimonial.status} • {testimonial.currentPosition}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Share Your Story?</h3>
              <p className="text-gray-700 mb-6">
                We'd love to hear how ISCF has impacted your life and share your journey with others.
              </p>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 font-bold inline-flex items-center shadow-lg"
              >
                <Heart className="mr-2 w-5 h-5" />
                Share Your Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We Serve You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting international students with American families in friendship, faith, and community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-white border-2 border-blue-200 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-600 p-4 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-700 leading-relaxed">
                Connect with American families and build lasting friendships across cultures
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white border-2 border-red-200 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="bg-red-600 p-4 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg">
                <Heart className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Faith</h3>
              <p className="text-gray-700 leading-relaxed">
                Explore life's big questions and experience the love of Jesus in a welcoming environment
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white border-2 border-green-200 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="bg-green-600 p-4 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg">
                <Globe className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural Bridge</h3>
              <p className="text-gray-700 leading-relaxed">
                Navigate American culture with support from those who understand your journey
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white border-2 border-yellow-200 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="bg-yellow-600 p-4 rounded-full w-20 h-20 mx-auto mb-6 shadow-lg">
                <Calendar className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Events</h3>
              <p className="text-gray-700 leading-relaxed">
                Join weekly Bible studies, welcome banquets, and cultural celebrations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Award className="w-16 h-16 text-yellow-600 mr-4" />
              <Star className="w-12 h-12 text-yellow-600" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Our Impact Since 1995</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">Nearly three decades of serving the international student community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-xl">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">20,000+</div>
              <div className="text-2xl text-gray-900 font-semibold mb-2">Students Served</div>
              <div className="text-gray-600">From over 100 countries</div>
            </div>
            <div className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-xl">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">29</div>
              <div className="text-2xl text-gray-900 font-semibold mb-2">Years of Ministry</div>
              <div className="text-gray-600">Since 1995</div>
            </div>
            <div className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-xl">
              <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">1,000+</div>
              <div className="text-2xl text-gray-900 font-semibold mb-2">Welcome Banquet Attendees</div>
              <div className="text-gray-600">In a single event</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get Started Today</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose how you'd like to connect with our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <Link
              href="/events"
              className="block p-10 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-all duration-300 border-2 border-blue-200 group shadow-xl transform hover:scale-105"
            >
              <div className="bg-blue-600 p-4 rounded-full w-20 h-20 mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <Calendar className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Events</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Weekly Bible studies, welcome banquets, and cultural celebrations
              </p>
              <div className="text-gray-600 font-bold flex items-center text-lg">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/get-involved"
              className="block p-10 bg-green-50 rounded-2xl hover:bg-green-100 transition-all duration-300 border-2 border-green-200 group shadow-xl transform hover:scale-105"
            >
              <div className="bg-green-600 p-4 rounded-full w-20 h-20 mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Volunteer opportunities for students, families, and church partners
              </p>
              <div className="text-gray-600 font-bold flex items-center text-lg">
                Start Serving <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/contact"
              className="block p-10 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-all duration-300 border-2 border-purple-200 group shadow-xl transform hover:scale-105"
            >
              <div className="bg-purple-600 p-4 rounded-full w-20 h-20 mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <MapPin className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect With Us</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Get in touch, ask questions, or visit us at Old Dominion University
              </p>
              <div className="text-gray-600 font-bold flex items-center text-lg">
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Current Programs Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-12 h-12 text-blue-600 mr-3" />
                <Calendar className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Current Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Regular opportunities to connect and grow together</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {loading ? (
                // Loading skeleton for programs
                [...Array(4)].map((_, index) => (
                  <div key={index} className="bg-gray-100 p-10 rounded-2xl border-2 border-gray-200 shadow-xl animate-pulse">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mb-6"></div>
                    <div className="h-8 bg-gray-300 rounded mb-4"></div>
                    <div className="space-y-2 mb-6">
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    </div>
                    <div className="h-12 bg-gray-300 rounded"></div>
                  </div>
                ))
              ) : (
                programs.slice(0, 4).map((program, index) => {
                  const colors = [
                    { bg: 'blue', icon: Clock },
                    { bg: 'green', icon: Users },
                    { bg: 'red', icon: Heart },
                    { bg: 'yellow', icon: Globe }
                  ];
                  const colorConfig = colors[index % colors.length];
                  const IconComponent = colorConfig.icon;
                  
                  return (
                    <div key={program.id} className={`bg-${colorConfig.bg}-50 p-10 rounded-2xl border-2 border-${colorConfig.bg}-200 shadow-xl`}>
                      <div className={`bg-${colorConfig.bg}-600 p-4 rounded-full w-16 h-16 mb-6 shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{program.title}</h3>
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        {program.description.length > 120 
                          ? `${program.description.substring(0, 120)}...` 
                          : program.description
                        }
                      </p>
                      <div className="bg-white p-4 rounded-xl border border-gray-200">
                        <div className="text-gray-600 font-bold text-lg flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          <span>{program.schedule}</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}