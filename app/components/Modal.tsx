'use client';

import { useEffect } from 'react';
import { Form } from './Form';
import { useModal } from '../contexts/ModalContext';

export function Modal() {
    const { isModalOpen, closeModal } = useModal();
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    if (!isModalOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={closeModal}
        >
            <div
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg bg-(--color-white) shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={closeModal}
                    className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-(--color-grey) text-(--color-black-grey) transition-opacity hover:opacity-70 sm:h-9 sm:w-9"
                    aria-label="Close modal"
                >
                    <svg
                        className="h-5 w-5 sm:h-6 sm:w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className="p-6 sm:p-8">
                    <h2 className="mb-6 font-title text-[24px] font-extrabold text-(--color-dark-blue) sm:text-[28px] md:text-[32px]">
                        Get In Touch
                    </h2>
                    <Form onSuccess={closeModal} />
                </div>
            </div>
        </div>
    );
}

