import React, { useCallback, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";
import { MapPinIcon, PhoneIcon } from "lucide-react";
import { useSectionData } from "../../store/useCMSStore";


const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
interface Location {
  name: string;
  coordinates: [number, number];
  region: string;
  address: string;
  suite: string;
  phone: string;
}
export function GlobalFootprint() {
  const { data } = useSectionData<any>("home", "GlobalFootprintSection");
  const stats = data.stats || [];

  const locations: Location[] = data.locations || [];
  const hqLocation = locations.find(
    (loc) =>
      loc.name.toLowerCase().includes("noida") ||
      loc.name.toLowerCase().includes("hq")
  ) || locations[0];
  const hqCoords = hqLocation?.coordinates || [77.39, 28.58];

  const connections = locations
    .filter((loc) => loc.name !== hqLocation?.name)
    .map((loc) => [hqCoords, loc.coordinates] as [[number, number], [number, number]]);

  const sectionRef = useRef<HTMLElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);
  const [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
  });
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!mapContainerRef.current) return;
    const rect = mapContainerRef.current.getBoundingClientRect();
    setTooltipPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);
  return (
    <section
      ref={sectionRef}
      className="py-24 text-neutral-900 relative overflow-hidden"
      style={{
        background: "#F8FAFC",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(233,30,140,0.02) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="inline-block text-xs font-bold tracking-[0.3em] uppercase mb-4"
            style={{
              color: "#B6005E",
            }}
          >
            {data.tagline}
          </motion.span>
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-4 select-text cursor-text selection:bg-[#B6005E] selection:text-white text-neutral-900"
          >
            {data.heading}
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="text-neutral-500 max-w-xl mx-auto text-lg"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Map Container */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="relative rounded-3xl overflow-hidden border shadow-sm"
          style={{
            background: "#FFFFFF",
            borderColor: "#E2E8F0",
          }}
        >
          {/* Inner glow */}
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl z-0"
            style={{
              boxShadow: "inset 0 0 80px rgba(0,0,0,0.02)",
            }}
          />

          {/* Mouse-tracking wrapper for tooltip positioning */}
          <div
            ref={mapContainerRef}
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 350,
                center: [65, 25],
              }}
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }: any) =>
                  geographies.map((geo: any) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: "#F1F5F9",
                          stroke: "#CBD5E1",
                          strokeWidth: 0.5,
                          outline: "none",
                        },
                        hover: {
                          fill: "#E2E8F0",
                          stroke: "#B6005E",
                          strokeWidth: 0.6,
                          outline: "none",
                        },
                        pressed: {
                          fill: "#E2E8F0",
                          outline: "none",
                        },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Connection Lines */}
              {connections.map((conn, i) => (
                <Line
                  key={i}
                  from={conn[0]}
                  to={conn[1]}
                  stroke="rgba(182,0,94,0.3)"
                  strokeWidth={0.8}
                  strokeLinecap="round"
                  strokeDasharray="4 6"
                />
              ))}

              {/* Location Markers */}
              {locations.map((loc, i) => (
                <Marker
                  key={i}
                  coordinates={loc.coordinates}
                  onMouseEnter={() => setHoveredLocation(loc)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  {/* Large invisible hit area */}
                  <circle
                    r={14}
                    fill="transparent"
                    style={{
                      cursor: "pointer",
                    }}
                  />

                  {/* Outer pulse ring */}
                  <motion.circle
                    r={8}
                    fill="rgba(233,30,140,0.08)"
                    stroke={
                      hoveredLocation?.name === loc.name
                        ? "rgba(233,30,140,0.7)"
                        : "rgba(233,30,140,0.3)"
                    }
                    strokeWidth={hoveredLocation?.name === loc.name ? 1.5 : 0.8}
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={
                      isInView
                        ? {
                            scale: [1, 1.8, 1],
                            opacity: [0.6, 0, 0.6],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2.5,
                      delay: i * 0.15 + 0.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    style={{
                      pointerEvents: "none",
                    }}
                  />

                  {/* Inner dot */}
                  <motion.circle
                    r={hoveredLocation?.name === loc.name ? 5 : 3.5}
                    fill={
                      hoveredLocation?.name === loc.name ? "#D4006F" : "#B6005E"
                    }
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={
                      isInView
                        ? {
                            scale: 1,
                            opacity: 1,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.4,
                      delay: i * 0.15 + 0.3,
                    }}
                    style={{
                      filter:
                        hoveredLocation?.name === loc.name
                          ? "drop-shadow(0 0 10px rgba(233,30,140,1))"
                          : "drop-shadow(0 0 6px rgba(233,30,140,0.8))",
                      pointerEvents: "none",
                      transition: "r 0.2s ease, filter 0.2s ease",
                    }}
                  />

                  {/* Label */}
                  <motion.text
                    textAnchor="middle"
                    y={-10}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "5px",
                      fill:
                        hoveredLocation?.name === loc.name
                          ? "#B6005E"
                          : "#64748B",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      pointerEvents: "none",
                      transition: "fill 0.2s ease",
                    }}
                    initial={{
                      opacity: 0,
                    }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.4,
                      delay: i * 0.15 + 0.6,
                    }}
                  >
                    {loc.name.toUpperCase()}
                  </motion.text>
                </Marker>
              ))}
            </ComposableMap>

            {/* Hover Tooltip */}
            <AnimatePresence>
              {hoveredLocation && (
                <motion.div
                  key={hoveredLocation.name}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    y: 6,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    y: 6,
                  }}
                  transition={{
                    duration: 0.18,
                    ease: "easeOut",
                  }}
                  className="absolute z-50 pointer-events-none"
                  style={{
                    left: tooltipPos.x + 16,
                    top: tooltipPos.y - 80,
                  }}
                >
                  <div
                    className="rounded-2xl px-4 py-4 min-w-[200px]"
                    style={{
                      background: "rgba(15, 15, 15, 0.95)",
                      border: "1px solid rgba(233,30,140,0.3)",
                      backdropFilter: "blur(20px)",
                      boxShadow:
                        "0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(233,30,140,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{
                          background: "#B6005E",
                          boxShadow: "0 0 8px rgba(182,0,94,0.8)",
                        }}
                      />

                      <span
                        className="text-xs font-bold tracking-[0.2em] uppercase"
                        style={{
                          color: "#B6005E",
                        }}
                      >
                        {hoveredLocation.region}
                      </span>
                    </div>

                    <div
                      className="text-base font-black tracking-tight mb-3"
                      style={{
                        color: "#FFFFFF",
                      }}
                    >
                      {hoveredLocation.name}
                    </div>

                    {/* Divider */}
                    <div
                      className="w-full h-px mb-3"
                      style={{
                        background: "rgba(233,30,140,0.15)",
                      }}
                    />

                    {/* Address */}
                    <div className="flex items-start gap-2 mb-2">
                      <MapPinIcon
                        size={12}
                        className="flex-shrink-0 mt-0.5"
                        style={{
                          color: "#B6005E",
                        }}
                      />

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
                          color: "#B6005E",
                        }}
                      />

                      <span className="text-xs text-white/50 font-mono">
                        {hoveredLocation.phone}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Stats Bar */}
          <div
            className="flex justify-center gap-12 px-8 py-6 border-t"
            style={{
              borderColor: "#E2E8F0",
              background: "#F8FAFC",
            }}
          >
            {stats.map((stat: any, i: number) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.8 + i * 0.1,
                }}
                className="text-center"
              >
                <div
                  className="text-2xl md:text-3xl font-black tracking-tight"
                  style={{
                    color: "#B6005E",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
