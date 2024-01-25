import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
interface Props {
  isEggCracked: boolean;
  crackedEgg: StaticImageData;
  crackedEggWhite: StaticImageData;
  egg: StaticImageData;
  eggWhite: StaticImageData;
  openEgg: () => void;
  padding?: string;
}
function EasternEgg({
  isEggCracked,
  crackedEgg,
  crackedEggWhite,
  openEgg,
  egg,
  eggWhite,
  padding,
}: Props) {
  const { theme, setTheme } = useTheme()
  return (
    <div
      className={`flex items-center justify-center ${
        padding && `${padding}`
      } hover:cursor-pointer`}>
      {isEggCracked ? (
        <div className="flex items-center justify-center flex-col  dark:hidden ">
          <Image
            src={crackedEgg}
            alt=""
            width={40}
            height={40}
            onClick={openEgg}
          />
          <div className="flex items-center justify-center text-xs sm:text-md">
            <div className="hover:text-black">
              <span className="hover:text-black">Developed by &nbsp;</span>
              <Link href={"https://www.cesarcampos.dev"}>
                <span className="link hover:text-indigo-500 hover:cursor-pointer text-xs font-bold">
                  Cesar Campos
                </span>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Image
          className="dark:hidden flex"
          src={egg}
          alt=""
          width={30}
          height={30}
          onClick={openEgg}
        />
      )}

      {isEggCracked ? (
        <div className="hidden items-center justify-center flex-col dark:flex ">
          <Image
            src={crackedEggWhite}
            className=""
            alt=""
            width={40}
            height={40}
            onClick={openEgg}
          />
          <div className="flex items-center justify-center text-xs sm:text-md">
            <div className="hover:text-white">
              <span className="hover:text-white">Developed by &nbsp;</span>
              <Link href={"https://www.cesarcampos.dev"}>
                <span className="link hover:text-indigo-500 hover:cursor-pointer text-xs font-bold">
                  Cesar Campos
                </span>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Image
          className="dark:flex hidden"
          src={eggWhite}
          alt=""
          width={30}
          height={30}
          onClick={openEgg}
        />
      )}
    </div>
  );
}

export default EasternEgg;
