import ItemsList from "@/src/components/itemsList/page";

export default function Home() {
  return (
    <main className="bg-black min-h-screen px-3 py-6">
      <section className="pb-4">
        <h2 className=" pb-4"> Créé une tierlist en quelques secondes ! </h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit provident, at facere atque, rerum placeat modi distinctio illo culpa saepe dignissimos voluptates non voluptate, dolores quibusdam minus temporibus voluptatum quidem? Voluptates beatae similique, quia, possimus ad impedit esse velit molestiae molestias cupiditate, sint facilis quaerat alias repellendus amet adipisci.</p>
      </section>
      <ItemsList title="Les plus populaires" />
      <ItemsList title="Jeux vidéos" />
      <ItemsList title="Sports" />
    </main>
  );
}
