"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const router = useRouter()
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
      
    });
    const { data: tokenData } = await authClient.token();
    console.log(tokenData);

    if (error) {
      toast.error("Login failed! Please check your credentials.");
    } else {
      toast.success("Login successful! Redirecting...");
      router.push("/")
    }
    
  };

  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="max-w-xl mx-auto mt-40 mb-20 px-6">
      <Card className="border p-10">
        <div className="my-8 text-center">
          <h2 className="text-3xl font-extrabold ">
            Welcome <span className="text-emerald-600">Back</span>
          </h2>
          <p>Continue Your Learning Journey today</p>
        </div>
        <Form
          className="flex flex-col gap-4"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={onSubmit}
        >
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="font-semibold">Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="font-semibold">Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <p className="text-right text-[#0d8a6c] font-semibold text-sm">Forgot Password?</p>

          <div className="flex gap-2 mt-2">
            <Button type="submit" className="bg-[#0d8a6c] text-white">
              Login
            </Button>
            <Button type="reset" variant="secondary" className="text-[#0d8a6c]">
              Reset
            </Button>
          </div>
        </Form>

        {/* separator */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>

          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-500">OR</span>
          </div>
        </div>

        <Button
          onClick={handleGoogleSignin}
          variant="outline"
          className="w-full rounded-full font-semibold"
        >
          <FcGoogle />
          Sign in with Google
        </Button>
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/register" className="text-[#0d8a6c] hover:underline">
            Register Now
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;
