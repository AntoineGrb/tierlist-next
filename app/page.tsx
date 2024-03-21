import { useState, useEffect } from "react";
import ItemsList from "@/src/components/itemsList/page";
import { getLists } from "../app/lib/data";

export default async function Home() {

  const lists = await getLists();

  return (
    <main className="bg-black min-h-screen px-3 py-8">
      <section className="pb-4">
        <h2 className="font-oswald text-3xl pb-4"> CREATE YOUR TIER LIST IN A FEW SECONDS </h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit provident, at facere atque, rerum placeat modi distinctio illo culpa saepe dignissimos voluptates non voluptate, dolores quibusdam minus temporibus voluptatum quidem? Voluptates beatae similique, quia, possimus ad impedit esse velit molestiae molestias cupiditate, sint facilis quaerat alias repellendus amet adipisci.</p>
      </section>
      {lists.map((list) => (
        <p> {list.title} </p>
      ))}
      <ItemsList title="Populars" />
      <ItemsList title="Video games" />
      <ItemsList title="Sports" />
    </main>
  );
}
