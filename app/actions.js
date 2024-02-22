"use server";
import { db, todosTable } from "./db";
import { redirect } from "next/navigation";
import { emojiRegex } from "./regexes";

export async function submit(form) {
  const text = form.get("text") + "";
  if (!emojiRegex.test(text)) return;
  await db.insert(todosTable).values({ text });
  redirect("/");
}
