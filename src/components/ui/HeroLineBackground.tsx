const heroLineLayerStyle = {
    WebkitMaskImage: "linear-gradient(to bottom, #000 0%, transparent 75%)",
    maskImage: "linear-gradient(to bottom, #000 0%, transparent 75%)",
    backgroundImage:
        "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, #d4d4d8 3px, #d4d4d8 4px)",
    opacity: 0.65,
} as const;

const HeroLineBackground = () => (
    <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0" style={heroLineLayerStyle} />
    </div>
);

export default HeroLineBackground;
