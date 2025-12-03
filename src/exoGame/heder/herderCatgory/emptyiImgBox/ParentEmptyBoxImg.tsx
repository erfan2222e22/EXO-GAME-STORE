import BlurText from "./emptyBoxImg";
const ParentEmptyImg = () => {
  return (
    <BlurText
      text="Isn't this so cool?!"
      delay={150}
      animateBy="words"
      direction="top"
      className="text-2xl mb-8"
    ></BlurText>
  );
};
export default ParentEmptyImg;
