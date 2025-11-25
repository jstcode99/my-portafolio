import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormInputs } from '@schemas/contactSchema';
import { EmailService } from '@services/emailService';
import { motion, useAnimate } from "motion/react";

const ContactForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
    const [scope, animate] = useAnimate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ContactFormInputs>({
        resolver: zodResolver(contactFormSchema as any),
        mode: 'onSubmit'
    });

    const onSubmit = async (data: ContactFormInputs) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const success = await EmailService.sendContactEmail(data);

            if (success) {
                await animate(scope.current, { 
                    scale: 1,
                    backgroundColor: "#10B981",
                    transition: { type: "spring", duration: 0.5 }
                });
                setSubmitStatus('success');
                reset();
                
                setTimeout(async () => {
                    await animate(scope.current, { 
                        backgroundColor: "rgb(37, 99, 235)" 
                    });
                }, 2000);
            } else {
                await animate(scope.current, { 
                    scale: 1,
                    backgroundColor: "#EF4444",
                    transition: { type: "spring", duration: 0.5 }
                });
                setSubmitStatus('error');
                
                setTimeout(async () => {
                    await animate(scope.current, { 
                        backgroundColor: "rgb(37, 99, 235)" 
                    });
                }, 2000);
            }
        } catch (error) {
            await animate(scope.current, { 
                scale: 1,
                backgroundColor: "#EF4444",
                transition: { type: "spring", duration: 0.5 }
            });
            setSubmitStatus('error');
            console.error('Submission error:', error);
            
            setTimeout(async () => {
                await animate(scope.current, { 
                    backgroundColor: "rgb(37, 99, 235)" 
                });
            }, 2000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative" id='contact'>
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-700 shadow-2xl">
                <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold dark:text-white mb-3">Envíame un Mensaje</h3>
                    <p className="text-slate-600 dark:text-slate-400">Completa el formulario y me pondré en contacto contigo</p>
                </div>

                {/* Status Messages con animaciones */}
                {submitStatus === 'success' && (
                    <motion.div 
                        className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2">
                            <motion.div 
                                className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.5, repeat: 3 }}
                            >
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                            </motion.div>
                            <span>¡Mensaje enviado con éxito! Te responderé en menos de 24 horas.</span>
                        </div>
                    </motion.div>
                )}

                {submitStatus === 'error' && (
                    <motion.div 
                        className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <span>Error al enviar el mensaje. Por favor, intenta nuevamente.</span>
                        </div>
                    </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold dark:text-gray-300">
                                Nombre *
                            </label>
                            <motion.input
                                type="text"
                                {...register('name')}
                                className={`w-full px-4 py-4 border rounded-xl bg-transparent dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                    errors.name
                                        ? 'border-red-500 dark:border-red-400'
                                        : 'border-slate-300 dark:border-slate-600'
                                }`}
                                placeholder="Tu nombre completo"
                                whileFocus={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                            {errors.name && (
                                <motion.p 
                                    className="text-red-500 text-sm mt-1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {errors.name.message}
                                </motion.p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold dark:text-gray-300">
                                Email *
                            </label>
                            <motion.input
                                type="email"
                                {...register('email')}
                                className={`w-full px-4 py-4 border rounded-xl bg-transparent dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                    errors.email
                                        ? 'border-red-500 dark:border-red-400'
                                        : 'border-slate-300 dark:border-slate-600'
                                }`}
                                placeholder="tu@email.com"
                                whileFocus={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                            {errors.email && (
                                <motion.p 
                                    className="text-red-500 text-sm mt-1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {errors.email.message}
                                </motion.p>
                            )}
                        </div>
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold dark:text-gray-300">
                            Asunto *
                        </label>
                        <select
                            {...register('subject')}
                            className={`w-full px-4 py-4 border rounded-xl bg-transparent dark:text-white text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                errors.subject
                                    ? 'border-red-500 dark:border-red-400'
                                    : 'border-slate-300 dark:border-slate-600'
                            }`}
                        >
                            <option value="">Selecciona el tipo de proyecto</option>
                            <option value="web">Desarrollo Web</option>
                            <option value="app">Aplicación Móvil</option>
                            <option value="api">API & Backend</option>
                            <option value="consulting">Consultoría</option>
                            <option value="other">Otro</option>
                        </select>
                        {errors.subject && (
                            <motion.p 
                                className="text-red-500 text-sm mt-1"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {errors.subject.message}
                            </motion.p>
                        )}
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold dark:text-gray-300">
                            Mensaje *
                        </label>
                        <motion.textarea
                            rows={5}
                            {...register('message')}
                            className={`w-full px-4 py-4 border rounded-xl bg-transparent dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                                errors.message
                                    ? 'border-red-500 dark:border-red-400'
                                    : 'border-slate-300 dark:border-slate-600'
                            }`}
                            placeholder="Cuéntame sobre tu proyecto, objetivos y timeline..."
                            whileFocus={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                        {errors.message && (
                            <motion.p 
                                className="text-red-500 text-sm mt-1"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {errors.message.message}
                            </motion.p>
                        )}
                    </div>

                    <motion.button
                        ref={scope}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold py-5 px-6 rounded-xl shadow-lg relative overflow-hidden"
                        whileHover={{ 
                            scale: isSubmitting ? 1 : 1.02,
                            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)"
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.div 
                            className="absolute inset-0 bg-white opacity-0"
                            whileHover={{ opacity: 0.1 }}
                            transition={{ duration: 0.3 }}
                        />
                        
                        <span className="flex items-center justify-center gap-3 relative z-10">
                            {isSubmitting ? (
                                <>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                    />
                                    Enviando...
                                </>
                            ) : submitStatus === 'success' ? (
                                <>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </motion.div>
                                    ¡Enviado!
                                </>
                            ) : (
                                <>
                                    Enviar Mensaje
                                    <motion.svg 
                                        className="w-5 h-5" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </motion.svg>
                                </>
                            )}
                        </span>
                    </motion.button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;