
import Link from "next/link";
import { auth, signOut , signIn } from "@/lib/auth";
export default async function Home() {

  const session  = await auth()


  return (
    <>
      {!session? <Link href="/api/auth/signin" >Sign In</Link>: <p>{session.user.name}</p>}

      
    </>
  );
}
