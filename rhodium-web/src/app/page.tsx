import * as React from "react";
import Link from "next/link";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";


type ValueCardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const ValueCard: React.FC<ValueCardProps> = ({src, alt, title, description}) => (
  <article className="flex flex-col grow px-16 pb-20 w-full bg-white rounded-3xl shadow-sm max-md:px-5 max-md:mt-7">
    <div className="flex z-10 justify-center items-center self-center px-12 mt-0 bg-indigo-700 rounded-full h-[191px] w-[191px] max-md:px-5">
      <img loading="lazy" src={src} alt={alt} className="w-full aspect-square" />
    </div>
    <h3 className="mt-11 text-2xl font-bold text-zinc-800 max-md:mt-10">{title}</h3>
    <p className="mt-9 text-2xl font-bold text-center text-zinc-800">{description}</p>
  </article>
);

const MyComponent: React.FC = () => {
  const kpis = ["AQUI VAI TER AS KPIS DE MELHORAS QUE COLOCAMOS NO SLIDE", "AQUI VAI TER AS KPIS DE MELHORAS QUE COLOCAMOS NO SLIDE", "AQUI VAI TER AS KPIS DE MELHORAS QUE COLOCAMOS NO SLIDE (COM UMA IMAGEM)"];
  return (
    <body className="bg-white m-0 p-0">
      <header className="bg-red-800 w-full flex justify-between p-6 text-1xl font-bold text-white">
        <div className="bg-indigo-700 rounded-3xl px-7 py-2">Conheça o Rh45</div>
        <nav className="flex gap-10 items-center">
          <section>
            <img src="" alt="" />
            <img src="" alt="" />
          </section>
          <Link href="">Nossa Equipe</Link>
          <Link href="">Sobre Nós</Link>
          <Link href="">Contato</Link>
          <Link href="login" className="bg-white text-indigo-700 rounded-3xl px-5 py-2">Login Colaborador</Link>
        </nav>
      </header>
      
      <section>
        <div>

        </div>
      </section>
    </body>

  );
};

export default MyComponent;
