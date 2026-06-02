import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-white to-slate-100 px-4">
      <div className="text-center max-w-2xl">
        

        <h1 className="text-8xl md:text-9xl font-extrabold text-primary">
          404
        </h1>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center">
          <Link href="/">
            <Button className="bg-[#0d8a6c] text-white" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
