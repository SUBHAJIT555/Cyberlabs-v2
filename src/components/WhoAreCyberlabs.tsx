import { motion, useInView, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Plus, Minus } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CallbackModal from "@/components/CallbackModal";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

// Cybersecurity metrics data (monthly data for 15 months - Jan 2024 to Mar 2025)
// Data includes natural variations with realistic ups and downs
const chartData = [
  { date: "2024-01-01", training: 3850, govt: 3420, services: 3680 },
  { date: "2024-02-01", training: 4520, govt: 3980, services: 4280 },
  { date: "2024-03-01", training: 4950, govt: 4650, services: 4920 }, // Training dips
  { date: "2024-04-01", training: 5820, govt: 5120, services: 5380 }, // Training spikes up
  { date: "2024-05-01", training: 6180, govt: 5750, services: 6120 }, // Training dips slightly, Govt dips
  { date: "2024-06-01", training: 6950, govt: 6320, services: 6680 }, // Govt dips
  { date: "2024-07-01", training: 7280, govt: 6950, services: 7020 }, // Govt spikes back
  { date: "2024-08-01", training: 7650, govt: 7320, services: 7580 }, // Training dips
  { date: "2024-09-01", training: 8320, govt: 7680, services: 7900 }, // Training spikes
  { date: "2024-10-01", training: 8750, govt: 8250, services: 8500 },
  { date: "2024-11-01", training: 9080, govt: 8820, services: 8850 }, // Training dips, Services dips
  { date: "2024-12-01", training: 9850, govt: 9180, services: 9420 }, // Training spikes
  { date: "2025-01-01", training: 10120, govt: 9550, services: 9880 }, // Govt dips
  { date: "2025-02-01", training: 10750, govt: 10280, services: 10520 },
  { date: "2025-03-01", training: 11080, govt: 10850, services: 11060 }, // Training dips slightly
];

const chartConfig = {
  training: {
    label: "Training Programs",
    color: "#FF5F1F",
  },
  govt: {
    label: "Govt Solutions",
    color: "#27E0B3",
  },
  services: {
    label: "Cyber Services",
    color: "#00A6F5",
  },
} as const;

type ChartKey = keyof typeof chartConfig;

