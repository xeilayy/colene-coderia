"use client";

import React, { useState } from "react";
import { FiCheck, FiPlus } from "react-icons/fi";

const PricingCard = ({ plan, isAnnual }) => {
  const isPopular = plan.name === "Professional";
  const price = isAnnual ? plan.price.annual : plan.price.monthly;

  return (
    <div
      className={`bg-[#111115] p-8 rounded-xl border ${
        isPopular ? "border-purple-600" : "border-gray-700"
      } flex flex-col`}
    >
      {isPopular && (
        <div className="text-right -mr-8 -mt-8 mb-4">
          <span className="bg-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-tr-xl rounded-bl-xl">
            MOST POPULAR
          </span>
        </div>
      )}
      <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
      <p className="text-gray-400 mt-2 mb-6 flex-grow">{plan.description}</p>

      <div className="mb-6">
        <span className="text-5xl font-bold text-white">${price}</span>
        <span className="text-gray-400">/ month</span>
      </div>

      <ul className="space-y-4 mb-8 text-gray-300">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <FiCheck className="text-green-500 w-5 h-5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full mt-auto py-3 rounded-lg font-semibold transition-colors ${
          isPopular
            ? "bg-purple-600 hover:bg-purple-700 text-white"
            : "bg-gray-700 hover:bg-gray-600 text-white"
        }`}
      >
        Get Started
      </button>
    </div>
  );
};

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-semibold text-white">{faq.question}</h4>
        <div className="text-purple-400">
          <FiPlus
            className="transition-transform duration-300"
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="pb-6 text-gray-400">{faq.answer}</p>
      </div>
    </div>
  );
};

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "For individuals and small teams getting started.",
      price: { monthly: 0, annual: 0 },
      features: [
        "1 Project",
        "Basic AI assistance",
        "Community support",
        "5GB Storage",
      ],
    },
    {
      name: "Hobby",
      description: "For hobbyists and developers building personal projects.",
      price: { monthly: 10, annual: 8 },
      features: [
        "5 Projects",
        "Advanced AI assistance",
        "Email support",
        "20GB Storage",
      ],
    },
    {
      name: "Professional",
      description:
        "For professional developers and teams building commercial applications.",
      price: { monthly: 30, annual: 25 },
      features: [
        "Unlimited Projects",
        "Full AI capabilities",
        "Priority support",
        "100GB Storage",
      ],
    },
  ];

  const faqs = [
    {
      question: "Can I use the Pro version for free?",
      answer:
        "Yes, we offer a 14-day free trial for the Professional plan. No credit card is required to get started. You can explore all the features and decide if it's the right fit for you.",
    },
    {
      question: "What happens after my trial ends?",
      answer:
        "After your 14-day trial, your account will be automatically downgraded to the Free plan. You won't lose your projects, but access to Professional features will be restricted until you upgrade.",
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer:
        "Absolutely! We support non-profit organizations with a special discount. Please contact our sales team with your organization's details to learn more about our non-profit program.",
    },
    {
      question: "What is the uptime guarantee?",
      answer:
        "We offer a 99.9% uptime Service Level Agreement (SLA) for our Professional plan customers. We are committed to providing a reliable and stable platform for your projects.",
    },
  ];

  return (
    <div className=" text-white min-h-screen font-sans p-8">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <section className="text-center mb-12">
          <span className="m-auto flex items-center justify-center gap-2 w-44 bg-[#1F1F1F] text-gray-300 text-sm font-medium px-4 py-1.5 rounded-full mb-4 ">
            <div className="bg-green-600 w-1.5 h-1.5 rounded-full animate-[pulse-green_2s_infinite]"></div>
            Transparent Pricing 
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose the Right Plan for You
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Start for free and scale up as you grow. All plans include our core
            features and 24/7 support.
          </p>
        </section>

        <section className="flex justify-center items-center gap-4 mb-12">
          <span
            className={`font-semibold ${
              !isAnnual ? "text-white" : "text-gray-500"
            }`}
          >
            Billed Monthly
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isAnnual}
              onChange={() => setIsAnnual(!isAnnual)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
          </label>
          <span
            className={`font-semibold ${
              isAnnual ? "text-white" : "text-gray-500"
            }`}
          >
            Billed Annually{" "}
            <span className="text-green-400 text-sm">(Save 20%)</span>
          </span>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} isAnnual={isAnnual} />
          ))}
        </section>

        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} />
            ))}
          </div>
        </section>

        <section className="bg-[#111115] border border-gray-800 rounded-xl text-center p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Create your account and start building your next project in minutes.
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full sm:w-auto">
              Start Free Trial
            </button>
            <button className="bg-transparent border border-gray-600 hover:bg-gray-800 text-gray-300 font-bold py-3 px-8 rounded-lg transition-colors w-full sm:w-auto">
              Contact Sales
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
