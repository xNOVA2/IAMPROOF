import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Register, useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/validation/auth.validation";
import { RegisterType } from "@/types/types";
import { registerSubAdmin } from "@/API/dashboard.api";
import { toast } from "sonner";

export function UsersTableOptions() {
  const { mutateAsync,status } = useMutation({
    mutationFn: registerSubAdmin,
  }); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({ resolver: zodResolver(registerSchema) });

  const onSubmit: SubmitHandler<RegisterType> = async (data) => {
      const {response,success} = await mutateAsync(data);
      if(!success) return toast.error('Failed to create sub-admin');
      toast.success('Sub-admin created successfully');
    };

    return (
    <>
      <Dialog>
        <DialogTrigger>
          <button className="border-2 border-[#439A86] px-6 rounded-full text-[#439A86]">
            Add a new user
          </button>
        </DialogTrigger>
        <DialogContent className="w-full max-w-md">
          <DialogHeader>
            <DialogDescription>
              <div className="flex flex-col items-center justify-center w-full">
                <div className="mb-6">
                  <Image src="/assets/logo.svg" alt="Logo" width={250} height={100} />
                </div>
                <p className="my-4 text-2xl">Create Sub Admin</p>
                <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
                <Input
                  
                  type="text"
                  placeholder="first Name"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <span className="text-red-500">First Name is required</span>
                )}
                  <Input
                  
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <span className="text-red-500">Last Name is required</span>
                )}
                  <Input
                  
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                  <Input
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-500">Password is required</span>
                  )}
                  <button
                    type="submit"
                    className={`bg-[#439A86] text-white px-6 py-2 rounded-full ${
                      status === 'pending' ? "opacity-50 cursor-not-allowed" : "hover:bg-opacity-80"
                    }`}
                    disabled={status === 'pending'}
                  >
                    {status === 'pending' ? "Adding User..." : "Add User"}
                  </button>
                </form>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <button className="border-2 border-[#439A86] px-6 rounded-full text-[#439A86]">
        <Link href={""}>Bulk update users </Link>
      </button>
      <button className="border-2 border-[#439A86] px-6 rounded-full text-[#439A86]">
        <Link href={""}>Download user log</Link>
      </button>
    </>
  );
}

export function TableOptions({ isUsersTableOption }: { isUsersTableOption: boolean }) {
  return (
    <div className="flex justify-end items-center pr-12 mt-2 gap-5">
      {isUsersTableOption && <UsersTableOptions />}

      <button className="border-2 border-[#439A86] px-6 rounded-full text-[#439A86] flex gap-2 items-center justify-center">
        <Link href={""}>More options</Link>
        <Image src="/assets/triangle.svg" width={14} height={10} alt="Icon" />
      </button>
    </div>
  );
}
