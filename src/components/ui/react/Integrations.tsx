import { motion, useInView, type Variants } from 'motion/react';
import { useRef, useState } from 'react';

interface Integration {
    id: string;
    title: string;
    description: string;
    icon: string;
}

const IntegrationsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    const integrations: Integration[] = [
        {
            id: "payments",
            title: "Pagos en Línea",
            description: "Sistemas multi-pago con PayPal, Stripe, Mercado Pago, PSE",
            icon: "💳",
        },
        {
            id: "notifications",
            title: "Notificaciones",
            description: "Envío y manejo con Push Notification, SMTP, SMS",
            icon: "📧",
        },
        {
            id: "geolocation",
            title: "Geolocalización",
            description: "APIs de localización con Google Maps y servicios personalizados",
            icon: "🗺️",
        },
        {
            id: "infrastructure",
            title: "Infraestructura",
            description: "Docker, CI/CD con GitHub Actions, Nginx, Jenkins, Dokku",
            icon: "🛠️",
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const getIconHoverAnimation = (icon: string) => {
        switch (icon) {
            case "💳":
                return {
                    scale: 1.2,
                    rotate: [0, -5, 5, -5, 0],
                };
            case "📧":
                return {
                    y: [0, -8, 0],
                };
            case "🗺️":
                return {
                    scale: 1.3,
                };
            case "🛠️":
                return {
                    rotate: [0, 15, -15, 0],
                };
            default:
                return {
                    scale: 1.1,
                };
        }
    };

    // Transiciones específicas para cada animación
    const getIconTransition = (icon: string) => {
        switch (icon) {
            case "💳":
                return { duration: 0.6, ease: "easeInOut" };
            case "📧":
                return { duration: 0.8, ease: "easeInOut" };
            case "🗺️":
                return { duration: 0.4, ease: "easeOut" };
            case "🛠️":
                return { duration: 0.7, ease: "easeInOut" };
            default:
                return { duration: 0.3 };
        }
    };

    return (
        <section id="integrations" className="flex justify-center items-center w-full px-4 md:px-14 bg-gray-50 dark:bg-gray-900">
            <div className="flex-col space-y-9 relative z-4 p-10 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex-col space-y-3"
                >
                    <h1 className="text-4xl font-bold dark:text-white">
                        Ecosistemas & Integraciones
                    </h1>
                    <p className="text-xl dark:text-gray-300">
                        Soluciones que trascienden el código: integraciones estratégicas
                        para backend, frontend e infraestructura.
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    {integrations.map((integration) => (
                        <motion.div
                            key={integration.id}
                            variants={itemVariants}
                            className="rounded-lg p-4 border border-gray-500 transition-all duration-300 hover:shadow-lg cursor-pointer"
                            whileHover={{
                                borderColor: "rgb(59, 130, 246)",
                            }}
                            onHoverStart={() => setHoveredCard(integration.id)}
                            onHoverEnd={() => setHoveredCard(null)}
                        >
                            <article className="flex items-start space-x-3">
                                <motion.span
                                    animate={hoveredCard === integration.id ? getIconHoverAnimation(integration.icon) : {}}
                                    transition={hoveredCard === integration.id ? getIconTransition(integration.icon) : {}}
                                    className="text-2xl shrink-0"
                                >
                                    {integration.icon}
                                </motion.span>
                                <div>
                                    <strong className="text-xl block">{integration.title}</strong>
                                    <p className="dark:text-gray-400 mt-2 text-sm leading-relaxed">
                                        {integration.description}
                                    </p>
                                </div>
                            </article>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default IntegrationsSection;