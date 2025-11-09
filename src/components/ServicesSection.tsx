import { Smartphone, Globe, Palette, Code, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';
import { Card } from './ui/card';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
  },
  {
    icon: Globe,
    title: 'Web App Development',
    description: 'Scalable, responsive web applications built with modern technologies and best practices.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Beautiful, intuitive designs that engage users and drive conversions.',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs and workflows.',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Lead Generation',
    description: 'Drive organic traffic and convert visitors into qualified leads with proven strategies.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Comprehensive testing to ensure your product is reliable, secure, and bug-free.',
  },
  {
    icon: Sparkles,
    title: 'Emerging Technologies',
    description: 'Stay ahead with AI, blockchain, IoT, and other cutting-edge technologies.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full mb-4">
            What We Do
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to power your digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
