import * as React from "react";

type ValueCardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const ValueCard: React.FC<ValueCardProps> = ({ src, alt, title, description }) => (
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
    <div className="flex flex-col items-center pt-8 bg-white m-0 border border-gray-0 p-4">
      <header className="flex gap-5 justify-between w-full text-2xl font-bold text-white max-w-[1763px] max-md:flex-wrap max-md:max-w-full">
        <div className="justify-center self-start px-7 py-4 mt-2 bg-indigo-700 rounded-3xl max-md:px-5">Conheça o Rh45</div>
        <nav className="flex gap-5 items-center px-5 max-md:flex-wrap max-md:max-w-full">
          <section className="flex flex-col self-stretch text-xl whitespace-nowrap">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a19c6592cd01dfe93559984adceb0503257da99c64261405cc1239dbb4e2bda8?apiKey=2a3f227b49f6403f9674773b7e573a4b&" alt="Company Logo" className="self-center aspect-[1.27] w-[84px]" />
            <span className="mt-1.5">RHODIUM</span>
          </section>
          <a href="#team" className="flex-auto self-stretch my-auto">Nossa equipe</a>
          <a href="#about-us" className="flex-auto self-stretch my-auto">Sobre nós</a>
          <a href="#contact" className="self-stretch my-auto">Contato</a>
          <a href="#login" className="justify-center self-start px-5 py-4 mt-2 text-indigo-700 bg-white rounded-3xl">Login colaborador</a>
        </nav>
      </header>

      <section className="flex gap-5 justify-between mt-20 w-full text-3xl font-bold max-w-[1541px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col self-end px-5 mt-48 max-md:mt-10 max-md:max-w-full">
          <h2 className="text-8xl text-indigo-700 max-md:max-w-full max-md:text-4xl">
            Sobre a <span className="text-indigo-700">Rhodium</span>
          </h2>
          <p className="mt-8 text-black max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit duis. Volutpat
          </p>
          <a href="#contact" className="justify-center self-start px-6 py-4 mt-6 text-white whitespace-nowrap bg-indigo-700 rounded-3xl max-md:px-5">Contate-nos</a>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a6ef5fa2308d65a48a32c430fbd8aab7f91e8db2f30b74e7f999e08b0bca6a3?apiKey=2a3f227b49f6403f9674773b7e573a4b&" alt="About Rhodium" className="w-full aspect-[1.19] max-md:max-w-full" />
      </section>

      <section className="flex overflow-hidden relative flex-col items-center self-stretch px-16 pt-20 pb-4 mt-32 w-full shadow-sm fill-[linear-gradient(90deg,#263238_-1%,#3633CC_95.04%)] min-h-[1177px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f264e052c2b61b36cbc05b1372af35dd5cd558735657af7d9a947718bb6cc2a?apiKey=2a3f227b49f6403f9674773b7e573a4b&" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col mt-7 max-w-full w-[1173px]">
          <div className="flex gap-5 justify-between items-start text-xl font-bold text-white max-md:flex-wrap max-md:max-w-full">
            {kpis.map((kpi, index) => (
              <div key={index}>{kpi}</div>
            ))}
          </div>
          <h2 className="self-center mt-24 text-8xl font-bold text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            <span className="text-white">Nossos</span> <span className="text-white">Valores</span>
          </h2>
          <div className="px-0.5 mt-24 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
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
          <h2 className="self-center mt-24 text-8xl font-bold text-center text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">Polindo experiências</h2>
        </div>
      </section>

      <section className="mt-3 text-8xl font-bold text-center text-indigo-700 max-md:max-w-full max-md:text-4xl">para brilhar</section>
      <p className="z-10 mt-16 text-3xl text-center text-black max-md:mt-10 max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit duis. Volutpat
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

      <footer className="flex overflow-hidden relative flex-col self-stretch pt-20 mt-56 w-full min-h-[417px] max-md:mt-10 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfd3936e0a5dec19c9318bd0aa6cf60a5d5316e7c2558b02df89444f626f7249?apiKey=2a3f227b49f6403f9674773b7e573a4b&" alt="Footer Background" className="object-cover absolute inset-0 size-full" />
        <div className="relative mt-64 w-full bg-gray-800 min-h-[85px] max-md:mt-10 max-md:max-w-full"></div>
      </footer>
    </div>
  );
};

export default MyComponent;