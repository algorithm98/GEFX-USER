"use client";

import React from 'react'
import { signOut } from 'next-auth/react'; "nextauth/React"

export default function SignOutButton({type}:{type:string}) {
  return (
    <div className="h-screen flex justify-center items-center">
      <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" 
      onClick={() => 
      signOut({ 
        callbackUrl: type == "Admin" ? "/admin/login" : "/login", 
        redirect: true })}
      >
        Sign Out
    </button>
    </div>
  );
}
