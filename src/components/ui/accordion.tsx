import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({ title, content, isOpen, onToggle }: AccordionItemProps) => {
  return (
    <div className="border-b border-neutral-300 border-dashed last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-4 sm:py-5 md:py-6 flex items-center justify-between text-left group"
      >
        <h3 className="text-lg sm:text-xl md:text-2xl font-inter-display font-semibold text-text-primary pr-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
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
            <motion.p
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="pb-4 sm:pb-5 md:pb-6 text-base sm:text-lg md:text-xl font-inter-display text-text-primary"
            >
              {content}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: Array<{ title: string; content: string }>;
  defaultOpen?: number;
}

export const Accordion = ({ items, defaultOpen }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen ?? null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};
