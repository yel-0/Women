import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import UpdateDialogFaq from "@/Design/components/UpdateDialogFaq";
import DeleteDialogFaq from "@/Design/components/DeleteDialogFaq";
import CreateDialogFaq from "@/Design/components/CreateDialogFaq";
const PostDetailByAdmin = () => {
  const post = {
    title: "Understanding Abortion: A Comprehensive Guide",
    content: `Abortion is the termination of a pregnancy by removal or expulsion of an embryo or fetus.
          It can occur spontaneously, in which case it is usually called a miscarriage, or it can be
          medically induced. This guide covers the types, procedures, risks, and ethical considerations
          surrounding abortion.
          
          Abortion is a deeply personal decision that can be influenced by numerous factors including
          health, personal circumstances, and beliefs. It is important to understand the available options
          and the implications of each. This guide aims to provide balanced and factual information to help
          individuals make informed decisions.
          
          For further reading, we discuss the history of abortion laws, the medical procedures involved,
          and the psychological and physical impacts that may accompany the process.
        `,
    category: "Health & Wellness",
    faq: [
      {
        question: "What are the types of abortion?",
        answer:
          "There are two main types of abortion: medical and surgical. Medical abortion involves the use of medications to terminate a pregnancy, typically within the first 10 weeks. Surgical abortion involves a minor procedure to remove the pregnancy from the uterus. The type of abortion chosen can depend on various factors including gestational age and medical history.",
      },
      {
        question: "Is abortion safe?",
        answer:
          "Abortion is considered safe when performed by trained healthcare providers using approved methods. The risks associated with abortion are generally lower than those associated with childbirth, especially when performed in the early stages of pregnancy. It is important to seek care from reputable providers and to be aware of the signs of complications.",
      },
      {
        question: "How can I find support if I'm considering an abortion?",
        answer:
          "It is crucial to have support when considering an abortion. This can include talking to a healthcare provider, seeking counseling services, or joining support groups. Many organizations provide confidential and non-judgmental support to help individuals navigate their options and make informed decisions.",
      },
    ],
  };
  return (
    <div>
      <div className="w-full space-y-6">
        <div className=" p-6 space-y-4  ">
          <h1 className="text-lg font-bold text-gray-800">{post.title}</h1>
          <p className="text-gray-600 w-full text-justify leading-6">
            {post.content}
          </p>
          <div className="mt-6">
            <CreateDialogFaq />
            <Accordion type="single" collapsible>
              {post.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-lg font-medium ">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                    <div className="mt-4 gap-5 flex">
                      <UpdateDialogFaq
                        question={item.question}
                        answer={item.answer}
                      />
                      <DeleteDialogFaq />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailByAdmin;
