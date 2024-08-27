"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { contactusSchema } from "@/utils/yupSchema";
import Swal from "sweetalert2";
import { Icon } from "@iconify/react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    console.log("values", values);
    try {
      setLoading(true);
      const formData = {
        ...values,
        check: "This form is submitted from texinity webiste",
      };
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        resetForm();
        Swal.fire({
          title: "Message Sent!",
          text: "Your message has been submitted successfully!",
          icon: "success",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while submitting your message. Please try again later.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid px-5 md:grid-cols-2 my-12 md:my-12 sm:py-24 py-4 gap-4 relative">
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
      <div className="z-10">
        <h5 className="text-3xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex items-center flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="linkedin.com">
            <Icon icon="jam:fiverr" className="text-4xl text-white" />
            {/* <Image src={LinkedinIcon} alt="Linkedin Icon" /> */}
          </Link>
          <Link href="linkedin.com">
            <Icon icon="bxl:upwork" className="text-5xl text-white" />
            {/* <Image src={LinkedinIcon} alt="Linkedin Icon" /> */}
          </Link>
        </div>
      </div>
      <Formik
        initialValues={{
          subject: "",
          email: "",
          message: "",
        }}
        validationSchema={contactusSchema}
        onSubmit={handleSubmit}>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <Form className="flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2  font-medium">
                Your email
              </label>
              <Field
                name="email"
                type="email"
                id="email"
                className="bg-[#18191E] border border-[#33353F] focus:border-[#c9f31d] focus:outline-none placeholder-[#9CA2A9] text-gray-100  rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="font-medium pt-3 text-red-600"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block  mb-2 font-medium">
                Subject
              </label>
              <Field
                name="subject"
                type="text"
                id="subject"
                className="bg-[#18191E] border border-[#33353F] focus:border-[#c9f31d] focus:outline-none placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
              <ErrorMessage
                name="subject"
                component="div"
                className="font-medium pt-3 text-red-600"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block  mb-2 font-medium">
                Message
              </label>
              <Field
                as="textarea"
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] focus:border-[#c9f31d] focus:outline-none text-gray-100  rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
              <ErrorMessage
                name="message"
                component="div"
                className="font-medium pt-3 text-red-600"
              />
            </div>
            <button
              type="submit"
              className="bg-[#c9f31d] hover:bg-[#b4c964] text-black font-medium py-2.5 px-5 rounded-lg w-full">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default EmailSection;
