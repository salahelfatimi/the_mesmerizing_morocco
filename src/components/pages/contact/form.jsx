'use client'

import {  Mail, MessageSquare } from "lucide-react";
import Link from "next/link";
import {  useState } from "react";

export default function Form(){
    const [isLoading, setIsLoading] = useState(false);
    const [validation, setValidation] = useState(false);
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      tele: "",
      subject:"",
      comment: "",
    });
    const sendEmail = async (e) => {
      e.preventDefault();
      setValidation(true);
      if (formData.fullName && formData.tele && formData.email && formData.subject) {
        setIsLoading(true);
        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          if (response.status === 200) {
            setFormData({
              fullName: "",
              email: "",
              tele: "",
              subject:"",
              comment: "",
            });
            setValidation(false);
            setIsLoading(false);
          }
        } catch {
            setIsLoading(false);
        }
      }
    };
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({...formData,[name]: value,});
    };
      return(
          <div className=" ">
                      <form className=" w-full  flex flex-col gap-4 p-2 " onSubmit={sendEmail}>
                        <h2 className=" text-white lg:text-primary p-2  text-center  text-2xl lg:text-4xl font-bold uppercase font-serif">Let's get in touch</h2>
                          <div className=" flex flex-col lg:flex-row gap-4">
                              <div className=" w-full">
                                  <input value={formData.fullName} onChange={handleInputChange} type="text" name='fullName' className={` ${!formData.fullName && validation && "border-red-500 placeholder:text-red-500 "} bg-[#EFEFEF] h-12 w-full rounded-lg border-2 p-4 placeholder:capitalize placeholder:text-sm placeholder:font-medium   `} placeholder=' Your Name' />
                                  <p className="text-red-500 text-xs font-medium pl-3">
                                      {!formData.fullName && validation &&"Please enter your first and last name"}
                                  </p>
                              </div>
                              <div className=" w-full">
                                  <input value={formData.tele} onChange={handleInputChange} type="tele" name='tele' className={` ${!formData.tele && validation && "border-red-500 placeholder:text-red-500 "} bg-[#EFEFEF] h-12 w-full rounded-lg border-2 p-4 placeholder:capitalize placeholder:text-sm placeholder:font-medium  `} placeholder=' Your Phone Number' />
                                  <p className="text-red-500 text-xs font-medium pl-3">
                                      {!formData.tele && validation &&"Please enter your Phone number"}
                                  </p>
                              </div>
                              <div className=" w-full">
                                <input value={formData.email} onChange={handleInputChange} type="email" name='email' className={` ${!formData.email && validation && "border-red-500 placeholder:text-red-500 "} bg-[#EFEFEF] h-12 w-full rounded-lg border-2 p-4 placeholder:capitalize placeholder:text-sm placeholder:font-medium  `} placeholder=' Your E-mail' />
                                <p className="text-red-500 text-xs font-medium pl-3">
                                    {!formData.email && validation &&"Please enter your e-mail address"}
                                </p>
                              </div> 
                          </div>
                          <div className=" w-full">
                            <input value={formData.subject} onChange={handleInputChange} type="text" name='subject' className={` ${!formData.subject && validation && "border-red-500 placeholder:text-red-500 "} bg-[#EFEFEF] h-12 w-full rounded-lg border-2 p-4 placeholder:capitalize placeholder:text-sm placeholder:font-medium  `} placeholder=' Type Your Subject' />
                            <p className="text-red-500 text-xs font-medium pl-3">
                                {!formData.subject && validation &&"Please enter your subject"}
                            </p>
                          </div>                  
                          <textarea value={formData.comment} onChange={handleInputChange} className='bg-[#EFEFEF] w-full rounded-lg border-2 p-4 placeholder:capitalize placeholder:text-sm placeholder:font-medium  '  placeholder=' Write Your Question' name="comment" id="comment" cols={30} rows={6}></textarea>
                          <button disabled={isLoading} type="submit" className=' bg-primary text-white  border-2 hover:text-primary  duration-700 hover:bg-secondary border-primary  font-medium text-sm items-center justify-center rounded-full w-full  py-3 px-2 flex gap-1'><Mail className=" h-5"/>  {isLoading? "Sending...": "Send Now"}</button>
                         
                      </form>
          </div>
      )
  }