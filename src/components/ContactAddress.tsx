import { motion } from "framer-motion";
import { CONTACT } from "@/constants/contactInfo";
import { crosshatchBgStyle } from "@/constants/bootcampStyles";

const horizontalLinesFadeStyle = {
    WebkitMaskImage: "linear-gradient(to bottom, #000 0%, transparent 75%)",
    backgroundImage:
        "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, #d4d4d8 3px, #d4d4d8 4px)",
    height: "100%",
    left: 0,
    maskImage: "linear-gradient(to bottom, #000 0%, transparent 75%)",
    opacity: 0.5,
    pointerEvents: "none" as const,
    position: "absolute" as const,
    top: 0,
    width: "100%",
};

const HorizontalLinesBg = () => (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <div style={horizontalLinesFadeStyle} />
    </div>
);

const ContactAddress = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <div>
            <div className="py-4 sm:py-6 md:py-6 lg:py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="relative w-full border border-neutral-200 bg-white shadow-sm rounded-xl overflow-hidden p-2 md:p-4"
                >
                    <HorizontalLinesBg />
                    <div className="relative z-10 p-4 sm:p-6">
                        <div className="mb-6">
                            <h3 className="text-2xl font-inter-display font-semibold tracking-tight text-text-primary mb-4">
                                Our Addresses :
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="w-full flex flex-col border-b md:border-b-0 md:border-r border-neutral-200 md:pr-4 pb-4"
                            >
                                <div className="mb-3 h-[110px] flex flex-col justify-start">
                                    <h4 className="text-lg font-inter-display font-semibold text-text-primary mb-2">
                                        India Office
                                    </h4>
                                    <p className="text-sm sm:text-base text-text-primary font-inter-display font-medium leading-relaxed">
                                        {CONTACT.officeAddressIndia[0]}<br />
                                        {CONTACT.officeAddressIndia[1]}<br />
                                        {CONTACT.officeAddressIndia[2]}
                                    </p>
                                </div>
                                <div className="w-full h-[300px] md:h-[350px] overflow-hidden rounded-lg border border-neutral-200">
                                    <iframe
                                        className="rounded-lg"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.123456789!2d73.8067244!3d18.5598964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0b0c0c0c0c1%3A0x1234567890abcdef!2sVB%20Capital%2C%20Office%20No.%20702%20%26%20705%2C%20Aundh%2C%20Haveli%2C%20Pune%20411007%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1703837058988!5m2!1sen!2sin"
                                        style={{ height: "100%", width: "100%", border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="w-full flex flex-col md:border-r border-b md:border-b-0 border-neutral-200 md:pr-4 pb-4"
                            >
                                <div className="mb-3 h-[110px] flex flex-col justify-start">
                                    <h4 className="text-lg font-inter-display font-semibold text-text-primary mb-2">
                                        United States Office
                                    </h4>
                                    <p className="text-sm sm:text-base text-text-primary font-inter-display font-medium leading-relaxed">
                                        1430 Broadway<br />
                                        Manhattan, New York<br />
                                        United States
                                    </p>
                                </div>
                                <div className="w-full h-[300px] md:h-[350px] overflow-hidden rounded-lg border border-neutral-200">
                                    <iframe
                                        className="rounded-lg"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.123456789!2d-73.9876543!3d40.7501234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a123456789%3A0xabcdef1234567890!2s1430%20Broadway%2C%20Manhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1703837058988!5m2!1sen!2sus"
                                        style={{ height: "100%", width: "100%", border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="w-full flex flex-col"
                            >
                                <div className="mb-3 h-[110px] flex flex-col justify-start">
                                    <h4 className="text-lg font-inter-display font-semibold text-text-primary mb-2">
                                        Israel Operations Office
                                    </h4>
                                    <p className="text-sm sm:text-base text-text-primary font-inter-display font-medium leading-relaxed">
                                        Medinat Hayehudim 85<br />
                                        Herzliya, Israel
                                    </p>
                                </div>
                                <div className="w-full h-[300px] md:h-[350px] overflow-hidden rounded-lg border border-neutral-200">
                                    <iframe
                                        className="rounded-lg"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.123456789!2d34.8123456!3d32.1654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4a123456789%3A0xabcdef1234567890!2sMedinat%20Hayehudim%2085%2C%20Herzliya%2C%20Israel!5e0!3m2!1sen!2sil!4v1703837058988!5m2!1sen!2sil"
                                        style={{ height: "100%", width: "100%", border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative mt-6 pt-6 border-t border-neutral-200 border-dashed rounded-lg overflow-hidden">
                            <div className="absolute inset-0 z-0 pointer-events-none" style={crosshatchBgStyle} />
                            <div className="relative z-10 space-y-4 p-4 sm:p-5">
                                <p className="text-text-primary font-inter-display text-lg sm:text-xl md:text-2xl leading-relaxed font-medium">
                                    👉 CYBERLABS was founded in Israel, drawing from one of the world&apos;s most advanced cybersecurity ecosystems.
                                </p>
                                <p className="font-inter-display text-lg sm:text-xl md:text-2xl leading-relaxed font-medium text-text-primary/90">
                                    👉 Our Israeli operations continue to play a key role in shaping our training philosophy, investigative depth, and operational standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactAddress;
