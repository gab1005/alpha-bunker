interface Type {
  className?: string;
  title?: string;
  icon?: string;
  iconSino?: string;
  children?: any;
}

/**
 * Archive: src/components/mainContainer/index.tsx
 *
 * Description: componente que cria a 'caixa' padrão usada nas paginas principais (extrato, sauque, deposito, transferencia).
 *
 * Date: 2022/07/02
 *
 * Author: Gabriel de Sousa
 */

//py-[12px] px[15px] gap-[25px]
// h-[264px] w-[314px]
//mt-[70%]

export const MainContainer = ({
  className,
  title,
  icon,
  iconSino,
  children,
}: Type) => {
  return (
    <div
      className={`${className} w-[284px] h-[auto] bg-white flex flex-col flex-nowrap rounded-lg  pb-3`}
    >
      {/* title container */}
      <div className="flex flex-row justify-between mt-3 mx-3 mb-6 text-header-gold font-medium text-[1em] leading-[1.25em] ">
        <div className="flex flex-row gap-2">
          <img src={icon} alt="casa-ouro" className="w-5" />

          <p> {title} </p>
        </div>

        <img src={iconSino} alt="sino" className="w-3" />
      </div>

      {/* conteudo */}
      {children}
    </div>
  );
};
