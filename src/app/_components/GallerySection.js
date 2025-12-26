'use client'

import { useState } from 'react'

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState('moments')

  const galleries = {
    moments: [
      '/assets/images/abouttt.png',
      '/assets/images/pack-5.png',
      '/assets/images/modern.png'
    ],
    garden: [
      '/assets/images/banner-2.jpeg',
      '/assets/images/banner-3.jpeg',
      '/assets/images/resort-2.jpg'
    ],
    suites: [
      '/assets/images/resort-5.jpg',
      '/assets/images/resort-4.jpg',
      '/assets/images/bedroom.png'
    ],
    spa: [
      '/assets/images/spa.webp',
      '/assets/images/abut-2.png',
      '/assets/images/pack-3.png'
    ]
  }

  const tabs = [
    { id: 'moments', label: 'Moments' },
    { id: 'garden', label: 'Garden' },
    { id: 'suites', label: 'Suites' },
    { id: 'spa', label: 'Spa' }
  ]

  return (
    <>
      {/* Header Section */}
      <section className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm uppercase tracking-wider text-white/80 mb-2 inline-block">Visual Journey</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">Immersive Gallery</h2>
        </div>
      </section>

      {/* Tabs and Gallery */}
      <section className="bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/bg.jpg)' }}>
        {/* Tabs */}
        <div className="border-b border-gray-300">
          <div className="container mx-auto px-4">
            <ul className="flex gap-8 overflow-x-auto">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-2 font-semibold transition-colors whitespace-nowrap ${activeTab === tab.id
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-dark/70 hover:text-primary'
                      }`}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleries[activeTab].map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={image}
                  alt={`${activeTab} ${index + 1}`}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

