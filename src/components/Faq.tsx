
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Who is this program for?",
    answer: "This program is designed for ambitious tech leaders, managers, and senior individual contributors who are ready to break through to the next level but feel stuck. If you're brilliant technically but are being overlooked for promotions, this is for you."
  },
  {
    question: "Who is it not for?",
    answer: "This program is not for those looking for a 'magic bullet' or unwilling to do the deep work of self-reflection and consistent action. It is also not suitable for individuals who are not in a technology-focused career, as the coaching is tailored to the specific challenges of the tech industry."
  },
  {
    question: "What is Coaching?",
    answer: "Coaching is a collaborative partnership designed to help you unlock your full potential. It's a forward-looking process where we identify your goals, overcome obstacles, and create actionable strategies for you to achieve personal and professional growth. Unlike consulting or mentoring, coaching empowers you to find your own answers."
  },
  {
    question: "What if I'm not in a formal leadership role yet?",
    answer: "That's the perfect time to start. The principles in the 4P Leadership Accelerator are designed to help you develop executive presence and influence, making you the obvious choice for the next leadership opportunity, even before you have the title."
  },
  {
    question: "How long is the program?",
    answer: "The intensive program is 3 months. This is a focused period of transformation where we work together to build your leadership foundation and create a clear roadmap for your career advancement."
  },
  {
    question: "What is the investment?",
    answer: "Think of this not as a cost, but as an investment in your future earning potential and career satisfaction. We can discuss the specific investment on our initial strategy call to ensure it's the right fit for you."
  },
  {
    question: "What kind of results can I expect?",
    answer: "Clients typically experience a significant boost in confidence, clarity in their career direction, and the ability to navigate complex organizational politics. Many receive promotions or take on expanded leadership roles within 6 months of completing the program."
  },
  {
    question: "How do I get started?",
    answer: "The first step is to book a complimentary 30-minute strategy call. We'll diagnose what's holding you back and see if we're a good fit to work together. Click the 'Book Your Call' button on this page to schedule your session."
  }
];

export const Faq = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Questions? <span className="gradient-text">Answered.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about the 4P Leadership Accelerator program
          </p>
        </div>
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="bg-white border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
