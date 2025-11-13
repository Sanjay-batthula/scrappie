"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const formSchema = z.object({
  firstName: z.string().min(2),
  phone: z.string().min(10),
  streetAddress: z.string().min(5),
  apartment: z.string().optional(),
  city: z.string().min(2),
  state: z.string().min(2),
  zipCode: z.string().min(5),
  items: z.array(z.string()).min(1),
})

const scrapItems = [
  "Newspaper",
  "Books",
  "Gatta",
  "Magazine",
  "A4 Paper",
  "Plastic",
  "Iron",
  "Steel",
  "Aluminium",
  "Glass Bottle",
  "Brass",
  "Tyer",
]

export default function ScrapForm() {
  const [open, setOpen] = useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { items: [] },
  })

  async function onSubmit(values) {
    await fetch("https://script.google.com/macros/s/AKfycbwmTKaQjYH8_t6MExyurzWIdLBsYtHJ1TcOCnhF4L_LHbyyXUc7ZnFouzWMoIgcoV_C/exec", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" }
    })
    setOpen(true)
    form.reset()
  }

  return (
    <>
      <div className="min-h-screen py-12 px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Scrap Form</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField control={form.control} name="firstName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name *</FormLabel>
                    <FormControl><Input placeholder="Enter your first name" {...field} /></FormControl>
                  </FormItem>
                )} />

                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl><Input type="tel" placeholder="+91" {...field} /></FormControl>
                  </FormItem>
                )} />

                <FormField control={form.control} name="streetAddress" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Address *</FormLabel>
                    <FormControl><Input placeholder="E.g. 42 Wallaby Way" {...field} /></FormControl>
                  </FormItem>
                )} />

                <FormField control={form.control} name="apartment" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apartment</FormLabel>
                    <FormControl><Input placeholder="Optional" {...field} /></FormControl>
                  </FormItem>
                )} />

                <div className="grid grid-cols-2 gap-4">
                  <FormField control={form.control} name="city" render={({ field }) => (
                    <FormItem>
                      <FormLabel>City *</FormLabel>
                      <FormControl><Input placeholder="City" {...field} /></FormControl>
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="state" render={({ field }) => (
                    <FormItem>
                      <FormLabel>State *</FormLabel>
                      <FormControl><Input placeholder="State" {...field} /></FormControl>
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="zipCode" render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP Code *</FormLabel>
                    <FormControl><Input placeholder="E.g. 2000" {...field} /></FormControl>
                  </FormItem>
                )} />

                <FormField control={form.control} name="items" render={() => (
                  <FormItem>
                    <FormLabel>Select Items *</FormLabel>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {scrapItems.map((item) => (
                        <FormField key={item} control={form.control} name="items" render={({ field }) => (
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item)}
                                onCheckedChange={(checked) => {
                                  const updated = checked
                                    ? [...field.value, item]
                                    : field.value.filter((v) => v !== item)
                                  field.onChange(updated)
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{item}</FormLabel>
                          </FormItem>
                        )} />
                      ))}
                    </div>
                  </FormItem>
                )} />

                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Submitted Successfully</DialogTitle>
          </DialogHeader>
          <p>Your scrap pickup request has been recorded.</p>
          <Button className="mt-4 w-full" onClick={() => setOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}