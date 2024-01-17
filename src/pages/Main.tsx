import { MainSlide } from "../components/MainSlide/MainSlide";
import { MainCollection } from "../modules/MainCollection";
import { InfoBlock } from "../components/InfoBlock/InfoBlock";
import { FAQ } from "../components/FAQ/FAQ";

export const Main = () => {
  return (
    <>
      <MainSlide />
      <MainCollection />
      <InfoBlock />
      <FAQ />
    </>
  );
};
