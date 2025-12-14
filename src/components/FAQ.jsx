import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
    {
        question: "Who do you typically work with?",
        answer: "We typically work with ambitious brands and startups looking to make a significant impact in their industry."
    },
    {
        question: "What does your typical project timeline look like?",
        answer: "Timelines vary depending on project scope, but generally range from 4-8 weeks for a standard web project."
    },
    {
        question: "How does your pricing work?",
        answer: "We offer project-based pricing tailored to your specific needs and goals. Contact us for a detailed proposal."
    },
    {
        question: "Do you offer revisions?",
        answer: "Yes, we include a standard number of revision rounds in all our contracts to ensure you are completely satisfied."
    },
    {
        question: "How do we get started?",
        answer: "Simply reach out via our contact form, and we'll schedule a discovery call to discuss your project."
    },
    {
        question: "Do you offer ongoing support or retainers?",
        answer: "Absolutely. We offer various support packages and retainer options to keep your digital presence optimized."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section">
            <div className="faq-image-wrapper">
                {/* Visual reference placeholder - User can replace or I use one of existing */}
                <img src="public/faq-cover.webp" alt="FAQ Hero" className="faq-image" />
            </div>

            <div className="faq-content-wrapper">
                <div className="faq-label-row">
                    <div className="circle-indicator"></div>
                    <span className="faq-label">FAQ</span>
                </div>

                <div className="faq-main-content">
                    <div className="faq-headline-col">
                        <h2 className="faq-headline">Clear answers to your key questions</h2>
                    </div>

                    <div className="faq-list-col">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="faq-question-row">
                                    <span className="faq-plus">{activeIndex === index ? '-' : '+'}</span>
                                    <h3 className="faq-question">{item.question}</h3>
                                </div>
                                <div className={`faq-answer-wrapper ${activeIndex === index ? 'open' : ''}`}>
                                    <div className="faq-answer">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
