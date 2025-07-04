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

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">Our Values</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">
                      <span className="font-medium">Customer-Centric Approach</span>
                      <p className="text-sm text-gray-500">Your success is our top priority</p>
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">
                      <span className="font-medium">Technical Excellence</span>
                      <p className="text-sm text-gray-500">Expert solutions for complex challenges</p>
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">
                      <span className="font-medium">Transparency & Integrity</span>
                      <p className="text-sm text-gray-500">Clear, honest communication</p>
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">
                      <span className="font-medium">Continuous Innovation</span>
                      <p className="text-sm text-gray-500">Always improving our services</p>
                    </span>
                  </li>
                </ul>
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
