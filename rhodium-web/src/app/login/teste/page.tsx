import * as React from 'react';

type InputFieldProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
};

const InputField: React.FC<InputFieldProps> = ({ id, label, type, placeholder }) => (
  <div className="items-center self-stretch px-16 pt-5 pb-3.5 mt-6 text-4xl leading-8 bg-white rounded-[50px] text-black text-opacity-60 max-md:px-5 max-md:max-w-full">
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
    <section className="px-20 pb-7 bg-white max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="shrink-0 self-center bg-blue-500 h-[110px] rounded-[400px_0px_0px_0px] w-[120px]" />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <form className="flex flex-col grow mt-80 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col items-center px-16 pt-12 pb-6 font-medium bg-blue-500 rounded-[78px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] text-neutral-50 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col items-center max-w-full w-[566px]">
                <h1 className="text-8xl font-bold max-md:text-4xl">Login</h1>
                <InputField id="email" label="Digite seu e-mail" type="email" placeholder="Digite seu e-mail" />
                <InputField id="password" label="Digite sua senha" type="password" placeholder="Digite sua senha" />
                <button className="justify-center py-5 pr-20 pl-20 mt-12 text-5xl font-semibold text-blue-500 whitespace-nowrap bg-white rounded-2xl max-md:px-8 max-md:mt-10 max-md:text-4xl">
                  Entrar
                </button>
                <div className="mt-4 text-2xl">Esqueci minha senha</div>
              </div>
            </div>
            <div className="self-end mt-20 max-w-full w-[491px] max-md:mt-10">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
                  <div className="text-xl font-bold text-white underline max-md:mt-10">
                    Esqueci minha senha{' '}
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
                  <div className="flex justify-center items-center px-11 mx-auto mt-1 rounded-full bg-neutral-100 h-[153px] w-[153px] max-md:px-5 max-md:mt-10">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e181e915239e231435d940084dbe70cc1ee35a3f6d36765feded1017416d05d?apiKey=2a3f227b49f6403f9674773b7e573a4b&" className="aspect-[1.61] w-[69px]" alt="Icon" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MyComponent;