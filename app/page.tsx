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
import { auth } from "@clerk/nextjs/server";
import { CheckCircle, StarIcon, PhoneIcon } from "lucide-react";

export default async function Home() {
  const { userId } = await auth();

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
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">About Us</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">Services</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">Training</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">Products</a>
            
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
      <div className="relative bg-black text-white">
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
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-12 items-center">
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

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
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

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* First Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Benefits</h2>
            
            <div className="grid grid-cols-3 gap-8 mb-12">
              {[
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=60",
                "https://images.unsplash.com/photo-1517048676732-d65bc9c4233c?w=900&auto=format&fit=crop&q=60",
                "https://images.unsplash.com/photo-1460925895917-9fdaeffb8def?w=900&auto=format&fit=crop&q=60"
              ].map((imageUrl, index) => (
                <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={imageUrl} 
                    alt={`Benefit ${index + 1}`} 
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-gray-600">
                      Benefit {index + 1} description goes here. Short and compelling text about the benefit.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Video and Appointment Section */}
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
                <span className="text-2xl font-bold text-gray-700">VIDEO</span>
              </div>
              
              <div className="flex items-center justify-center">
                <Button 
                  size="lg" 
                  className="w-full max-w-md bg-blue-600 hover:bg-blue-700 text-white text-xl py-6"
                >
                  Book an Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-2 p-8 gap-8">
            {/* Left Side - Images */}
            <div className="space-y-8">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a8?w=900&auto=format&fit=crop&q=60" 
                  alt="Main Image" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                {[
                  "https://images.unsplash.com/photo-1573496359119-9a0e9dbcs94?w=900&auto=format&fit=crop&q=60",
                  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&auto=format&fit=crop&q=60"
                ].map((imageUrl, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={imageUrl} 
                      alt={`Secondary Image ${index + 1}`} 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Text and Features */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Most Reliable Efficient Consultancy Agency
                </h3>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Fast Growing",
                    "Expert Planners",
                    "Quality Service",
                    "Quality Products"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-blue-600" />
                      <span className="text-gray-800 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Boost Your Business Section */}
              <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
                <PhoneIcon className="text-blue-600" size={24} />
                <span className="text-blue-800 text-xl font-semibold">
                  Boost Your Business
                </span>
              </div>
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