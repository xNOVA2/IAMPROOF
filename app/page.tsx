"use client";
import { login } from "@/API/auth.api";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SigninFields } from "@/type";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { toast } from "sonner";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignInSchema } from "@/validation/auth.validation";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Page() {
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);
  const { mutateAsync, status } = useMutation({
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

    toast.success("Login success");
    localStorage.setItem("token", response.data.accessToken);
    Cookies.set("accessToken", response.data.accessToken, { expires: 7 });
    router.push("/dashboard");
  };

  return (
    <div 
    style={{
      scale:"1.0",
      width: "100%", 
    }}>

    <div className="bg-gradient-to-br from-blue-900 via-cyan-600 to-green-500 min-h-screen flex items-center justify-center p-4 sm:p-8"
   
    >
      <div className="w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 bg-white rounded-lg p-6 sm:p-8"
      
      >
        {/* Logo */}
        <div className="flex justify-center">
          <Image src={"/assets/logo.svg"} alt="Logo" width={200} height={200} />
        </div>

        {/* Form */}
        <form className="mt-8 mx-4 sm:mx-8" onSubmit={handleSubmit(onSubmit)}>
          {/* Username Field */}
          <Label htmlFor="username" className="text-black text-md">
            Username
          </Label>
          <Input
            placeholder="Username"
            id="username"
            className="w-full py-2 sm:py-3 focus:border-transparent"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 mt-1 sm:mt-2">
              {errors.email.message as string}
            </span>
          )}
          <br />

          {/* Password Field */}
          <Label htmlFor="password" className="text-black text-md">
            Password
          </Label>
          <div className="relative">
            <Image
              src={"/assets/eye.png"}
              alt="Eye"
              width={20}
              height={20}
              className="absolute right-2 top-3 sm:top-4 cursor-pointer "
              onClick={() => setShow(!show)}
            />
            <Input
              placeholder="Password"
              id="password"
              className="w-full py-2 sm:py-3 focus:border-transparent"
              type={`${show ? "text" : "password"}`}
              {...register("password")}
            />
          </div>
          {errors.password && (
            <span className="text-red-500 mt-1 sm:mt-2">
              {errors.password.message as string}
            </span>
          )}
          <br />

          {/* Remember me checkbox */}
          <div className="flex items-center justify-center space-x-2 mt-3 sm:mt-4">
            <input type="checkbox" className="rounded p-1 sm:p-2" />
            <Label htmlFor="terms" className="text-black text-md">
              Remember me
            </Label>
          </div>

          {/* Login button */}
          <button className="py-2 sm:py-3 mt-3 sm:mt-4 w-full bg-[#E8F3F5]">
            {status == "pending" ? "Loading..." : "Log in"}
          </button>
        </form>

        {/* Forget password link */}
        <p className="flex justify-center underline mt-3 sm:mt-4 text-black text-md cursor-pointer">
          Forget your password
        </p>
      </div>
    </div>
    </div>
  );
}
