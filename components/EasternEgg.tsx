import Image, { StaticImageData } from "next/image";
import Footer from "./Footer";
import Link from "next/link";
interface Props {
  isEggCracked: boolean;
  crackedEgg: StaticImageData;
  egg: StaticImageData;
  openEgg: () => void;
  padding?: string;
}
function EasternEgg({
  isEggCracked,
  crackedEgg,
  openEgg,
  egg,
  padding,
}: Props) {
  return (
    <div
      className={`flex items-center justify-center ${padding && `${padding}`}`}>
      {isEggCracked ? (
        <div className="flex items-center justify-center absolute pl-48">
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
        <Image src={egg} alt="" width={30} height={30} onClick={openEgg} />
      )}
    </div>
  );
}

export default EasternEgg;
