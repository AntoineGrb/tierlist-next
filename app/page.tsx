import { ListProps } from "../app/lib/interfaces";
import CardsList from "@/src/components/cardsList/page";
import CardCreateList from "@/src/components/cardCreateList/page";
import { getLists } from "../app/lib/data";

export default async function Home() {

  // Get lists from the server component
  const lists: ListProps[] = await getLists();  

  return (
    <main className="bg-black min-h-screen px-3 py-10 lg:pt-20">
      <section className="pb-4">
        <h2 className="font-oswald text-4xl pb-6 lg:text-5xl"> Create your tier list in a few seconds </h2>
        <p className=" text-justify lg:text-lg"> Discover the ultimate tool for bringing your tier lists to life, all at your fingertips. Whether you're a fervent fan of gaming, movies, sports, or even programming languages, our platform empowers you to swiftly craft bespoke tier lists or utilize our vast library of templates. Dive into a world where your opinions are visualized in a compelling, organized manner. Perfect for enthusiasts eager to categorize their favorites or communities looking to debate the best and worst in any category. </p>
      </section>
      <CardsList title="Populars" lists={lists.filter(list => list.isPopular)} />
      <CardCreateList />
      <CardsList title="Sports" lists={lists.filter(list => list.category === 'Sports')} />
      <CardsList title="Movies" lists={lists.filter(list => list.category === 'Movies')} />
      <CardsList title="Mangas" lists={lists.filter(list => list.category === 'Mangas')} />
      <CardsList title="Games" lists={lists.filter(list => list.category === 'Games')} />
    </main>
  );
}
