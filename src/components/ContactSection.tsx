import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Let's Start Your Project
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your idea into reality? Contact us for a free strategy session.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-700">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-700">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700">Phone</label>
                <Input type="tel" placeholder="+1 (555) 000-0000" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-700">Tell us about your project</label>
                <Textarea
                  placeholder="Describe your idea, goals, and timeline..."
                  rows={6}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                size="lg"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-gray-900 mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Email</div>
                  <a href="mailto:hello@syntrixinnovations.com" className="text-gray-600 hover:text-blue-600">
                    hello@syntrixinnovations.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Phone</div>
                  <a href="tel:+15550000000" className="text-gray-600 hover:text-purple-600">
                    +1 (555) 000-0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Office</div>
                  <p className="text-gray-600">
                    123 Innovation Street<br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                <h4 className="text-xl mb-2">
                  Free Strategy Session
                </h4>
                <p className="opacity-90">
                  Get expert advice tailored to your project. Book your free consultation today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
