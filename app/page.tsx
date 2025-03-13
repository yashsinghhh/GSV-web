import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      <div className="container mx-auto px-4 pt-24 flex items-center min-h-screen">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Right Skills for your needs!
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl">
              Empowering your potential with cutting-edge solutions and expert guidance.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 font-bold bg-blue-600 hover:bg-blue-700">
              Book an Appointment
            </Button>
          </div>

          {/* Right Image */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1641893823219-38b433f736c0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnVmYWN0dXJlfGVufDB8fDB8fHww" 
              alt="Manufacturing" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
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
                  35+ Years Experience
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
        
        <div className="grid grid-cols-3 gap-8">
          {/* Stamping Service */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
              <img 
                src="/api/placeholder/300/200" 
                alt="Stamping" 
                className="mx-auto rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Stamping</h3>
            <p className="text-gray-600 mb-6">
              Precision stamping solutions for your manufacturing needs.
            </p>
            <Button variant="outline" className="w-full">
              Read More
            </Button>
          </div>

          {/* Welding Service */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
              <img 
                src="/api/placeholder/300/200" 
                alt="Welding" 
                className="mx-auto rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Welding</h3>
            <p className="text-gray-600 mb-6">
              Advanced welding techniques for superior quality and durability.
            </p>
            <Button variant="outline" className="w-full">
              Read More
            </Button>
          </div>

          {/* Training Service */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="mb-4">
              <img 
                src="/api/placeholder/300/200" 
                alt="Training" 
                className="mx-auto rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Training</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive training programs to enhance your skills.
            </p>
            <Button variant="outline" className="w-full">
              Read More
            </Button>
          </div>
        </div>

        {/* Collaborative Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Let's discuss about how we can help make your business better
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