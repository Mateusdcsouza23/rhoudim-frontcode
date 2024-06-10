import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type InputFieldProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
};
const InputField: React.FC<InputFieldProps> = ({ id, label, type, placeholder }) => (
    <div className="items-center self-stretch px-28 pt-1 pb-2.5 mt-6 text-2xl leading-4 bg-white rounded-[50px] text-black text-opacity-60 max-md:px-5 max-md:max-w-full ">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        aria-label={label}
        className="bg-transparent border-none w-full focus:outline-none"
      />
    </div>
  );

  const MyComponent: React.FC = () => {
    return (
        <div className="flex w-full flex-col h-auto bg-white m-0 p-0 pb-6">
            <header className="w-full flex  text-1xl font-bold text-white">
                <nav className="flex justify-between items-center w-3/5">
                    <Link href="http://localhost:3000/" className="flex bg-blue-500 rounded-3xl px-5 py-2 ml-6 gap-4">
                      <Image src="/Arrow 1.png" width={40} height={5} alt="flecha"></Image>
                      Voltar
                    </Link>
                    <Image src="/Logo.png" width={200} height={60} alt="logo"></Image>
                    
                </nav>
            </header>

            <section className="flex justify-between items-center">
              <div className='ml-40'>
                <Image src="/Frame 1.png" width={450} height={200} alt="pessoa"></Image>
              </div>
              <div className="flex flex-col">
                <form action="">
                  <div className="bg-blue-500 flex flex-col items-center px-10 pt-8 pb-8 rounded-[42px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] text-neutral-50 max-md:px-2 max-md:max-w-full mr-40">
                    <div className='flex flex-col items-center max-w-full w-[460px]'>
                      <h1 className='text-5xl font-bold max-md:text-2xl mb-2'>Login</h1>
                      <InputField id="email" label="Digite seu e-mail" type="email" placeholder="Digite seu e-mail" />
                      <InputField id="password" label="Digite sua senha" type="password" placeholder="Digite sua senha" />
                      <button className="justify-center py-2 pr-16 pl-16 mt-8 text-2xl font-semibold text-blue-500 whitespace-nowrap bg-white rounded-2xl max-md:px-8 max-md:mt-10 max-md:text-4xl">
                        Entrar
                      </button>
                      <div className="mt-4 text-1xl"><u>Esqueci minha senha</u></div>
                    </div>
                  </div>
                </form>
              </div>
            </section>
            <div className='flex flex-row-reverse mr-8'>
                <div>
                  <Image src="/Frame 3.png" width={80} height={200} alt='carta'></Image>
                </div>
              </div>
            
        </div>
    )
  };

  export default MyComponent;