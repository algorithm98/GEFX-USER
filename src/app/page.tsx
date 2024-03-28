import SignOutButton from "@/components/signOutButton";
import {getServerSession} from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/options"
import { redirect } from "next/navigation";



export default async function Home() {

  const session = await getServerSession(authOptions)
  if(!session){
     redirect("/login")
  }

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="bg-purple-300 text-2xl font-bold p-4 rounded-md mb-6">Welcome To GlobalEmpireFx</h1>
      <>
      <span className="font-bold text-3xl">Profile</span>
      <br />
      <h1 className="bg-purple-300 w-80 h-12 justify-center font-bold p-4 rounded-md mb-6">Name : {session.user?.name}</h1>
      <br />
      <h1 className="bg-purple-300 w-80 h-12 justify-center font-bold p-4 rounded-md mb-6">Email : {session.user?.email}</h1>
      <br />
      <h1 className="bg-purple-300 w-80 h-12 justify-center font-bold p-4 rounded-md mb-6">Type :  {session.user?.role}</h1>
      <br />
      {/* <h1 className="bg-purple-300 w-80 h-12 justify-center font-bold p-4 rounded-md mb-6">Contact : </h1>
      <br /> */}
      <span className="font-bold text-3xl">Credentials</span>
      <br />
      <div className="bg-purple-300 border border-500 w-80 h-12 rounded-lg">
      <h1 className="bg-purple-300 w-80 h-12 justify-center font-bold p-4 rounded-md mb-6">{session.user?.Credentials}</h1>
      </div>
    </>

    {/* <p>{JSON.stringify(session)}</p> */}


      <br />
      <SignOutButton type={""} />
    </div>
  );
}
