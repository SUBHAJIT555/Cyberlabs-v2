import { motion } from "framer-motion";
import { CONTACT } from "@/constants/contactInfo";



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


        {/* Address Section with Google Maps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="w-full border border-neutral-300 border-dashed rounded-md p-2 md:p-4"
          style={{
            background:
              "repeating-linear-gradient(135deg, #f9fafb 0px, #f9fafb 1px, transparent 1px, transparent 4px), white",
          }}
        >
          <div className="mb-6">
            <h3 className="text-2xl font-inter-display font-semibold tracking-tight text-text-primary mb-4">
              Our Addresses :
            </h3>
          </div>

          {/* Three Maps in a Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            {/* India Office */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full flex flex-col border-b md:border-b-0 md:border-r border-neutral-300 border-dashed md:pr-4 pb-4"
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
              <div className="w-full h-[300px] md:h-[350px] overflow-hidden rounded-md">
                <iframe
                  className="border border-textcolor/60 rounded-md"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.123456789!2d73.8067244!3d18.5598964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0b0c0c0c0c1%3A0x1234567890abcdef!2sVB%20Capital%2C%20Office%20No.%20702%20%26%20705%2C%20Aundh%2C%20Haveli%2C%20Pune%20411007%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1703837058988!5m2!1sen!2sin"
                  style={{
                    height: "100%",
                    width: "100%",
                    border: "2px solid #e1e1e1",
                  }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* USA Office */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full flex flex-col md:border-r border-b md:border-b-0 border-neutral-300 border-dashed md:pr-4 pb-4"
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
              <div className="w-full h-[300px] md:h-[350px] overflow-hidden rounded-md">
                <iframe
                  className="border border-textcolor/60 rounded-md"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.123456789!2d-73.9876543!3d40.7501234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a123456789%3A0xabcdef1234567890!2s1430%20Broadway%2C%20Manhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1703837058988!5m2!1sen!2sus"
                  style={{
                    height: "100%",
                    width: "100%",
                    border: "2px solid #e1e1e1",
                  }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Israel Office */}
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
              <div className="w-full h-[300px] md:h-[350px] overflow-hidden rounded-md">
                <iframe
                  className="border border-textcolor/60 rounded-md"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.123456789!2d34.8123456!3d32.1654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4a123456789%3A0xabcdef1234567890!2sMedinat%20Hayehudim%2085%2C%20Herzliya%2C%20Israel!5e0!3m2!1sen!2sil!4v1703837058988!5m2!1sen!2sil"
                  style={{
                    height: "100%",
                    width: "100%",
                    border: "2px solid #e1e1e1",
                  }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>

          <div className=" mt-6 pt-6 border-t border-neutral-200">
            <p className="text-text-primary font-inter-display text-lg sm:text-xl md:text-2xl leading-relaxed font-medium mb-4">
              👉 CYBERLABS was founded in Israel, drawing from one of the world’s most advanced cybersecurity ecosystems.
            </p>
            <p className="font-inter-display text-lg sm:text-xl md:text-2xl leading-relaxed font-medium text-text-primary/90">
              👉 Our Israeli operations continue to play a key role in shaping our training philosophy, investigative depth, and operational standards.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactAddress;
