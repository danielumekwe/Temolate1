import { Square, Circle, Triangle, Hexagon } from "lucide-react";

export const heroConfig = {
    badge: "Website Design Company In Nigeria",

    headlines: [
        {
            text: "WEBSITE",
            className: "",
        },

        {
            text: "DESIGN",
            className: "text-[#D9862B]",
        },

        {
            text: "AGENCY IN NIGERIA",
            className: "",
        },
    ],

    description:
        "We are Nigeria’s trusted website design company based in Lagos, delivering professional corporate websites, ecommerce solutions and digital experiences for businesses, organizations and entrepreneurs.",

    buttons: {
        primary: {
            label: "View Projects",
        },

        secondary: {
            label: "Get Quote",
        },
    },

    shapeAnimationDelay: 0.6,
};

export const featuresConfig = {
    label: "Our Approach",

    title: "Minimalist Design",

    subtitle: "Maximum Impact",

    features: [
        {
            icon: Square,

            title: "Website Design",

            description:
                "Professional corporate websites built for businesses, brands and organizations.",
        },

        {
            icon: Circle,

            title: "eCommerce Development",

            description:
                "Online stores designed to help businesses sell products and receive payments.",
        },

        {
            icon: Triangle,

            title: "SEO Optimization",

            description:
                "Improve visibility, rankings and organic traffic with structured SEO campaigns.",
        },

        {
            icon: Hexagon,

            title: "Hosting & Email",

            description:
                "Reliable hosting and secure business email solutions for companies.",
        },
    ],
};

export const workConfig = {
    label: "Selected Work",

    title: "Seeing our clients",

    subtitle: "win is what gets us excited",

    projects: [
        {
            title: "Anglican AIM",

            subtitle: "Church Website",

            image: "/projects/anglican.png",

            year: "2025",
        },

        {
            title: "Runis Fashion",

            subtitle: "Fashion Ecommerce",

            image: "/projects/runis.png",

            year: "2025",
        },

        {
            title: "Labanba Properties",

            subtitle: "Real Estate Website",

            image: "/projects/labanba.png",

            year: "2025",
        },

        {
            title: "Blackezer Foundation",

            subtitle: "NGO Website",

            image: "/projects/blackezer.png",

            year: "2025",
        },
    ],
};

export const processConfig = {
    label: "How We Work",

    title: "Our Process",

    subtitle: "Step by Step",

    steps: [
        {
            number: "01",

            title: "Discovery",

            description:
                "We analyze your business goals and understand your requirements.",
        },

        {
            number: "02",

            title: "Strategy",

            description:
                "We create the website structure, branding direction and content plan.",
        },

        {
            number: "03",

            title: "Design",

            description:
                "We create professional interfaces and user experiences.",
        },

        {
            number: "04",

            title: "Development",

            description:
                "We build responsive websites with modern technologies.",
        },

        {
            number: "05",

            title: "Launch",

            description:
                "Deployment, optimization and ongoing support.",
        },
    ],
};

export const testimonialsConfig = {
    label: "Testimonials",

    title: "What Our Clients",

    subtitle: "Say About Us",

    testimonials: [
        {
            quote:
                "Web365 delivered a professional website that improved our online presence and customer trust.",

            author: "Corporate Client",

            role: "Business Owner",
        },

        {
            quote:
                "Professional support and quality delivery throughout the project.",

            author: "SME Client",

            role: "Lagos Nigeria",
        },

        {
            quote:
                "Their SEO structure and website strategy helped our business visibility.",

            author: "Marketing Team",

            role: "Agency Client",
        },
    ],
};

export const pricingConfig = {
    label: "Pricing",

    title: "Website Packages",

    subtitle: "Choose Your Plan",

    plans: [
        {
            name: "Starter",

            description: "Small business website",

            monthlyPrice: 180,

            annualPrice: 1800,

            features: [
                "5 Pages",
                "Responsive Design",
                "Contact Form",
                "Basic SEO",
                "Delivery Support",
            ],

            cta: "Get Started",

            popular: false,
        },

        {
            name: "Business",

            description: "Corporate websites",

            monthlyPrice: 390,

            annualPrice: 3900,

            features: [
                "10 Pages",
                "CMS",
                "SEO Setup",
                "Hosting Support",
                "Business Email",
            ],

            cta: "Get Started",

            popular: true,
        },

        {
            name: "Premium",

            description: "Advanced business solution",

            monthlyPrice: 790,

            annualPrice: 7900,

            features: [
                "Unlimited Pages",
                "eCommerce",
                "SEO",
                "Custom Features",
                "Priority Support",
            ],

            cta: "Contact Us",

            popular: false,
        },
    ],
};

export const contactConfig = {
    label: "Contact",

    title: "Let's Work",

    subtitle: "Together",

    info: {
        email: "info@web365ng.com",

        phone: "+234 913 644 2520",

        address: {
            street: "Lagos",

            city: "Nigeria",

            country: "Nigeria",
        },
    },
};