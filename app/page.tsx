'use client'
import { login } from '@/API/auth.api';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SigninFields } from '@/type';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { toast } from "sonner"
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignInSchema } from '@/validation/auth.validation';
import { useRouter } from 'next/navigation';

export default function Page() {

  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);
  const { mutateAsync, status, } = useMutation({
    mutationFn: login,
  
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFields>({ resolver: zodResolver(SignInSchema) });

  const onSubmit: SubmitHandler<SigninFields> = async (data) => {
    const { success, response } = await mutateAsync({
      email: data.email,
      password: data.password,
    });
    if (!success) return toast.error(response);
    console.log(response);
    
    if (response.data.user.role !== "admin") return toast.error("Unauthorized access");
    toast.success("Login success");
    localStorage.setItem("token", response.data.accessToken);
    router.push('/dashboard')
  };

  return (
    <div className='bg-gradient-to-br from-blue-900 via-cyan-600 to-green-500 min-h-screen flex items-center justify-center'>
    <div className='w-3/5 max-w-lg bg-white rounded-lg p-8'>
      {/* Logo */}
      <div className="flex justify-center">
        <Image src={'/assets/logo.svg'} alt='Logo' width={200} height={200} />
      </div>

      {/* Form */}
      <form className="mt-8 mx-16 y-4" onSubmit={handleSubmit(onSubmit)}>

        {/* Username Field */}
        <Label htmlFor="username" className='text-black text-md'>Username</Label>
        <Input placeholder="Username" id='username' className=' py-5 focus:border-transparent' {...register("email")} />
        {errors.email && <span className="text-red-500 mt-4">{errors.email.message as string}</span>}
        <br />

        {/* Password Field */}
        <Label htmlFor="password" className='text-black text-md'>Password</Label>
        <div className='relative'>
          <Image src={'/assets/eye.png'} alt='Eye' width={20} height={20} className='absolute right-2 top-3 cursor-pointer ' onClick={() => setShow(!show)} />
          <Input placeholder="Password" id='password' className="py-5  focus:border-transparent" type={`${show ? 'text' : 'password'}`} {...register("password")} />
        </div>
        {errors.password && <span className="text-red-500">{errors.password.message as string}</span>}
        <br />

        {/* Remember me checkbox */}
        <div className="flex items-center justify-center space-x-2 mt-5">
          <input
            type="checkbox"
            className="rounded p-3"
          />
          <Label htmlFor="terms" className="text-black text-md">Remember me</Label>
        </div>

        {/* Login button */}
        <button className="py-3 mt-4 w-full bg-[#E8F3F5]">{status == 'pending' ? 'Loading...' : 'Log in'}</button>

    

      </form>

      {/* Forget password link */}
      <p className='flex justify-center underline mt-3 text-black text-md cursor-pointer'>Forget your password</p>
    </div>
  </div>
  );
}
