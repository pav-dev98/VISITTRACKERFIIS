import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
// import { Label } from "@/components/ui/label"
import img from "@/assets/rb_18380.png";

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="bg-zinc-900 w-1/2 flex items-center relative justify-center">
        <img src={img} alt="frontis" className="w-[400px]" />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-[rgba(1,1,1,.5)] flex items-center justify-center">

            <h1 className="text-white text-4xl">Tracker FIIS</h1>

        </div> */}
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials below to login your account
            </p>
          </div>
          <div className="grid gap-6">
            <form>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <Input placeholder="email" />
                </div>
                <div className="grid gap-1">
                  <Input placeholder="password" />
                </div>
                <Button>
                  <Mail /> Login with Email
                </Button>
              </div>
            </form>
            <Separator></Separator>
            <Button variant="secondary">Login with Microsoft</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
