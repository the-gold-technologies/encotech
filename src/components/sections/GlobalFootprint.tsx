import React, { useCallback, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line } from
'react-simple-maps';
import { MapPinIcon, BuildingIcon, PhoneIcon } from 'lucide-react';
const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
interface Location {
  name: string;
  coordinates: [number, number];
  region: string;
  address: string;
  suite: string;
  phone: string;
}
const locations: Location[] = [
// India — Headquarters
{
  name: 'Noida (HQ)',
  coordinates: [77.39, 28.58],
  region: 'India',
  address: 'Corporate Headquarters',
  suite: 'Noida, Uttar Pradesh',
  phone: '+91 120 555 0100'
},
// India — Key Locations
{
  name: 'New Delhi',
  coordinates: [77.21, 28.61],
  region: 'India',
  address: 'Regional Office',
  suite: 'New Delhi, India',
  phone: '+91 11 555 0200'
},
{
  name: 'Jamshedpur',
  coordinates: [86.18, 22.8],
  region: 'India',
  address: 'Project Site',
  suite: 'Jamshedpur, Jharkhand',
  phone: '+91 657 555 0300'
},
{
  name: 'Jhajjar',
  coordinates: [76.66, 28.61],
  region: 'India',
  address: 'Power Plant O&M',
  suite: 'Jhajjar, Haryana',
  phone: '+91 1251 555 0400'
},
{
  name: 'Haldia',
  coordinates: [88.06, 22.03],
  region: 'India',
  address: 'Project Site',
  suite: 'Haldia, West Bengal',
  phone: '+91 3224 555 0500'
},
{
  name: 'Khandwa',
  coordinates: [76.35, 21.82],
  region: 'India',
  address: 'Project Site',
  suite: 'Khandwa, Madhya Pradesh',
  phone: '+91 733 555 0600'
},
{
  name: 'Rajpura',
  coordinates: [76.59, 30.48],
  region: 'India',
  address: '2x700 MW Supercritical Plant',
  suite: 'Rajpura, Punjab',
  phone: '+91 1762 555 0700'
},
{
  name: 'Obra',
  coordinates: [82.98, 24.42],
  region: 'India',
  address: '2x660 MW Thermal Project',
  suite: 'Obra, Uttar Pradesh',
  phone: '+91 5446 555 0800'
},
{
  name: 'Singrauli',
  coordinates: [82.67, 24.2],
  region: 'India',
  address: 'Power Plant Operations',
  suite: 'Singrauli, Madhya Pradesh',
  phone: '+91 7805 555 0900'
},
{
  name: 'Vizag',
  coordinates: [83.3, 17.69],
  region: 'India',
  address: 'Project Site',
  suite: 'Visakhapatnam, Andhra Pradesh',
  phone: '+91 891 555 1000'
},
{
  name: 'Panki',
  coordinates: [80.3, 26.47],
  region: 'India',
  address: 'Power Plant',
  suite: 'Panki, Uttar Pradesh',
  phone: '+91 512 555 1100'
},
{
  name: 'Jewar',
  coordinates: [77.55, 28.13],
  region: 'India',
  address: 'Airport MEP Services',
  suite: 'Jewar, Uttar Pradesh',
  phone: '+91 120 555 1200'
},
{
  name: 'Shahjahanpur',
  coordinates: [79.91, 27.88],
  region: 'India',
  address: 'Project Site',
  suite: 'Shahjahanpur, Uttar Pradesh',
  phone: '+91 5842 555 1300'
},
{
  name: 'Bela',
  coordinates: [83.95, 24.65],
  region: 'India',
  address: 'Project Site',
  suite: 'Bela, Uttar Pradesh',
  phone: '+91 5446 555 1400'
},
// Global
{
  name: 'Turkey',
  coordinates: [32.86, 39.93],
  region: 'International',
  address: 'Celikler Energy Project',
  suite: 'Ankara, Turkey',
  phone: '+90 312 555 0100'
},
{
  name: 'Bahrain',
  coordinates: [50.58, 26.07],
  region: 'International',
  address: 'Energy Infrastructure',
  suite: 'Manama, Bahrain',
  phone: '+973 1755 0200'
}];

