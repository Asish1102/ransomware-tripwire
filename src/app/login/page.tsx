import React from "react";
import { Lock, LogIn, Key, Users } from "lucide-react";

export default function Login() {
  return (
    <div className="flex flex-col gap-12 font-sans text-foreground pb-24 min-h-[80vh] items-center justify-center pt-20">
      <div className="w-full max-w-md px-6">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20 glow">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-extrabold text-white">Dashboard Login</h1>
          <p className="text-gray-400 mt-2 text-sm">Sign in to your enterprise console.</p>
        </div>

        <form action="/dashboard" className="glass-panel p-8 rounded-2xl border border-card-border bg-gradient-to-b from-secondary to-background shadow-2xl flex flex-col gap-6 w-full">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email address</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="email" 
                defaultValue="reyyaasish@lpu.in"
                className="w-full bg-[#0a0f1c] border border-gray-700/50 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary transition-colors" 
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2 flex justify-between">
              <span>Password</span>
              <a href="#" className="text-primary hover:underline text-xs">Forgot?</a>
            </label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="password"
                defaultValue="password123"
                className="w-full bg-[#0a0f1c] border border-gray-700/50 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-primary transition-colors" 
              />
            </div>
          </div>

          <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-background font-bold py-3 mt-4 rounded-lg transition-all glow text-sm">
            <LogIn className="w-5 h-5" /> Sign In securely
          </button>
        </form>
        <p className="text-center text-xs text-gray-600 mt-6 mt-4">For demo purposes, just click Sign In securely.</p>
      </div>
    </div>
  );
}
