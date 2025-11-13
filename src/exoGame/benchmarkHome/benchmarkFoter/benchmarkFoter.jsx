import styleComponent from "./Style-Component/StyleBnechmarkFooter";
const BenchMarkFoter = () => {
  const { ParentDiv, Text, BoxImg } = styleComponent;
  return (
    <ParentDiv>
      <Text>
        <strong>What is Exo Mark?</strong>
        <br />
        ExoMark is Exo's technical testing and benchmarking center, through
        which you can access a large database of the world's most reputable
        benchmarks in Persian. Currently, ExoMark focuses on CPU and graphics
        card benchmarks.The base is different models and you can easily access
        the desired benchmark based on your needs and make the best choice for
        your intended use. Also, if you have any questions or need advice, Exo
        will be at your service.
      </Text>
      <BoxImg
        component="img"
        src="https://exo.ir/catalog/view/theme/exo/image/exo-mark-footer.jpg"
        sx={{ width: "66.666667%", height: "50%" }}
      ></BoxImg>
    </ParentDiv>
  );
};

export default BenchMarkFoter;