const connections: Array<[[number, number], [number, number]]> = [
// Noida HQ to key India locations
[
[77.39, 28.58],
[86.18, 22.8]],

[
[77.39, 28.58],
[76.59, 30.48]],

[
[77.39, 28.58],
[82.98, 24.42]],

[
[77.39, 28.58],
[83.3, 17.69]],

// Noida HQ to international
[
[77.39, 28.58],
[32.86, 39.93]],

[
[77.39, 28.58],
[50.58, 26.07]]
// Noida → Bahrain
];
const stats = [
{
  value: '14+',
  label: 'India Locations'
},
{
  value: '8000+',
  label: 'MW Capacity'
},
{
  value: '1,800+',
  label: 'Professionals'
}];

export function GlobalFootprint() {
  const sectionRef = useRef<HTMLElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-100px'
  });
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);
  const [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0
  });
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!mapContainerRef.current) return;
    const rect = mapContainerRef.current.getBoundingClientRect();
    setTooltipPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }, []);
  return (
    <section
      ref={sectionRef}
      className="py-24 text-white relative overflow-hidden"
      style={{
        background:
        'linear-gradient(180deg, #0D0D0D 0%, #111111 50%, #0D0D0D 100%)'
      }}>
      
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
          'linear-gradient(rgba(233,30,140,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(233,30,140,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
          'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(233,30,140,0.06) 0%, transparent 70%)'
        }} />
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{
              opacity: 0,
              y: 10
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{
              color: '#B6005E'
            }}>
            
            Global Presence
          </motion.span>
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.1
            }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            
            Connected Intelligence
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="text-neutral-400 max-w-xl mx-auto text-lg">
            
            A live network of energy systems operating in synchronization across
            continents.
          </motion.p>
        </div>

        {/* Map Container */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 1,
            delay: 0.3
          }}
          className="relative rounded-3xl overflow-hidden border"
          style={{
            background: 'rgba(255,255,255,0.02)',
            borderColor: 'rgba(233,30,140,0.12)',
            backdropFilter: 'blur(10px)'
          }}>
          
          {/* Inner glow */}
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl z-0"
            style={{
              boxShadow: 'inset 0 0 80px rgba(233,30,140,0.04)'
            }} />
          

          {/* Mouse-tracking wrapper for tooltip positioning */}
          <div
            ref={mapContainerRef}
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHoveredLocation(null)}>
            
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 600,
                center: [62, 27]
              }}
              style={{
                width: '100%',
                height: 'auto'
              }}>
              
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                geographies.map((geo) =>
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: '#1C1C1E',
                      stroke: 'rgba(233,30,140,0.18)',
                      strokeWidth: 0.5,
                      outline: 'none'
                    },
                    hover: {
                      fill: '#252528',
                      stroke: 'rgba(233,30,140,0.35)',
                      strokeWidth: 0.6,
                      outline: 'none'
                    },
                    pressed: {
                      fill: '#1C1C1E',
                      outline: 'none'
                    }
                  }} />

                )
                }
              </Geographies>

              {/* Connection Lines */}
              {connections.map((conn, i) =>
              <Line
                key={i}
                from={conn[0]}
                to={conn[1]}
                stroke="rgba(233,30,140,0.22)"
                strokeWidth={0.8}
                strokeLinecap="round"
                strokeDasharray="4 6" />

              )}

              {/* Location Markers */}
              {locations.map((loc, i) =>
              <Marker
                key={i}
                coordinates={loc.coordinates}
                onMouseEnter={() => setHoveredLocation(loc)}
                onMouseLeave={() => setHoveredLocation(null)}>
                
                  {/* Large invisible hit area */}
                  <circle
                  r={14}
                  fill="transparent"
                  style={{
                    cursor: 'pointer'
                  }} />
                

                  {/* Outer pulse ring */}
                  <motion.circle
                  r={8}
                  fill="rgba(233,30,140,0.08)"
                  stroke={
                  hoveredLocation?.name === loc.name ?
                  'rgba(233,30,140,0.7)' :
                  'rgba(233,30,140,0.3)'
                  }
                  strokeWidth={hoveredLocation?.name === loc.name ? 1.5 : 0.8}
                  initial={{
                    scale: 0,
                    opacity: 0
                  }}
                  animate={
                  isInView ?
                  {
                    scale: [1, 1.8, 1],
                    opacity: [0.6, 0, 0.6]
                  } :
                  {}
                  }
                  transition={{
                    duration: 2.5,
                    delay: i * 0.15 + 0.5,
                    repeat: Infinity,
                    ease: 'easeOut'
                  }}
                  style={{
                    pointerEvents: 'none'
                  }} />
                

                  {/* Inner dot */}
                  <motion.circle
                  r={hoveredLocation?.name === loc.name ? 5 : 3.5}
                  fill={
                  hoveredLocation?.name === loc.name ? '#D4006F' : '#B6005E'
                  }
                  initial={{
                    scale: 0,
                    opacity: 0
                  }}
                  animate={
                  isInView ?
                  {
                    scale: 1,
                    opacity: 1
                  } :
                  {}
                  }
                  transition={{
                    duration: 0.4,
                    delay: i * 0.15 + 0.3
                  }}
                  style={{
                    filter:
                    hoveredLocation?.name === loc.name ?
                    'drop-shadow(0 0 10px rgba(233,30,140,1))' :
                    'drop-shadow(0 0 6px rgba(233,30,140,0.8))',
                    pointerEvents: 'none',
                    transition: 'r 0.2s ease, filter 0.2s ease'
                  }} />
                

                  {/* Label */}
                  <motion.text
                  textAnchor="middle"
                  y={-10}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '5px',
                    fill:
                    hoveredLocation?.name === loc.name ?
                    'rgba(255,255,255,0.95)' :
                    'rgba(255,255,255,0.55)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    pointerEvents: 'none',
                    transition: 'fill 0.2s ease'
                  }}
                  initial={{
                    opacity: 0
                  }}
                  animate={
                  isInView ?
                  {
                    opacity: 1
                  } :
                  {}
                  }
                  transition={{
                    duration: 0.4,
                    delay: i * 0.15 + 0.6
                  }}>
                  
                    {loc.name.toUpperCase()}
                  </motion.text>
                </Marker>
              )}
            </ComposableMap>

            {/* Hover Tooltip — HTML overlay, positioned via mouse coords */}
            <AnimatePresence>
              {hoveredLocation &&
              <motion.div
                key={hoveredLocation.name}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 6
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 6
                }}
                transition={{
                  duration: 0.18,
                  ease: 'easeOut'
                }}
                className="absolute z-50 pointer-events-none"
                style={{
                  left: tooltipPos.x + 16,
                  top: tooltipPos.y - 80
                  // Clamp to stay inside container — handled via transform below if near edge
                }}>
                
                  <div
                  className="rounded-2xl px-4 py-4 min-w-[200px]"
                  style={{
                    background: 'rgba(15, 15, 15, 0.95)',
                    border: '1px solid rgba(233,30,140,0.3)',
                    backdropFilter: 'blur(20px)',
                    boxShadow:
                    '0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(233,30,140,0.08), inset 0 1px 0 rgba(255,255,255,0.05)'
                  }}>
                  
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-3">
                      <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{
                        background: '#B6005E',
                        boxShadow: '0 0 8px rgba(182,0,94,0.8)'
                      }} />
                    
                      <span
                      className="text-xs font-bold tracking-[0.2em] uppercase"
                      style={{
                        color: '#B6005E'
                      }}>
                      
                        {hoveredLocation.region}
                      </span>
                    </div>

                    <div
                    className="text-base font-black tracking-tight mb-3"
                    style={{
                      color: '#FFFFFF'
                    }}>
                    
                      {hoveredLocation.name}
                    </div>

                    {/* Divider */}
                    <div
                    className="w-full h-px mb-3"
                    style={{
                      background: 'rgba(233,30,140,0.15)'
                    }} />
                  

                    {/* Address */}
                    <div className="flex items-start gap-2 mb-2">
                      <MapPinIcon
                      size={12}
                      className="flex-shrink-0 mt-0.5"
                      style={{
                        color: '#B6005E'
                      }} />
                    
                      <div>
                        <div className="text-xs text-white/80 leading-relaxed">
                          {hoveredLocation.address}
                        </div>
                        <div className="text-xs text-white/50">
                          {hoveredLocation.suite}
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2">
                      <PhoneIcon
                      size={12}
                      className="flex-shrink-0"
                      style={{
                        color: '#B6005E'
                      }} />
                    
                      <span className="text-xs text-white/50 font-mono">
                        {hoveredLocation.phone}
                      </span>
                    </div>
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </div>

          {/* Bottom Stats Bar */}
          <div
            className="flex justify-center gap-12 px-8 py-6 border-t"
            style={{
              borderColor: 'rgba(233,30,140,0.1)',
              background: 'rgba(0,0,0,0.3)'
            }}>
            
            {stats.map((stat, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 10
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.8 + i * 0.1
              }}
              className="text-center">
              
                <div
                className="text-2xl md:text-3xl font-black tracking-tight"
                style={{
                  color: '#B6005E'
                }}>
                
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

}