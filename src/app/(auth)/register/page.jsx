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
  InputGroup,
  TextField,
} from "@heroui/react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.imageUrl,
    });
    if (error) {
      toast.error("Registration failed! ");
    } else {
      toast.success("Registration successful! Please log in.");
      router.push("/login");
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
        <h2 className="text-3xl font-bold my-4 text-center">Create Account</h2>
        <Form
          className="flex flex-col gap-4"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={onSubmit}
        >
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label className="font-semibold">Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>
          <TextField name="imageUrl" isRequired>
            <Label className="font-semibold">Image URL</Label>
            <Input
              type="url"
              placeholder="https://example.com/tutor.jpg"
              className="rounded-2xl"
            />
            <FieldError />
          </TextField>
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
            className="w-full max-w-full"
            name="password"
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
            <InputGroup>
              <InputGroup.Input
                className="w-full max-w-full"
                type={isVisible ? "text" : "password"}
                placeholder="Enter your password"
              />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <MdOutlineRemoveRedEye className="size-4" />
                  ) : (
                    <FaRegEyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <Button
            className="mt-4 w-full rounded-full bg-[#0d8a6c]"
            type="submit"
          >
            Register
          </Button>
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
          Already have an account?{" "}
          <Link href="/login" className="text-[#0d8a6c] hover:underline">
            Login Now
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default RegisterPage;
