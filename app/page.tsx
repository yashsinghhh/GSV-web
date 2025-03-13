"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { UserButton, SignInButton } from "@clerk/nextjs";
import { CheckCircle, StarIcon, PhoneIcon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { useAuth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-black">GSV</span>
            <span className="text-lg text-gray-700">GLOBAL SMART VISION</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <ScrollLink 
              to="home" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink 
              to="about" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
            >
              About Us
            </ScrollLink>
            <ScrollLink 
              to="portfolio" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Portfolio
            </ScrollLink>
            <ScrollLink 
              to="services" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Services
            </ScrollLink>
            <ScrollLink 
              to="training" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Training
            </ScrollLink>
            <ScrollLink 
              to="products" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Products
            </ScrollLink>
            <ScrollLink 
              to="benefits" 
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Benefits
            </ScrollLink>
            
            {userId ? (
              <UserButton afterSignOutUrl="/"/>
            ) : (
              <SignInButton>
                <Button variant="outline">Sign In</Button>
              </SignInButton>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative bg-black text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex items-center min-h-[70vh]">
          <div className="w-full max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
              Stay Ahead on Manufacturing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Dive deep with expert insights on the forces shaping industrial innovation. From advanced manufacturing techniques to AI and automation, hear the latest perspectives from Global Smart Vision experts.
            </p>
            <Button 
              size="lg" 
              className="text-base px-8 py-4 font-semibold bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Our Solutions
            </Button>
          </div>
        </div>
        
        {/* Overlaid letters */}
        <div className="absolute top-0 right-0 text-[200px] md:text-[300px] font-bold opacity-10 text-white select-none pointer-events-none">
          GSV
        </div>
      </div>

      {/* Solutions Section */}
      <div id="about" className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                We provide the best solution in town
              </h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum.
              </p>
            </div>
            
            {/* Checkmark Points */}
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <CheckCircle className="text-blue-600" />
                  <span className="text-gray-800">
                    Point {item} - Add your content here
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Card and Image */}
          <div className="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1641893823219-38b433f736c0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnVmYWN0dXJlfGVufDB8fDB8fHww" 
              alt="Manufacturing" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
            
            {/* Experience Card */}
            <Card className="hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <StarIcon className="text-blue-600" size={24} />
                </div>
                <CardTitle className="m-0 text-2xl font-bold">
                  25+ Years Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our team of seasoned experts brings decades of combined industry knowledge to solve your most challenging problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Portfolio Section - Added placeholder */}
      <div id="portfolio" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Portfolio</h2>
          <p className="text-gray-600 text-center mb-12">
            Explore our past projects and success stories
          </p>
          {/* Portfolio content would go here */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                  <p className="text-gray-600">Description for project {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        </div>
        
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {[
              {
                title: "Stamping",
                description: "Precision stamping solutions for your manufacturing needs.",
                imageUrl: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=900&auto=format&fit=crop&q=60"
              },
              {
                title: "Welding",
                description: "Advanced welding techniques for superior quality and durability.",
                imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&auto=format&fit=crop&q=60"
              },
              {
                title: "Training",
                description: "Comprehensive training programs to enhance your skills.",
                imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&auto=format&fit=crop&q=60"
              },
              {
                title: "Design",
                description: "Innovative design solutions tailored to your specific requirements.",
                imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&auto=format&fit=crop&q=60"
              },
              {
                title: "Consulting",
                description: "Expert consulting to optimize your manufacturing processes.",
                imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&auto=format&fit=crop&q=60"
              }
            ].map((service, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Collaborative Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Let's discuss how we can help make your business better
          </h3>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Let's Work Together
          </Button>
        </div>
      </div>

      {/* Training Section - Added placeholder */}
      <div id="training" className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Training Programs</h2>
          <p className="text-gray-600 text-center mb-12">
            Enhance your skills with our specialized training programs
          </p>
          {/* Training content would go here */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden p-6">
                <h3 className="text-xl font-bold mb-4">Training Program {item}</h3>
                <p className="text-gray-600 mb-4">Description for training program {item}</p>
                <Button variant="outline">Learn More</Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section - Added placeholder */}
      <div id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Products</h2>
          <p className="text-gray-600 text-center mb-12">
            Discover our innovative products designed for your business needs
          </p>
          {/* Products content would go here */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Product {item}</h3>
                  <p className="text-gray-600 text-sm mb-3">Description for product {item}</p>
                  <Button variant="outline" size="sm" className="w-full">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Why Choose Global Smart Vision</h2>
            <div className="mt-4 h-1 w-24 bg-blue-600 mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600">
              We combine industry expertise with cutting-edge technology to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Industry Experience",
                description: "Over 25 years of manufacturing expertise delivering time-tested solutions across multiple industries.",
                icon: "🏭",
                imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=60"
              },
              {
                title: "Innovative Technology",
                description: "Leveraging the latest advancements in AI and automation to streamline your manufacturing processes.",
                icon: "💡",
                imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc9c4233c?w=900&auto=format&fit=crop&q=60"
              },
              {
                title: "Dedicated Support",
                description: "Our team of specialists provides ongoing consultation and support to ensure your long-term success.",
                icon: "🤝",
                imageUrl: "https://images.unsplash.com/photo-1460925895917-9fdaeffb8def?w=900&auto=format&fit=crop&q=60"
              }
            ].map((benefit, index) => (
              <div key={index} className="group flex flex-col h-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-4xl">{benefit.icon}</span>
                  </div>
                  <img
                    src={benefit.imageUrl}
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 flex-grow mb-4">
                    {benefit.description}
                  </p>
                  <div className="h-1 w-12 bg-blue-600 transition-all duration-300 group-hover:w-16"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-blue-900 text-white p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-6">See how we transform businesses</h3>
              <p className="text-blue-100 mb-8">
                Watch our short video to learn how our solutions have helped manufacturing companies increase efficiency by up to 40% and reduce operational costs.
              </p>
              <Button 
                variant="outline" 
                className="border-white text-black hover:bg-white hover:text-blue-900 transition-colors w-fit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                </svg>
                Watch Video
              </Button>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ready to optimize your operations?</h3>
              <p className="text-gray-600 mb-8">
                Schedule a free consultation with our experts to discover how our solutions can be tailored to your specific manufacturing needs.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium w-full md:w-auto"
              >
                Book Your Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Global Smart Vision. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}