import React from 'react';
import { FiPhone, FiMapPin } from 'react-icons/fi';
import { BsEnvelope } from 'react-icons/bs';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}; 

type Props = {}

function Contact({}: Props) {
     const { 
        register, 
        handleSubmit, 
        } = useForm<Inputs>();

     const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:patrickgbecker@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
     };

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-center md:text-left  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='hidden md:inline-flex absolute top-24 uppercase tracking-[20px] text-[#eeb343] text-2xl'> 
            Contact Me
        </h3> 

        <div className='flex flex-col space-y-10'>
            <h4 className='text-[#a49746] text-4xl font-semibold text-center'>
                Let's Talk!
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                     <FiPhone className='text-[#eeb343] h-7 w-7 animate-pulse' />
                     <p className='text-2xl'>720-371-0394</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                     <FiMapPin className='text-[#eeb343] h-7 w-7 animate-pulse' />
                     <p className='text-2xl'>Kansas City Metropolitan Metropolitan Area</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                     <BsEnvelope className='text-[#eeb343] h-7 w-7 animate-pulse' />
                     <p className='text-2xl'>patrickgbecker@gmail.com</p>
                </div>
            </div>

            <form 
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col space-y-2 w-fit mx-auto'>
               <div className='flex space-x-2'>
                    <input 
                        {...register('name')} 
                        placeholder='Name' 
                        type='text' 
                        className='contactInput'
                    />
                    <input 
                        {...register('email')} 
                        placeholder='Email' 
                        type='email' 
                        className='contactInput' 
                    />
               </div> 

               <input 
                  {...register('subject')} 
                  placeholder='Subject' 
                  type='text' 
                  className='contactInput'
                />

               <textarea 
                   {...register('message')} 
                   placeholder='Message' 
                   className='contactInput'
               />
               <button 
                 type='submit' 
                 className='bg-[#7cc78c]/80 text-[#34597e] py-5 px-10 rounded-md font-bold text-lg focus:bg-[#eeb343] focus:text=[#34597e] hover:bg-[#eeb343]/70'
                >
                 Submit
               </button>
            </form>
        </div>
    </div>
  );
};

export default Contact