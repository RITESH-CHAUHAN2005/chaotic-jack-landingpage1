
import React from 'react';
import { Monitor, Code, Palette, Zap, TrendingUp, Users, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
      
      {/* Animated Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-transparent to-purple-500/30 animate-pulse-glow"></div>
      
      {/* Floating Background Shapes - Optimized */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float-slow blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float-delayed blur-xl"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-gradient-to-r from-pink-400/15 to-blue-400/15 rounded-full animate-float blur-xl"></div>
      </div>
      
      {/* Large Rotating Background Elements - Reduced for performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 text-white/10 animate-spin-slow">
          <Code size={60} />
        </div>
        <div className="absolute bottom-20 right-20 text-white/10 animate-spin-slow" style={{ animationDelay: '3s' }}>
          <Palette size={50} />
        </div>
        <div className="absolute top-1/2 left-10 text-white/10 animate-float">
          <Zap size={40} />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-white/10 animate-float-delayed">
          <Monitor size={70} />
        </div>
        <div className="absolute top-1/3 right-20 text-white/10 animate-spin-slow" style={{ animationDelay: '5s' }}>
          <TrendingUp size={45} />
        </div>
        <div className="absolute bottom-1/2 left-20 text-white/10 animate-float">
          <Users size={35} />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto">
        {/* Animated Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white mb-6 sm:mb-8 animate-fade-in px-4">
          <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            Chaotic Jack
          </span>
        </h1>
        
        {/* Subtitle with Animation */}
        <div className="animate-fade-in px-4" style={{ animationDelay: '200ms' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Monitor className="text-blue-300" size={24} />
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white text-center">
              Professional Websites That
            </h2>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6 sm:mb-8">
            Convert & Grow Your Business
          </h2>
        </div>
        
        {/* Updated Description */}
        <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in px-4" style={{ animationDelay: '400ms' }}>
          Get stunning, responsive websites optimized for both desktop and mobile that bring you more customers with cutting-edge design and modern technology.
        </p>
        
        {/* Enhanced Desktop Dashboard Mockup with Improved Professional Data */}
        <div className="relative mb-16 sm:mb-20 animate-fade-in px-4" style={{ animationDelay: '600ms' }}>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-3 sm:p-4 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-500 shadow-2xl">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-4 sm:p-8 relative overflow-hidden">
              {/* Browser Header */}
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex gap-1 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
              </div>
              
              {/* Dashboard Content */}
              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                {/* Header with Professional Stats */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-white/90 text-sm sm:text-lg font-semibold">Website Analytics Dashboard</div>
                  <div className="flex gap-2 sm:gap-4">
                    <div className="flex items-center gap-1 sm:gap-2 bg-white/20 rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                      <Users size={12} className="text-white/70" />
                      <span className="text-xs sm:text-sm text-white/80">12.8K</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 bg-white/20 rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                      <TrendingUp size={12} className="text-white/70" />
                      <span className="text-xs sm:text-sm text-white/80">+45%</span>
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6">
                  {/* Revenue Chart - Improved without overlapping values */}
                  <div className="bg-white/20 rounded-lg p-2 sm:p-3 col-span-1 sm:col-span-2">
                    <div className="flex items-center gap-1 sm:gap-2 mb-2">
                      <TrendingUp size={14} className="text-white/60" />
                      <div className="text-xs sm:text-sm text-white/70 font-semibold">Monthly Revenue</div>
                    </div>
                    <div className="flex items-end gap-1 h-12 sm:h-16 justify-center">
                      <div className="bg-blue-400/60 w-3 sm:w-4 h-6 sm:h-8 rounded-t animate-pulse"></div>
                      <div className="bg-purple-400/60 w-3 sm:w-4 h-8 sm:h-12 rounded-t animate-pulse" style={{ animationDelay: '200ms' }}></div>
                      <div className="bg-pink-400/60 w-3 sm:w-4 h-10 sm:h-14 rounded-t animate-pulse" style={{ animationDelay: '400ms' }}></div>
                      <div className="bg-blue-400/60 w-3 sm:w-4 h-7 sm:h-10 rounded-t animate-pulse" style={{ animationDelay: '600ms' }}></div>
                      <div className="bg-green-400/60 w-3 sm:w-4 h-12 sm:h-16 rounded-t animate-pulse" style={{ animationDelay: '800ms' }}></div>
                      <div className="bg-purple-400/60 w-3 sm:w-4 h-9 sm:h-13 rounded-t animate-pulse" style={{ animationDelay: '1000ms' }}></div>
                    </div>
                  </div>
                  
                  {/* Traffic Sources Pie Chart */}
                  <div className="bg-white/20 rounded-lg p-2 sm:p-3">
                    <div className="flex items-center gap-1 sm:gap-2 mb-2">
                      <Globe size={14} className="text-white/60" />
                      <div className="text-xs sm:text-sm text-white/70 font-semibold">Traffic Sources</div>
                    </div>
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-400/60 via-purple-400/60 to-pink-400/60 animate-spin-slow mx-auto"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs text-white/80 font-bold">85%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Professional Website Performance Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-3 sm:mt-4">
                  <div className="bg-white/15 rounded-lg p-2 text-center">
                    <div className="text-xs sm:text-sm text-white/60 mb-1">Monthly Visitors</div>
                    <div className="text-sm sm:text-lg font-bold text-white">28.5K</div>
                    <div className="text-xs text-green-300">+18%</div>
                  </div>
                  <div className="bg-white/15 rounded-lg p-2 text-center">
                    <div className="text-xs sm:text-sm text-white/60 mb-1">Revenue</div>
                    <div className="text-sm sm:text-lg font-bold text-white">₹4.2L</div>
                    <div className="text-xs text-green-300">+32%</div>
                  </div>
                  <div className="bg-white/15 rounded-lg p-2 text-center">
                    <div className="text-xs sm:text-sm text-white/60 mb-1">Conversion Rate</div>
                    <div className="text-sm sm:text-lg font-bold text-white">12.8%</div>
                    <div className="text-xs text-green-300">+5.2%</div>
                  </div>
                  <div className="bg-white/15 rounded-lg p-2 text-center">
                    <div className="text-xs sm:text-sm text-white/60 mb-1">Page Speed</div>
                    <div className="text-sm sm:text-lg font-bold text-green-300">98</div>
                    <div className="text-xs text-white/60">Score</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-4 h-4 sm:w-8 sm:h-8 bg-white/20 rounded-full animate-bounce-soft"></div>
              <div className="absolute top-1/2 -left-1 w-2 h-2 sm:w-4 sm:h-4 bg-white/30 rounded-full animate-float"></div>
            </div>
          </div>
        </div>

        {/* Professional Website Features with Enhanced Hover Animations */}
        <div className="animate-fade-in px-4 mb-16 sm:mb-20" style={{ animationDelay: '800ms' }}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                <Monitor size={20} className="sm:w-8 sm:h-8 text-white animate-float group-hover:animate-bounce-soft" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors">Responsive Design</h3>
              <p className="text-xs sm:text-sm text-gray-300 group-hover:text-gray-200 transition-colors">Perfect on all devices</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                <TrendingUp size={20} className="sm:w-8 sm:h-8 text-white animate-float-delayed group-hover:animate-spin-slow" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors">SEO Optimized</h3>
              <p className="text-xs sm:text-sm text-gray-300 group-hover:text-gray-200 transition-colors">Rank higher on Google</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                <Zap size={20} className="sm:w-8 sm:h-8 text-white animate-float-slow group-hover:animate-pulse" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-2 group-hover:text-pink-200 transition-colors">Fast Loading</h3>
              <p className="text-xs sm:text-sm text-gray-300 group-hover:text-gray-200 transition-colors">Lightning speed performance</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                <Users size={20} className="sm:w-8 sm:h-8 text-white animate-float group-hover:animate-float-delayed" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-2 group-hover:text-green-200 transition-colors">User Friendly</h3>
              <p className="text-xs sm:text-sm text-gray-300 group-hover:text-gray-200 transition-colors">Easy navigation & UX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
