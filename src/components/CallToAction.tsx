import { motion } from "framer-motion";
import { useState } from "react";
import CallbackModal from "./CallbackModal";
import CTAButton from "./ui/CTAButton";

const CallToAction = () => {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  const handleCallbackModalOpen = () => {
    setIsCallbackModalOpen(true);
  };

  const handleCallbackModalClose = () => {
    setIsCallbackModalOpen(false);
  };

  return (
    <section className="relative w-full overflow-hidden py-10">

      {/* Bottom Information Section */}
      <div className="relative p-2 md:p-0">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 md:py-10 border border-neutral-200 rounded-xl overflow-hidden bg-white mb-6 sm:mb-8 md:mb-10 ring ring-neutral-200 ring-offset-4 md:ring-offset-8 shadow-lg">
          {/* Dashed grid background (fade at top) - same as HomeOverview */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
              `,
              backgroundSize: "1px 1px",
              backgroundPosition: "0 0, 0 0",
              maskImage: `
                repeating-linear-gradient(
                  to right,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                repeating-linear-gradient(
                  to bottom,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
              `,
              WebkitMaskImage: `
                repeating-linear-gradient(
                  to right,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                repeating-linear-gradient(
                  to bottom,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 80%)
              `,
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">

                <span className="text-sm uppercase tracking-wider text-gray-600 font-switzer font-medium">
                  <div className="w-3 h-3 bg-primary rounded-sm shrink-0 inline-block" /> OUR VISION : Building Global Cyber Defense Capability From India
                </span>

              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-text-primary font-montserrat leading-tighter tracking-tight font-medium">
                India is one of the world’s fastest-growing digital economies. Its cyber defense talent must meet {" "}
                <span className="text-primary">Israeli-level realism and global expectations.</span>
              </h3>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 flex flex-col justify-center"
            >
              <h4 className="text-lg sm:text-xl md:text-2xl text-text-primary font-montserrat font-semibold mb-2">
                CYBERLABS INDIA exists to:
              </h4>
              <ul className="">
                <li className="flex items-start text-base sm:text-lg md:text-xl text-gray-700 font-inter-display leading-tight">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Transfer Israeli cyber defense expertise to India</span>
                </li>
                <li className="flex items-start text-base sm:text-lg md:text-xl text-gray-700 font-inter-display leading-tight">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Build globally deployable cyber professionals</span>
                </li>
                <li className="flex items-start text-base sm:text-lg md:text-xl text-gray-700 font-inter-display leading-tight">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Reduce the gap between education and real-world defense</span>
                </li>
                <li className="flex items-start text-base sm:text-lg md:text-xl text-gray-700 font-inter-display leading-tight">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>Strengthen trust in digital systems worldwide</span>
                </li>
              </ul>
              <p className="text-base sm:text-lg md:text-xl text-text-primary font-inter-display tracking-tight font-semibold pt-4 capitalize leading-tight">
                We are not running courses. We are building real cyber defenders - trained the Israeli way.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Top CTA Section with Light Background */}
      <div className="relative min-h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-20 sm:py-28 md:py-36">
        {/* Light Background */}
        <div
          className="absolute inset-0"
        // style={{ backgroundColor: "#f2eaf7" }}
        />

        {/* Subtle gradient streaks for light mode */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Purple/Pink streak */}
          <div
            className="absolute bottom-[30%] left-1/4 w-[600px] h-[400px] rounded-full blur-3xl animate-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.1) 50%, transparent 100%)",
            }}
          />
          {/* Blue streak */}
          <div
            className="absolute bottom-[25%] right-1/4 w-[500px] h-[350px] rounded-full blur-3xl animate-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 100%)",
              animationDelay: "1s",
            }}
          />
          {/* Primary accent */}
          <div
            className="absolute bottom-[35%] left-1/2 w-[400px] h-[300px] rounded-full blur-3xl animate-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(39, 224, 179, 0.12) 0%, rgba(97, 220, 163, 0.08) 50%, transparent 100%)",
              animationDelay: "2s",
            }}
          />
        </div>

        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
        // style={{
        //   backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        // }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Headline - Two Line Structure */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-4xl text-primary font-inter-display font-medium italic"
              >
                get started with the
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-text-primary font-montserrat font-bold leading-tight"
              >
                <span className="relative inline-block">
                  {/* RGB Glitch Layers - Red Channel */}
                  <motion.span
                    className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-montserrat font-bold text-text-primary tracking-tighter"
                    style={{
                      textShadow: `
                        -2px 0 0 rgba(255, 0, 0, 0.4),
                        2px 0 0 rgba(0, 255, 255, 0.4)
                      `,
                      clipPath: "inset(0 0 60% 0)",
                    }}
                    animate={{
                      x: [0, -3, 0, 3, 0],
                      opacity: [0, 1, 1, 0, 0],
                    }}
                    transition={{
                      duration: 0.15,
                      repeat: Infinity,
                      repeatDelay: 2.5,
                      times: [0, 0.1, 0.3, 0.4, 0.5],
                    }}
                  >
                    # 1 Cybersecurity Training
                    <br />
                    <span className="text-primary font-bold">Platform Today</span>
                  </motion.span>

                  {/* RGB Glitch Layers - Blue Channel */}
                  <motion.span
                    className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-montserrat text-text-primary"
                    style={{
                      textShadow: `
                        2px 0 0 rgba(0, 255, 255, 0.4),
                        -2px 0 0 rgba(255, 0, 0, 0.4)
                      `,
                      clipPath: "inset(40% 0 0 0)",
                    }}
                    animate={{
                      x: [0, 3, 0, -3, 0],
                      opacity: [0, 1, 1, 0, 0],
                    }}
                    transition={{
                      duration: 0.15,
                      repeat: Infinity,
                      repeatDelay: 2.7,
                      times: [0, 0.1, 0.3, 0.4, 0.5],
                    }}
                  >
                    # 1 Cybersecurity Training
                    <br />
                    <span className="text-primary">Platform Today</span>
                  </motion.span>

                  {/* Main Text with Glitch Effect */}
                  <motion.span
                    className="relative inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-montserrat font-bold text-text-primary"
                    animate={{
                      x: [0, -1, 1, -1, 0],
                    }}
                    transition={{
                      duration: 0.1,
                      repeat: Infinity,
                      repeatDelay: 3,
                      times: [0, 0.25, 0.5, 0.75, 1],
                    }}
                  >
                    # 1 Cybersecurity Training
                    <br />
                    <span className="text-primary">Platform Today</span>
                  </motion.span>

                  {/* Glitch Noise Overlay */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `
                        repeating-linear-gradient(
                          0deg,
                          transparent,
                          transparent 2px,
                          rgba(0, 0, 0, 0.03) 2px,
                          rgba(0, 0, 0, 0.03) 4px
                        )
                      `,
                      mixBlendMode: "multiply",
                    }}
                    animate={{
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 0.1,
                      repeat: Infinity,
                      repeatDelay: 2.8,
                      times: [0, 0.5, 1],
                    }}
                  />
                </span>
              </motion.h2>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <CTAButton
                label="Request a Callback"
                onClick={handleCallbackModalOpen}
                variant="dark"
                className="shrink-0 bg-linear-to-l from-neutral-600 to-neutral-900 font-inter-display font-semibold ring ring-neutral-300 ring-offset-2 md:ring-offset-4 shadow-lg cursor-pointer"
              />
              <CTAButton
                to="/cyber-defense-programs"
                label="Explore Programs"
                variant="light"
                className="shrink-0 bg-linear-to-l from-neutral-100 to-neutral-300 font-inter-display font-semibold ring ring-neutral-300 ring-offset-2 md:ring-offset-4 shadow-lg cursor-pointer"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>


      {/* Callback Modal */}
      <CallbackModal
        isOpen={isCallbackModalOpen}
        onClose={handleCallbackModalClose}
      />
    </section>
  );
};

export default CallToAction;
