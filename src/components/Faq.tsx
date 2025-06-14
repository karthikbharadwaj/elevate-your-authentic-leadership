
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
    question: "What if I'm not in a formal leadership role yet?",
    answer: "That's the perfect time to start. The principles in the 4P Leadership Compass are designed to help you develop executive presence and influence, making you the obvious choice for the next leadership opportunity, even before you have the title."
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
    <section className="py-24 hero-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text section-divider relative pb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[var(--text-color)] max-w-3xl mx-auto">
            Your questions, answered. Here’s what you need to know about the 4P Leadership Compass program.
          </p>
        </div>
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="glass-card mb-4 rounded-xl border-0 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-[var(--text-color)] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-[var(--text-color-secondary)] leading-relaxed">
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
