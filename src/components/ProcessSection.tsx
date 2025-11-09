import { MessageSquare, Pencil, Code, Rocket, HeartHandshake, Clock } from 'lucide-react';
import { Card } from './ui/card';

const processes = [
  {
    number: '01',
    title: 'Strategy Session & Idea Discussion',
    description: 'Our FREE strategy session is where we understand your goals, aspirations and your idea. We then provide a truck load of tailored advice on how to succeed.',
    estimatedTime: '1 week',
    icon: MessageSquare,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    title: 'Planning & Design',
    description: 'We then delve into detailed workshops to give you clarity on what you\'re going to get, a fixed cost, and the return on investment. You get a vision of the end result.',
    estimatedTime: '2-4 weeks',
    icon: Pencil,
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    title: 'Development',
    description: 'We get down and dirty, and start to build your idea to life. This is still a highly interactive process, with regular "sneak-peeks" into the product.',
    estimatedTime: 'Dependent on size of project',
    icon: Code,
    color: 'from-orange-500 to-red-500',
  },
  {
    number: '04',
    title: 'Go-Live & Training',
    description: 'All that planning, research, analysis, design, development… it all becomes "real". We hold your hand in launching your new app to the world (or wherever its new home may be).',
    estimatedTime: null,
    icon: Rocket,
    color: 'from-green-500 to-emerald-500',
  },
  {
    number: '05',
    title: 'Support, Maintenance & Continuous Improvement',
    description: 'We make sure that you and your new-born app gets the love and care it deserves: regular updates, maintenance, support, ongoing tweaks and fine-tuning.',
    estimatedTime: null,
    icon: HeartHandshake,
    color: 'from-indigo-500 to-purple-500',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
            Our Process
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            How Our Process Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven methodology to bring your vision to life, from concept to launch and beyond.
          </p>
        </div>

        <div className="space-y-8">
          {processes.map((process, index) => {
            const Icon = process.icon;
            return (
              <Card
                key={process.number}
                className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200"
              >
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  {/* Number and Icon */}
                  <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${process.color} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-6xl opacity-10">{process.number}</span>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-8 space-y-3">
                    <h3 className="text-2xl text-gray-900">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="md:col-span-2 flex md:justify-end">
                    {process.estimatedTime && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                        <Clock className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-700">{process.estimatedTime}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Connector line */}
                {index < processes.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