const WhoAreCyberlabs = () => {
  const containerRef = useRef(null);
  const chartRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const isChartInView = useInView(chartRef, { once: true, margin: "-50px" });
  const [activeChart, setActiveChart] = useState<ChartKey>("training");
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const [openMissionIndex, setOpenMissionIndex] = useState<number | null>(0);

  const total = useMemo(
    () => ({
      training: chartData.reduce((acc, curr) => acc + curr.training, 0),
      govt: chartData.reduce((acc, curr) => acc + curr.govt, 0),
      services: chartData.reduce((acc, curr) => acc + curr.services, 0),
    }),
    []
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Animated SVG Icon Components
  const AnimatedBuildingIcon = ({ isInView }: { isInView: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 md:w-5 md:h-5"
    >
      <motion.path
        stroke="none"
        d="M0 0h24v24H0z"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M3 21l18 0"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M5 21v-14l8 -4v18"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M19 21v-10l-6 -4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.9, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M9 9l0 .01"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M9 12l0 .01"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 1.4, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M9 15l0 .01"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 1.6, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.path
        d="M9 18l0 .01"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 1.8, repeat: Infinity, repeatDelay: 3 }}
      />
    </svg>
  );

  const AnimatedCodeIcon = ({ isInView }: { isInView: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 md:w-5 md:h-5"
    >
      <motion.path
        stroke="none"
        d="M0 0h24v24H0z"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 2.5 }}
      />
      <motion.path
        d="M7 8l-4 4l4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 2.5 }}
      />
      <motion.path
        d="M17 8l4 4l-4 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5, repeat: Infinity, repeatDelay: 2.5 }}
      />
      <motion.path
        d="M14 4l-4 16"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.8, repeat: Infinity, repeatDelay: 2.5 }}
      />
    </svg>
  );

  const AnimatedGlobeIcon = ({ isInView }: { isInView: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 md:w-5 md:h-5"
    >
      <motion.path
        stroke="none"
        d="M0 0h24v24H0z"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3.5 }}
      />
      <motion.path
        d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 3.5 }}
      />
      <motion.path
        d="M3.6 9h16.8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.7, repeat: Infinity, repeatDelay: 3.5 }}
      />
      <motion.path
        d="M3.6 15h16.8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.0, repeat: Infinity, repeatDelay: 3.5 }}
      />
      <motion.path
        d="M11.5 3a17 17 0 0 0 0 18"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.7, delay: 1.3, repeat: Infinity, repeatDelay: 3.5 }}
      />
      <motion.path
        d="M12.5 3a17 17 0 0 1 0 18"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.7, delay: 1.6, repeat: Infinity, repeatDelay: 3.5 }}
      />
    </svg>
  );

  const AnimatedShieldIcon = ({ isInView }: { isInView: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 md:w-5 md:h-5"
    >
      <motion.path
        stroke="none"
        d="M0 0h24v24H0z"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 4 }}
      />
      <motion.path
        d="M6 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.2, repeat: Infinity, repeatDelay: 4 }}
      />
      <motion.path
        d="M12 2v2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.6, repeat: Infinity, repeatDelay: 4 }}
      />
      <motion.path
        d="M9 12v9"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.9, repeat: Infinity, repeatDelay: 4 }}
      />
      <motion.path
        d="M15 12v9"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.1, repeat: Infinity, repeatDelay: 4 }}
      />
      <motion.path
        d="M5 16l4 -2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 1.4, repeat: Infinity, repeatDelay: 4 }}
      />
      <motion.path
        d="M15 14l4 2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 1.6, repeat: Infinity, repeatDelay: 4 }}
      />
      <motion.path
        d="M9 18h6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: 1.8, repeat: Infinity, repeatDelay: 4 }}
      />
      <motion.path
        d="M10 8v.01"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 2.0, repeat: Infinity, repeatDelay: 4 }}
      />
      <motion.path
        d="M14 8v.01"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.3, delay: 2.2, repeat: Infinity, repeatDelay: 4 }}
      />
    </svg>
  );

  const globalStrengthItems = [
    {
      icon: AnimatedBuildingIcon,
      text: "Headquarters in Manhattan, New York. R&D in Herzeliya, Israel.",
    },
    {
      icon: AnimatedCodeIcon,
      text: "Advanced R&D in cyber education systems.",
    },
    {
      icon: AnimatedGlobeIcon,
      text: "Programs used internationally.",
    },
    {
      icon: AnimatedShieldIcon,
      text: "Strong technical foundation in cyber-range engineering & AI-driven simulation.",
    },
  ];

  return (
    <section className="w-full bg-background py-16 md:py-32" ref={containerRef}>
      <div className="mx-auto px-2 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-2 md:mb-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat text-text-primary font-semibold tracking-tight leading-tight md:leading-normal">
            WHO WE ARE ?
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto grid gap-4 sm:grid-cols-5"
        >
          {/* Card 1: powerful collaboration - Large (3 cols) */}
          <Card className="group overflow-hidden shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl border-neutral-300 border-dashed bg-white">
            <CardHeader className="p-6 md:p-8">
              <div className="space-y-4">
                <p className="text-xl sm:text-2xl md:text-3xl font-montserrat font-semibold text-text-primary">
                  Powerful Collaboration
                </p>
                <p className="text-muted-foreground mt-3 max-w-2xl text-sm sm:text-base md:text-lg font-inter-display leading-relaxed">
                  <span className="font-inter-display uppercase font-semibold text-primary">
                    CYBERLABS INDIA
                  </span>{" "}
                  represents a powerful{" "}
                  <span className="font-inter-display uppercase font-semibold text-primary">
                    INDIA–US–ISRAEL
                  </span>{" "}
                  collaboration dedicated to building India's next generation of cyber professionals.
                </p>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-inter-display leading-relaxed">
                  Our global parent,{" "}
                  <span className="font-inter-display uppercase font-semibold text-primary">
                    CYBERLABS USA
                  </span>
                  , is an established leader in cyber education technology, specialising in
                  cyber-range training and advanced simulation environments.
                </p>
              </div>
            </CardHeader>

            <CardContent className="relative h-fit p-0">
              <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,hsl(var(--background))_100%)]"></div>
              <div className="relative m-2 bg-white overflow-hidden">
                {/* Chart Header with Interactive Buttons */}
                <div className="flex flex-col items-stretch border-b border-neutral-200 sm:flex-row">
                  <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:py-6">
                    <p className="text-base sm:text-lg md:text-xl font-inter-display font-semibold text-text-primary">
                      Service Growth Metrics
                    </p>
                    <p className="text-xs sm:text-sm text-primary font-inter-display">
                      Showing total engagements
                    </p>
                  </div>
                  <div className="flex border-t border-neutral-200 sm:border-t-0 sm:border-l bg-muted/30 overflow-hidden">
                    {(["training", "govt", "services"] as ChartKey[]).map((key, idx) => {
                      const chart = chartConfig[key];
                      const isActive = activeChart === key;
                      // Custom color for each button when active
                      let activeBg = "";
                      let activeText = "";
                      if (isActive) {
                        if (key === "training") {
                          activeBg = "bg-[#FFE6D3]"; // light orange
                          activeText = "text-[#FF5F1F]";
                        } else if (key === "govt") {
                          activeBg = "bg-[#E2FCF7]"; // light turquoise
                          activeText = "text-[#27E0B3]";
                        } else if (key === "services") {
                          activeBg = "bg-[#D1EEFB]"; // light blue
                          activeText = "text-[#00A6F5]";
                        }
                      }
                      return (
                        <button
                          key={key}
                          data-active={isActive}
                          onClick={() => setActiveChart(key)}
                          className={[
                            "relative z-30 flex-1 flex flex-col items-center justify-center px-2 sm:px-5 py-2 sm:py-4 transition-colors duration-150 outline-none border-neutral-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary/40 font-inter-display",
                            idx === 0 ? "border-l-0" : "border-l",
                            "hover:bg-primary/7 active:ring-2 active:ring-primary/15",
                            isActive
                              ? `${activeBg} border-primary font-semibold shadow-[0_2px_8px_0_rgba(38,192,202,0.07)] ${activeText}`
                              : "bg-transparent border-transparent text-text-primary/80"
                          ].join(" ")}
                          style={{
                            borderLeftWidth: idx !== 0 ? 1 : 0,
                            borderRadius: 0,
                          }}
                        >
                          <span className={`text-xs md:text-sm font-inter-display tracking-wide transition-colors ${isActive ? activeText : "text-text-primary"
                            }`}>
                            {chart.label}
                          </span>
                          <span className={`mt-0.5 text-lg sm:text-xl leading-none font-semibold font-inter-display transition-colors ${isActive ? activeText : "text-text-primary"
                            }`}>
                            {total[key].toLocaleString()}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Interactive Chart */}
                <div className="p-2 sm:p-4" ref={chartRef}>
                  <motion.div
                    className="relative h-[280px] sm:h-[300px] md:h-[250px] w-full"
                    initial={{ opacity: 0 }}
                    animate={isChartInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={chartData}
                        margin={{
                          top: 20,
                          right: 12,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid
                          strokeDasharray="4 4"
                          vertical={false}
                          stroke="#e5e5e5"
                          strokeWidth={0.5}
                        />
                        <XAxis
                          dataKey="date"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                          minTickGap={32}
                          tick={{ fill: "#666", fontSize: 10, fontFamily: "InterDisplay" }}
                          tickFormatter={(value) => {
                            const date = new Date(value);
                            return date.toLocaleDateString("en-US", {
                              month: "short",
                            }).toLowerCase();
                          }}
                        />
                        <YAxis
                          tickLine={false}
                          axisLine={false}
                          tick={{ fill: "#666", fontSize: 11, fontFamily: "InterDisplay" }}
                          tickMargin={8}
                        />
                        <Tooltip
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              const dateLabel = label ? String(label) : "";
                              return (
                                <div className="rounded-md p-3 border border-neutral-300 border-dashed"
                                  style={{
                                    background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white"
                                  }}
                                >
                                  <p className="text-sm font-semibold text-gray-700 mb-1 font-inter-display">
                                    {dateLabel ? new Date(dateLabel).toLocaleDateString("en-US", {
                                      month: "short",
                                      year: "numeric",
                                    }) : ""}
                                  </p>
                                  <p className="text-sm font-bold font-inter-display" style={{ color: chartConfig[activeChart].color }}>
                                    {payload[0].value?.toLocaleString()}
                                  </p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Bar
                          dataKey={activeChart}
                          fill={chartConfig[activeChart].color}
                          radius={[3, 3, 0, 0]}
                          minPointSize={2}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </motion.div>
                </div>


              </div>
            </CardContent>
          </Card>

          {/* Card 2: Think Big With Us - Small (2 cols) */}
          <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl border-neutral-300 border-dashed bg-white relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-radial-gradient from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-radial-gradient from-primary/10 via-transparent to-transparent rounded-full blur-2xl opacity-20"></div>

            {/* Subtle Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
                backgroundSize: '20px 20px',
              }}
            />

            <CardContent className="flex flex-col h-full p-6 md:p-8 relative z-10">
              {/* Header Section */}
              <div className="mb-6">
                <p className="text-center text-xl sm:text-2xl md:text-3xl font-montserrat font-semibold text-text-primary mb-3">
                  Think Big With Us.
                </p>
                <p className="text-center text-sm sm:text-base font-inter-display leading-none font-semibold max-w-xs mx-auto">
                  Join India's next generation of cyber professionals
                </p>
              </div>

              {/* Radar Chart */}
              <div className="flex-1 flex items-center justify-center mb-10 md:mb-0">
                <div className="w-full max-w-[250px] aspect-square relative">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00A6F5" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#0080FF" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0066CC" stopOpacity="0.15" />
                      </linearGradient>
                    </defs>

                    {/* Grid Circles */}
                    {[1, 2, 3, 4, 5].map((i) => (
                      <circle
                        key={`grid-${i}`}
                        cx="100"
                        cy="100"
                        r={20 * i}
                        fill="none"
                        stroke="#00A6F5"
                        strokeWidth="0.5"
                        strokeDasharray="2 2"
                      />
                    ))}

                    {/* Grid Lines (6 axes) */}
                    {[0, 1, 2, 3, 4, 5].map((i) => {
                      const angle = (i * Math.PI * 2) / 6 - Math.PI / 2;
                      const x2 = 100 + Math.cos(angle) * 100;
                      const y2 = 100 + Math.sin(angle) * 100;
                      return (
                        <line
                          key={`axis-${i}`}
                          x1="100"
                          y1="100"
                          x2={x2}
                          y2={y2}
                          stroke="#00A6F5"
                          strokeWidth="0.5"
                          strokeDasharray="2 2"
                        />
                      );
                    })}

                    {/* Radar Data */}
                    {(() => {
                      const radarData = [
                        { label: "Training", value: 85 },
                        { label: "Govt", value: 75 },
                        { label: "Services", value: 80 },
                        { label: "R&D", value: 90 },
                        { label: "Global", value: 70 },
                        { label: "Innovation", value: 88 },
                      ];

                      const maxValue = 100;
                      const centerX = 100;
                      const centerY = 100;
                      const radius = 80;

                      // Create polygon points
                      const points = radarData.map((item, i) => {
                        const angle = (i * Math.PI * 2) / radarData.length - Math.PI / 2;
                        const valueRadius = (item.value / maxValue) * radius;
                        const x = centerX + Math.cos(angle) * valueRadius;
                        const y = centerY + Math.sin(angle) * valueRadius;
                        return `${x},${y}`;
                      }).join(' ');

                      return (
                        <>
                          {/* Filled Area */}
                          <motion.polygon
                            points={points}
                            fill="url(#radarGradient)"
                            stroke="#0080FF"
                            strokeWidth="2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                          />

                          {/* Data Points */}
                          {radarData.map((item, i) => {
                            const angle = (i * Math.PI * 2) / radarData.length - Math.PI / 2;
                            const valueRadius = (item.value / maxValue) * radius;
                            const x = centerX + Math.cos(angle) * valueRadius;
                            const y = centerY + Math.sin(angle) * valueRadius;

                            return (
                              <g key={`point-${i}`}>
                                <motion.circle
                                  cx={x}
                                  cy={y}
                                  r="4"
                                  fill="#0080FF"
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                />
                                {/* Labels */}
                                <text
                                  x={centerX + Math.cos(angle) * (radius + 15)}
                                  y={centerY + Math.sin(angle) * (radius + 15)}
                                  fontSize="8"
                                  fill="#666"
                                  textAnchor="middle"
                                  dominantBaseline="middle"
                                  className="font-inter-display"
                                >
                                  {item.label}
                                </text>
                              </g>
                            );
                          })}
                        </>
                      );
                    })()}
                  </svg>
                </div>
              </div>

              {/* Call-to-Action Button */}
              <motion.button
                type="button"
                className="w-full px-6 py-3.5 bg-primary text-white rounded-md font-semibold text-base sm:text-lg font-montserrat flex items-center justify-center gap-3 cursor-pointer"
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsCallbackModalOpen(true)}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <motion.path
                    stroke="none"
                    d="M0 0h24v24H0z"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 1, 0],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                  <motion.path
                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 1, 0],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      ease: "easeInOut",
                      delay: 0.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                </motion.svg>
                Request a Callback
              </motion.button>
            </CardContent>
          </Card>

          {/* Card 3: Our Mission - Medium (2 cols) */}
          <Card className="group p-6 md:p-8 shadow-black/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl border-neutral-300 border-dashed bg-white">
            <CardHeader className="p-0 mb-6">
              <p className="text-lg sm:text-xl font-inter-display font-semibold text-text-primary mb-6">
                We bring these world-class capabilities to India through training programs, government solutions, and cyber investigative services - bridging international expertise with India's growing cybersecurity demand.
              </p>

              {/* Accordion */}
              <div className="space-y-2">
                {(() => {
                  const missionItems = [
                    {
                      title: "Bridging the Education Gap",
                      content: "We saw a significant and widening gap between conventional IT education approaches and the evolving, hands-on cybersecurity skills that today's companies and organizations actually require in the real world."
                    },
                    {
                      title: "Creating a Safe Learning Platform",
                      content: "Our mission is to bridge that gap by developing a comprehensive platform where learners of all backgrounds can actively practice, simulate, and defend against real-world cyber attacks in a safe, supportive, and fully online environment."
                    },
                    {
                      title: "World-Class Capabilities",
                      content: "We are dedicated to bringing proven, world-class cybersecurity expertise, tools, and training resources to India, empowering individuals and organizations across the country with global standards of protection."
                    },
                    {
                      title: "Building India's Cyber Workforce",
                      content: "Our goal is to develop a highly skilled, job-ready cybersecurity workforce that is capable of defending and securing India's rapidly expanding digital future across multiple sectors and industries."
                    }
                  ];

                  return missionItems.map((item, index) => {
                    const isOpen = openMissionIndex === index;
                    const isLast = index === missionItems.length - 1;
                    return (
                      <div
                        key={index}
                        className={`${!isLast ? 'border-b border-neutral-300 border-dashed' : ''} overflow-hidden transition-all duration-300`}
                      >
                        <button
                          onClick={() => setOpenMissionIndex(openMissionIndex === index ? null : index)}
                          className="w-full px-4 sm:px-5 md:px-6 py-4 sm:py-5 flex items-center justify-between text-left group"
                        >
                          <div className="flex-1 pr-4">
                            <h3 className="text-sm sm:text-base md:text-lg font-inter-display font-semibold text-text-primary group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 0 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="shrink-0"
                          >
                            <AnimatePresence mode="wait">
                              {isOpen ? (
                                <motion.div
                                  key="minus"
                                  initial={{ opacity: 0, rotate: -90 }}
                                  animate={{ opacity: 1, rotate: 0 }}
                                  exit={{ opacity: 0, rotate: 90 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="plus"
                                  initial={{ opacity: 0, rotate: 90 }}
                                  animate={{ opacity: 1, rotate: 0 }}
                                  exit={{ opacity: 0, rotate: -90 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <motion.div
                                initial={{ y: -10 }}
                                animate={{ y: 0 }}
                                exit={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5"
                              >
                                <div className="relative font-inter-display">

                                  <p className="text-sm sm:text-base md:text-lg font-inter-display font-medium text-primary leading-tight">
                                    {item.content}
                                  </p>
                                </div>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  });
                })()}
              </div>
            </CardHeader>
          </Card>

          {/* Card 4: Vision & Mission + Global Strength - Large (3 cols) */}
          <Card className="group relative shadow-black/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl border-neutral-300 border-dashed bg-white">
            <CardHeader className="p-6 md:p-8">
              <div className="space-y-6">
                <div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <p className="text-lg sm:text-xl  text-text-primary leading-relaxed font-montserrat tracking-tighter font-medium w-fit border border-neutral-300 border-dashed rounded-md px-2"
                          style={{
                            background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white"
                          }}
                        >
                          Our Mission
                        </p>
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-text-primary"
                        >
                          <motion.path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                              pathLength: [0, 1, 1, 0],
                              opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                              duration: 2.5,
                              ease: "easeInOut",
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          />
                          <motion.path
                            d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                              pathLength: [0, 1, 1, 0],
                              opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                              duration: 2.5,
                              ease: "easeInOut",
                              delay: 0.2,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          />
                          <motion.path
                            d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                              pathLength: [0, 1, 1, 0],
                              opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                              duration: 2.5,
                              ease: "easeInOut",
                              delay: 0.4,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          />
                          <motion.path
                            d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                              pathLength: [0, 1, 1, 0],
                              opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                              duration: 2.5,
                              ease: "easeInOut",
                              delay: 0.6,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          />
                        </motion.svg>
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-text-primary leading-relaxed font-inter-display">
                        To develop a skilled and job-ready cybersecurity workforce with hands-on capabilities, able to protect and strengthen India's digital future.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <p className="text-lg sm:text-xl  text-text-primary leading-relaxed font-montserrat tracking-tighter font-medium w-fit border border-neutral-300 border-dashed rounded-md px-2"
                          style={{
                            background: "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white"
                          }}
                        >
                          Our Vision
                        </p>
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-text-primary"
                        >
                          <motion.path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                              pathLength: [0, 1, 1, 0],
                              opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                              duration: 2.5,
                              ease: "easeInOut",
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          />
                          <motion.path
                            d="M6 21l6 -5l6 5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                              pathLength: [0, 1, 1, 0],
                              opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                              duration: 2.5,
                              ease: "easeInOut",
                              delay: 0.2,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          />
                          <motion.path
                            d="M12 13v8"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                              pathLength: [0, 1, 1, 0],
                              opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                              duration: 2.5,
                              ease: "easeInOut",
                              delay: 0.4,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          />
                          <motion.path
                            d="M3.294 13.678l.166 .281c.52 .88 1.624 1.265 2.605 .91l14.242 -5.165a1.023 1.023 0 0 0 .565 -1.456l-2.62 -4.705a1.087 1.087 0 0 0 -1.447 -.42l-.056 .032l-12.694 7.618c-1.02 .613 -1.357 1.897 -.76 2.905l-.001 0"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                              pathLength: [0, 1, 1, 0],
                              opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                              duration: 2.5,
                              ease: "easeInOut",
                              delay: 0.6,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          />
                          <motion.path
                            d="M14 5l3 5.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                              pathLength: [0, 1, 1, 0],
                              opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                              duration: 2.5,
                              ease: "easeInOut",
                              delay: 0.8,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          />
                        </motion.svg>
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-text-primary leading-relaxed font-inter-display">
                        To become India's most trusted, advanced, and industry-leading cybersecurity training and cyber investigation ecosystem, empowering individuals and organizations to safeguard their digital assets. Our vision is to foster a culture of security awareness and hands-on excellence, set new standards for cyber education and response, and drive nationwide readiness for the evolving challenges in the digital world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative h-fit px-6 pb-6 md:px-8 md:pb-8">
              <div className="space-y-4">
                <p className="text-lg sm:text-xl  text-text-primary leading-relaxed font-montserrat tracking-tighter font-medium mb-2">
                  Our Global Strength
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {globalStrengthItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="rounded-lg bg-white flex flex-col items-start gap-2 p-3 md:p-4 border border-neutral-300/50 border-dashed"
                        style={{
                          background:
                            "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
                        }}
                      >
                        <div className="p-2 bg-white border border-neutral-300 border-dashed rounded-md shrink-0 text-primary">
                          <IconComponent isInView={isInView} />
                        </div>
                        <p className="text-xs sm:text-sm md:text-base font-inter-display font-semibold text-text-primary leading-tight">
                          {item.text}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
                <p className="text-sm sm:text-base md:text-lg font-inter-display text-text-primary leading-relaxed mt-4">
                  <span className="font-inter-display uppercase font-semibold text-primary">
                    CYBERLABS INDIA
                  </span>{" "}
                  extends this global foundation to India through tailored training, local
                  partnerships, and government-aligned programs.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Callback Modal */}
      <CallbackModal
        isOpen={isCallbackModalOpen}
        onClose={() => setIsCallbackModalOpen(false)}
      />
    </section>
  );
};

export default WhoAreCyberlabs;
