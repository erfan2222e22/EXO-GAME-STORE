import BugReportIcon from "@mui/icons-material/BugReport";
import styleComponent from "./styleComponent/styleFailFetchData";
const FailToFetchDataPage = () => {
  const { ContinerBox, ParentBox, Text, Text1 } = styleComponent;
  return (
    <ParentBox>
      <ContinerBox>
        <BugReportIcon sx={{ fontSize: "6rem" }} />
        <Text component="h1">Error</Text>
        <Text1 component="h2">Failed to fetch :-(</Text1>
      </ContinerBox>
    </ParentBox>
  );
};
export default FailToFetchDataPage;
