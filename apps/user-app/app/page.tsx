import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

import {PrismaClient} from "@repo/db/client"

const prisma = new PrismaClient()

export default function Home() {
  return (
    <div className="text-3xl text-center"> 
      Hello world
    </div>
  );
}
