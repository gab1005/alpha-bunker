interface Types {
  image: string;
  imageAlt?: string;
  subTitle: string;
  classNameImage?: string;
  classNameText?: string;
  onClick?: () => void;
}

/**
 * Archive: src/components/bgContainer/index.tsx
 *
 * Description: background padrão de toda pagina
 *
 * Date: 2022/07/01
 *
 * Author: Alehff
 */

export const MainIcons = (props: Types) => {
  return (
    <div className=" m-0 p-0 box-border">
      <button
        onClick={props.onClick}
        className={`${props.classNameImage} w-[54px] h-[46px] mb-[9px] bg-[#75ACB1] flex justify-center items-center rounded-[5px] m-0 p-0`}
      >
        <img src={props.image} alt={props.imageAlt} />
      </button>

      <p
        className={`${props.classNameText} text-white font-normal text-[12px] leading-[15px] text-center`}
      >
        {props.subTitle}
      </p>
    </div>
  );
};
