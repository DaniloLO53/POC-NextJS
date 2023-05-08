import { db } from "../lib/db";
import Button from "../components/ui/Button";

export default async function Home() {
  await db.set("message", "hello");

  return (
    <main className="text-red-500">
      <Button>
        click here
      </Button>
    </main>
  )
}
