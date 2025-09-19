import { Users, Heart, Globe, BookOpen, HandHeart, Church, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function GetInvolved() {
  return (
    <div className="min-h-screen">
      {/* For Students */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Get Involved</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join our mission to welcome, serve, and build bridges between cultures. 
              There's a place for everyone in our community!
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For Students</h2>
              <p className="text-lg text-gray-600">Develop leadership skills while making a difference</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-purple-500">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-8 text-white">
                <div className="flex items-center">
                  <Users className="w-12 h-12 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">Student Leadership Opportunities</h3>
                    <p className="text-purple-100">Grow while you serve</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  It is a great opportunity to serve and develop leadership skills through ISCF. 
                  As a student leader, you'll gain valuable experience while helping create a 
                  welcoming community for your fellow international students.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">What You'll Do</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Help organize welcome events and Bible studies</li>
                      <li>• Mentor new international students</li>
                      <li>• Assist with campus outreach activities</li>
                      <li>• Support community building initiatives</li>
                      <li>• Participate in leadership training programs</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">What You'll Gain</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Valuable leadership experience</li>
                      <li>• Cross-cultural communication skills</li>
                      <li>• Event planning and organization abilities</li>
                      <li>• Strong network of friendships</li>
                      <li>• Personal and spiritual growth</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg border border-purple-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Ready to Lead?</h4>
                  <p className="text-gray-700 mb-4">
                    If you're interested in developing your leadership skills while making a positive 
                    impact in the international student community, we'd love to hear from you!
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    Contact Us to Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Volunteers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For Volunteers</h2>
              <p className="text-lg text-gray-600">Ways to serve, training opportunities, and partnership</p>
            </div>

            <div className="mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Volunteer Family</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Families and individuals are welcome to join us as Volunteers to serve the International 
                  student community. It is a great opportunity to use your gifts to bless an international 
                  student while enriching your own life through cross-cultural friendships.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-blue-500">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <Users className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold">Friendship Partners</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Be a friend to an international student. Share meals, explore the city together, 
                    and help them navigate American culture while learning about their background.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Perfect for:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Individuals and families</li>
                      <li>• Those who love meeting new people</li>
                      <li>• Anyone interested in other cultures</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-green-500">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                  <BookOpen className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold">English Partners</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Help international students improve their conversational English skills in a 
                    relaxed, friendly environment. No teaching experience required!
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Great for:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Native English speakers</li>
                      <li>• Patient and encouraging people</li>
                      <li>• Those who enjoy conversation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-yellow-500">
                <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6 text-white">
                  <Globe className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold">Event Assistants</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Help with our events including welcome banquets, Bible studies, and special 
                    celebrations. From setup to hospitality, every role matters!
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Ideal for:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• People who love hospitality</li>
                      <li>• Those with event experience</li>
                      <li>• Anyone wanting to help behind the scenes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Volunteer Training & Support</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What We Provide</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Orientation and cultural sensitivity training</li>
                    <li>• Ongoing support and guidance</li>
                    <li>• Regular volunteer appreciation events</li>
                    <li>• Flexible scheduling to fit your life</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Time Commitment</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• As little as 2-3 hours per month</li>
                    <li>• Flexible scheduling around your availability</li>
                    <li>• Seasonal opportunities available</li>
                    <li>• Long-term and short-term options</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Churches/Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Church className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For Churches & Partners</h2>
              <p className="text-lg text-gray-600">Partner with us to reach international students in your community</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 border border-indigo-200">
                <Church className="w-12 h-12 text-indigo-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Church Partnerships</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Partner with ISCF to extend your church's reach to the international community. 
                  We've been working with local churches since 1995 to create meaningful connections.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Partnership Opportunities:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Provide host families for international students</li>
                      <li>• Support our events with volunteers and resources</li>
                      <li>• Offer meeting spaces for our programs</li>
                      <li>• Sponsor welcome banquets and special events</li>
                      <li>• Provide English conversation partners</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                <Globe className="w-12 h-12 text-green-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Community Partners</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Join businesses, organizations, and community groups who support our mission 
                  to welcome and serve international students.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Ways to Partner:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Sponsor events and programs</li>
                      <li>• Provide internship opportunities</li>
                      <li>• Offer professional mentoring</li>
                      <li>• Donate goods for welcome packages</li>
                      <li>• Host cultural exchange events</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h3>
                <p className="text-lg text-indigo-100 mb-6">
                  Let's work together to create a welcoming community for international students. 
                  Contact us to discuss partnership opportunities.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-yellow-400 text-indigo-900 px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors font-semibold text-lg"
                >
                  Start a Partnership <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Give & Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Give & Support</h2>
              <p className="text-lg text-gray-600">Your generosity helps us continue welcoming international students from around the world with love, friendship, and genuine community</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-blue-500">
                <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">$25</h3>
                <p className="text-gray-700">
                  Provides welcome materials and resources for one international student from any country
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-green-500">
                <Globe className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">$50</h3>
                <p className="text-gray-700">
                  Sponsors refreshments for a weekly gathering, creating a welcoming atmosphere for international students
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-yellow-500">
                <Heart className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">$100</h3>
                <p className="text-gray-700">
                  Helps fund a cultural celebration event, bringing international students together across cultures
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-purple-500">
                <HandHeart className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">$250</h3>
                <p className="text-gray-700">
                  Supports a welcome banquet for 10 international students, including food and hospitality
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <Heart className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Financial Support</h3>
                <p className="text-gray-700 mb-6">
                  Your financial contributions help us provide programs, events, and resources that make 
                  international students feel welcome and supported in their new home.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Support welcome events and banquets
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Fund cultural celebration programs
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Provide resources for international students
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
                >
                  Learn How to Give
                </Link>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                <Users className="w-12 h-12 text-green-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Monthly Partners</h3>
                <p className="text-gray-700 mb-6">
                  Join our monthly giving program and provide consistent support for our ongoing ministry. 
                  Monthly partners are the backbone of our work, enabling us to plan and execute programs 
                  that serve international students throughout the year.
                </p>
                <div className="bg-white p-4 rounded-lg mb-6 border border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Monthly Partner Benefits:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Quarterly updates and international student stories</li>
                    <li>• Special partner appreciation events</li>
                    <li>• Direct connection with international student stories</li>
                    <li>• Easy online management of your giving</li>
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="block w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold text-center"
                >
                  Become a Monthly Partner
                </Link>
              </div>
            </div>

            <div className="bg-google-blue-50 rounded-xl p-8 border border-google-blue-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Every Gift Matters</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you give $5 or $500, your contribution directly impacts the lives of international 
                  students from around the world. Since 1995, generous supporters like you have helped us serve 
                  over 20,000 international students with love, friendship, and genuine community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}