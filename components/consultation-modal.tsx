"use client"

import type React from "react"
import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, Mail, Building, MessageSquare } from "lucide-react"
import { scheduleConsultation } from "../actions/schedule-consultation"

interface ConsultationModalProps {
  children: React.ReactNode
}

export function ConsultationModal({ children }: ConsultationModalProps) {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [formState, setFormState] = useState<{ success?: boolean; message?: string }>({})

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget;
    const formData = new FormData(form)
    
    startTransition(async () => {
      const result = await scheduleConsultation(null, formData)
      setFormState(result)
      
      if (result.success) {
        // Reset form fields
        form.reset();
        
        // Close the modal after successful submission
        setTimeout(() => {
          setOpen(false)
          setFormState({})
        }, 3000)
      }
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[95%] md:max-w-2xl lg:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl">Schedule a Consultation</DialogTitle>
          <DialogDescription className="text-sm md:text-base">
            Fill out the form below and we'll get back to you soon to confirm your consultation.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-2 px-1">
          {/* Success/Error Message */}
          {formState.message && (
            <div className={`p-3 rounded-md text-sm ${
              formState.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {formState.message}
            </div>
          )}

          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="pl-10 w-full"
                  placeholder="John"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="pl-10 w-full"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
          </div>

          {/* Email and Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="pl-10 w-full"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="company"
                  name="company"
                  type="text"
                  className="pl-10 w-full"
                  placeholder="Acme Inc."
                />
              </div>
            </div>
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone" 
              name="phone" 
              type="tel" 
              placeholder="+1 (555) 123-4567" 
              className="w-full"
            />
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="preferredDate">Preferred Date *</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  className="pl-10 w-full"
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredTime">Preferred Time *</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="preferredTime"
                  name="preferredTime"
                  type="time"
                  className="pl-10 w-full"
                  required
                  onChange={(e) => {
                    const time = e.target.value;
                    if (time) {
                      const [hours, minutes] = time.split(':');
                      const date = new Date();
                      date.setHours(parseInt(hours, 10));
                      date.setMinutes(parseInt(minutes, 10));
                      
                      const formattedTime = date.toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                      });
                      
                      e.target.setAttribute('data-formatted-time', formattedTime);
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Timezone */}
          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone *</Label>
            <Select name="timezone" required>
              <SelectTrigger>
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="EST">Eastern Time (ET)</SelectItem>
                <SelectItem value="CT">Central Time (CT)</SelectItem>
                <SelectItem value="MT">Mountain Time (MT)</SelectItem>
                <SelectItem value="PT">Pacific Time (PT)</SelectItem>
                <SelectItem value="IST">Indian Standard Time (IST)</SelectItem>
                <SelectItem value="UTC">UTC</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Tell us about your IT needs</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Describe your current IT challenges, team size, and what kind of support you're looking for..."
              className="min-h-[100px] w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <Button 
              type="submit" 
              disabled={isPending}
              className="w-full sm:w-auto px-6 py-2 text-base"
            >
              {isPending ? 'Submitting...' : 'Schedule Consultation'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
