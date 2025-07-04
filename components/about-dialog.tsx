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
      <AlertDialogContent className="max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-gray-900">About HelpGenie</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-700 space-y-4">
            <p>
            At HelpGenie, we believe that innovative developers should be free to focus on what they do best: 
            creating incredible games and essential applications. That's why we exist – to be your reliable "HelpGenie," 
            seamlessly managing the complexities of user support, application assistance, and technical troubleshooting.
            </p>
            <p>
              Our team of certified professionals brings years of experience we provide remote, world-class player 
              and app support services designed for game studios and application developers globally. We understand 
              the unique pulse of gaming communities, the intricate mechanics of various applications, and the critical 
              importance of empathetic, efficient, and technically sound interactions.
            </p>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900">Our Mission</h3>
              <p>
              To empower developers by delivering exceptional, scalable support that enhances user satisfaction, ensures 
              seamless app functionality, and drives long-term engagement and loyalty for your products.
              </p>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900">Our Values</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Customer-Centric Approach</li>
                <li>Technical Excellence</li>
                <li>Transparency and Integrity</li>
                <li>Continuous Innovation</li>
              </ul>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
