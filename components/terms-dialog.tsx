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

export function TermsDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-gray-900">Terms of Service</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-700 space-y-6">
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h3>
              <p className="text-gray-700">
                By accessing or using the services provided by HelpGenie, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Service Description</h3>
              <p className="text-gray-700">
                HelpGenie provides support services including but not limited to application support, technical support, 
                and player support. We reserve the right to modify or discontinue any service at any time without notice.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. User Responsibilities</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Provide accurate and complete information when using our services</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Payment and Billing</h3>
              <p className="text-gray-700">
                All fees for services are as specified in your service agreement. You agree to pay all applicable fees 
                and taxes. Late payments may be subject to additional charges.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Limitation of Liability</h3>
              <p className="text-gray-700">
                HelpGenie shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                or any loss of profits or revenues, whether incurred directly or indirectly.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Changes to Terms</h3>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. We will provide notice of any changes by posting 
                the updated terms on our website. Your continued use of our services constitutes acceptance of the updated terms.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm text-gray-600">
                If you have any questions about these Terms of Service, please contact us at helpgenie.contact@gmail.com
              </p>
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
