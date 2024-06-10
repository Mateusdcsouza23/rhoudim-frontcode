import * as React from "react";
import Link from "next/link";
import Image from 'next/image';


type ValueCardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const ValueCard: React.FC<ValueCardProps> = ({ src, alt, title, description }) => (
  <article className="flex flex-col grow px-10 pb-10 w-[300px] bg-white rounded-3xl shadow-sm">
    <div className="flex z-10 justify-center items-center self-center  -mt-10 bg-indigo-700 rounded-full px-6 h-[120px] w-[120px] max-md:px-5">
      <img loading="lazy" src={src} alt={alt} className="w-full aspect-square" />
    </div>
    <h3 className="mt-11 flex justify-center text-2xl font-bold text-zinc-800 max-md:mt-10">{title}</h3>
    <p className="mt-9 text-1xl font-bold text-center text-zinc-800">{description}</p>
  </article>
);

const MyComponent: React.FC = () => {
  const kpis = ["AQUI VAI TER AS KPIS DE MELHORAS QUE COLOCAMOS NO SLIDE", "AQUI VAI TER AS KPIS DE MELHORAS QUE COLOCAMOS NO SLIDE", "AQUI VAI TER AS KPIS DE MELHORAS QUE COLOCAMOS NO SLIDE (COM UMA IMAGEM)"];
  return (
    <main className="flex flex-col items-center bg-white m-0 justify-between">
      <div className="w-full flex jusitfy-between flex-row-reverse">
        <div className=" w-3/5">
          <Image src="/Frame 5.png" width={1344} height={1273} alt="image" className="w-full "></Image>
        </div>
      </div>
      <header className="absolute w-full h-24 flex justify-between p-8 text-1xl font-bold text-white items-center">
      <div className="bg-indigo-700 rounded-3xl px-7 py-2 h-10 w-fit">Conheça o Rh45</div>
        <nav className="flex gap-10 items-center">
          <section className="pt-4 mr-8">
            <Image src="/Frame 4.png" width={80} height={2} alt="logo"></Image>
          </section>
          <Link href="">Nossa Equipe</Link>
          <Link href="">Sobre Nós</Link>
          <Link href="">Contato</Link>
          <Link href="login" className="bg-white text-indigo-700 rounded-3xl px-5 py-2">Login Colaborador</Link>
        </nav>
      </header>
      <section className="absolute mt-40 p-6 w-full flex justify-between">
          <div className="flex flex-col self-end px-5">
            <h2 className="text-6xl font-bold">
              Sobre <br />a <span className="text-indigo-700">Rhodium</span>
            </h2>
            <p className="text-2xl mt-6 font-bold">
            Somos especialistas em soluções de RH, <br />
            oferecendo sistemas eficientes e inovadores <br />
            para otimizar a gestão de pessoas. <br />
            Com nossa tecnologia, você simplifica processos <br />
            e potencializa resultados.
            </p>
            <Link href="" className="mt-4 bg-indigo-700 text-white rounded-3xl px-7 py-1 w-40 font-bold ">Contate-nos</Link>
          </div>
      </section>
      <section className="w-full ">
          <div className="-mt-48 rounded-tr-lg flex justify-between flex-col">
            <div className="absolute text-white font-bold flex justify-between flex-col items-center">
              <div className="flex gap-4 mt-28
               p-10 px-20 ml-4 items-start text-1xl ">
                {kpis.map((kpi, index) => (
                  <div key={index}>{kpi}</div>
                ))}
              </div>
              <h2 className="self-center mt-13 text-7xl font-bold text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <span className="text-white">Nossos</span> <span className="text-white">Valores</span>
              </h2>
              <div className="px-0.5 mt-24 ">
                <div className="flex gap-10">
                  <ValueCard
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/62f5c7a3b6eef6621f2d388470a0e309a03dde74cd5d570e980b2f9aa9f737a1?apiKey=2a3f227b49f6403f9674773b7e573a4b&"
                    alt="Integridade"
                    title="INTEGRIDADE"
                    description="Priorizamos a integridade em todas as interações, buscando sempre a excelência em nossas operações e entregas."
                  />
                  <ValueCard
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/719e9d6874bbd7702096396e6c8b5c58879e84e29292b8390769fe895274ff36?apiKey=2a3f227b49f6403f9674773b7e573a4b&"
                    alt="Inovação"
                    title="INOVAÇÃO"
                    description="Promovemos uma cultura de inovação, incentivando a colaboração e o trabalho em equipe para desenvolver soluções criativas e eficazes."
                  />
                  <ValueCard
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f985e5b14fae9df0c2ab4fa47ec99a9e38a76438f7c57f5f1c171f9fdd9c549a?apiKey=2a3f227b49f6403f9674773b7e573a4b&"
                    alt="Responsabilidade"
                    title="RESPONSABILIDADE"
                    description="Assumimos a responsabilidade por nossas ações, buscando sempre o benefício dos nossos clientes e contribuindo positivamente para as comunidades em que atuamos."
                  />
                </div>
              </div>
              <h2 className="self-center  mt-3 text-5xl font-bold text-center text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">Polindo experiências</h2>
            </div>
            <Image src="/Rectangle 17.png" width={1920} height={1178} alt="image"></Image>
            
          </div>
      </section>
      <section className="mt-3 text-5xl font-bold text-center text-indigo-700 max-md:max-w-full max-md:text-4xl">para brilhar</section>
      <p className="z-10 px-20 mt-16 text-2xl text-center text-black max-md:mt-10 max-md:max-w-full">
      Nossa empresa é líder em inovação no setor de RH, reconhecida pela excelência de nossos sistemas que simplificam e otimizam a gestão de recursos humanos. Com um compromisso inabalável com a qualidade e a satisfação do cliente, oferecemos soluções robustas e personalizadas que atendem às necessidades específicas de cada negócio, garantindo eficiência, produtividade e crescimento sustentável.
      </p>
      <div className="px-5 max-w-full w-[1136px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <aside className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-3xl text-black max-md:mt-10">
              <p>Sistema interativo</p>
              <p className="mt-12 max-md:mt-10">Fácil de usar</p>
              <p className="mt-12 max-md:mt-10">Acessibilidade</p>
            </div>
          </aside>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8fb21fcb76e055a60b8adfbd5bb29046e5fcfaf2a9ee702a8cb02b192ff1ddb?apiKey=2a3f227b49f6403f9674773b7e573a4b&" alt="Sistema interativo" className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full aspect-square max-md:mt-10 max-md:max-w-full" />
          <aside className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-3xl text-black max-md:mt-10">
              <p>Gerenciamento</p>
              <div className="flex flex-col items-start pl-14 mt-12 whitespace-nowrap max-md:pl-5 max-md:mt-10">
                <p>Minimalista</p>
                <p className="mt-12 ml-5 max-md:mt-10 max-md:ml-2.5">Intuitivo</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <footer className="flex overflow-hidden relative flex-col self-stretch pt-20 mt-56 w-full min-h-[200px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfd3936e0a5dec19c9318bd0aa6cf60a5d5316e7c2558b02df89444f626f7249?apiKey=2a3f227b49f6403f9674773b7e573a4b&" alt="Footer Background" className="object-cover absolute inset-0 size-full" />
        <div className="relative mt-64 w-full bg-gray-800 min-h-[85px] max-md:mt-10 max-md:max-w-full"></div>
      </footer>

      
      
    </main>

  );
};

export default MyComponent;
