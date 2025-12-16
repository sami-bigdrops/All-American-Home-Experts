'use client';

import { useState } from "react";

interface SubscribeUnsubscribeFormProps {
    type: 'subscribe' | 'unsubscribe';
    onSuccess?: () => void;
}

export function SubscribeUnsubscribeForm({ type, onSuccess }: SubscribeUnsubscribeFormProps) {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        
        if (errors.email) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.email;
                return newErrors;
            });
        }
    };

    const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const emailValue = e.target.value.trim();
        if (emailValue && !validateEmail(emailValue)) {
            setErrors(prev => ({
                ...prev,
                email: 'Please enter a valid email address',
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const newErrors: Record<string, string> = {};
        
        if (!email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        
        setErrors(newErrors);
        
        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);
            
            try {
                const endpoint = type === 'subscribe' ? '/api/subscribe' : '/api/unsubscribe';
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email.trim() }),
                });
                
                const data = await response.json();
                
                if (response.ok && data.success) {
                    setToastMessage(data.message || `${type === 'subscribe' ? 'Subscribed' : 'Unsubscribed'} successfully!`);
                    setShowToast(true);
                    setEmail('');
                    
                    setTimeout(() => {
                        setShowToast(false);
                        if (onSuccess) {
                            setTimeout(() => {
                                onSuccess();
                            }, 500);
                        }
                    }, 3000);
                } else {
                    setErrors({
                        submit: data.error || `Failed to ${type}. Please try again.`,
                    });
                }
            } catch {
                setErrors({
                    submit: 'An error occurred. Please try again later.',
                });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="relative">
            {showToast && (
                <div className="mb-4 rounded-lg bg-green-100 p-4 text-green-800">
                    {toastMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="block font-body text-[13px] font-medium text-(--color-black-grey) sm:text-[14px]">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}
                        className={`w-full rounded-lg border px-4 py-3 font-body text-[14px] text-(--color-black-grey) placeholder:text-(--color-black-grey) placeholder:opacity-50 focus:outline-none sm:text-[15px] ${
                            errors.email ? 'border-red-500 focus:border-red-500' : 'border-(--color-grey) focus:border-(--color-blue)'
                        }`}
                        placeholder="Enter your email address"
                        disabled={isSubmitting}
                    />
                    {errors.email && (
                        <p className="font-body text-[12px] text-red-500 sm:text-[13px]">
                            {errors.email}
                        </p>
                    )}
                </div>

                {errors.submit && (
                    <div className="rounded-lg bg-red-100 p-3 text-red-800">
                        <p className="font-body text-[13px] sm:text-[14px]">
                            {errors.submit}
                        </p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-(--color-blue) px-6 py-3 font-body text-[14px] font-semibold text-(--color-white) transition-opacity hover:opacity-90 disabled:opacity-50 sm:text-[15px]"
                >
                    {isSubmitting ? 'Processing...' : type === 'subscribe' ? 'Subscribe' : 'Unsubscribe'}
                </button>
            </form>
        </div>
    );
}

