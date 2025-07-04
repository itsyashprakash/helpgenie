"use client";

import * as React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

export function AboutDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="sm:max-w-[90%] md:max-w-3xl max-h-[90vh] overflow-y-auto">
        <AlertDialogHeader className="px-1">
          <AlertDialogTitle className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
            About HelpGenie
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-700 space-y-4 text-sm md:text-base">
            <div className="space-y-4">
              <p className="leading-relaxed">
                At HelpGenie, we believe that innovative developers should be free to focus on what they do best: 
                creating incredible games and essential applications. That's why we exist – to be your reliable "HelpGenie," 
                seamlessly managing the complexities of user support, application assistance, and technical troubleshooting.
              </p>
              
              <p className="leading-relaxed">
                Our team of certified professionals brings years of experience we provide remote, world-class player 
                and app support services designed for game studios and application developers globally. We understand 
                the unique pulse of gaming communities, the intricate mechanics of various applications, and the critical 
                importance of empathetic, efficient, and technically sound interactions.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-700">
                  To empower developers by delivering exceptional, scalable support that enhances user satisfaction, ensures 
                  seamless app functionality, and drives long-term engagement and loyalty for your products.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center px-2">Our Values</h3>
                <div className="space-y-3 px-1">
                  <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-50 p-2 rounded-lg flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-[15px] font-semibold text-gray-900">Customer-Centric</h4>
                        <p className="text-[13px] text-gray-600 mt-1">Your success is our top priority in every interaction</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-50 p-2 rounded-lg flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-[15px] font-semibold text-gray-900">Technical Excellence</h4>
                        <p className="text-[13px] text-gray-600 mt-1">Expert solutions for complex technical challenges</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-50 p-2 rounded-lg flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-[15px] font-semibold text-gray-900">Transparency</h4>
                        <p className="text-[13px] text-gray-600 mt-1">Clear, honest, and open communication</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-50 p-2 rounded-lg flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.793.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-[15px] font-semibold text-gray-900">Innovation</h4>
                        <p className="text-[13px] text-gray-600 mt-1">Continuously improving our services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Why Choose Us?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                    <h4 className="font-medium text-gray-900 mb-1">24/7 Support</h4>
                    <p className="text-sm text-gray-600">Round-the-clock assistance for your users</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                    <h4 className="font-medium text-gray-900 mb-1">Global Coverage</h4>
                    <p className="text-sm text-gray-600">Supporting users across all timezones</p>
                  </div>
                </div>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4 px-1">
          <AlertDialogCancel className="w-full sm:w-auto">Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
