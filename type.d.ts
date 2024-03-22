interface SiginFields {
    email: string;
    password: string;
  }
  
  export type SigninFields = z.infer<typeof SignInSchema>;