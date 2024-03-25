import React from "react";
import faqsData from "../data/faqsData";

const Faqs = () => {
  return (
    <div className="border rounded-3xl bg-bg-gray h-fit pb-10">
      <h2 className="text-center font-medium futura-bold-text text-4xl p-10">
        Frequently Asked Questions
      </h2>
      {faqsData.map((faq, index) => {
        return (
          <div key={index} className="join join-vertical w-full px-5">
            <div className="collapse collapse-plus join-item border-b border-base-300 py-5">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-2xl font-bold futura-md-bt">
                {faq.title}
              </div>
              <div className="collapse-content">
                <p
                  className="font-poppins font-normal text-lg"
                  dangerouslySetInnerHTML={{ __html: faq.description }}
                ></p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faqs;
