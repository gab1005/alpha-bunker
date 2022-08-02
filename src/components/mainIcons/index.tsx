interface Types {
  image: string;
  imageAlt?: string;
  subTitle: string;
  classNameImage?: string;
  classNameText?: string;
}

/**
 * Archive: src/components/bgContainer/index.tsx
 *
 * Description: background padrão de toda pagina
 *
 * Date: 2022/07/01
 *
 * Author: Gabriel de Sousa (gab1005)
 */

export const MainIcons = (props: Types) => {
  return (
    <div className="w-[70px] h-[54px] m-0 p-0 box-border">
      <div
        className={`${props.classNameImage} w-[54px] h-[46px] mb-[9px] bg-[#75ACB1] flex justify-center items-center rounded-[5px] m-0 p-0`}
      >
        <img src={props.image} alt={props.imageAlt} />
      </div>

      <p
        className={`${props.classNameText} font-normal text-[12px] leading-[15px] text-white`}
      >
        {props.subTitle}
      </p>
    </div>
  );
};
