/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qWtlDS4p4fd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Verify() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="mx-auto w-full max-w-md space-y-6 rounded-lg bg-card p-6 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Verify your email</h1>
          <p className="text-muted-foreground">
            We've sent a verification code to your email address. Enter the code
            below to confirm your identity.
          </p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-5 gap-2">
            <Input
              maxLength={1}
              pattern="^[0-9]+$"
              className="h-12 w-full rounded-md border border-input bg-transparent px-3 text-center text-lg font-medium focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <Input
              maxLength={1}
              pattern="^[0-9]+$"
              className="h-12 w-full rounded-md border border-input bg-transparent px-3 text-center text-lg font-medium focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <Input
              maxLength={1}
              pattern="^[0-9]+$"
              className="h-12 w-full rounded-md border border-input bg-transparent px-3 text-center text-lg font-medium focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <Input
              maxLength={1}
              pattern="^[0-9]+$"
              className="h-12 w-full rounded-md border border-input bg-transparent px-3 text-center text-lg font-medium focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <Input
              maxLength={1}
              pattern="^[0-9]+$"
              className="h-12 w-full rounded-md border border-input bg-transparent px-3 text-center text-lg font-medium focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
          <Button type="submit" className="w-full">
            Verify
          </Button>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          Didn\'t receive the code?{" "}
          <Link
            href="#"
            className="font-medium underline underline-offset-4"
            prefetch={false}
          >
            Resend
          </Link>
        </div>
      </div>
    </div>
  );
}
