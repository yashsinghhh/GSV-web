import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserButton, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { CheckCircle, StarIcon } from "lucide-react";

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

            {/* Image */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Global Smart Vision. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}