import BugReportIcon from "@mui/icons-material/BugReport";
import styleComponent from "./styleComponent/styleFailFetchData";
import { useLocation } from "react-router-dom";
const FailToFetchDataPage = () => {
  const { ContinerBox, ParentBox, Text, Text1 } = styleComponent;
  const locationData = useLocation();
  const { state } = locationData || { errorStatus: "" };
  const { errorStatus } = state;
  return (
    <ParentBox>
      <ContinerBox>
        <BugReportIcon sx={{ fontSize: "6rem" }} />
        <Text as="h1" onClick={() => console.log(state)}>
          Error {errorStatus}
        </Text>
        <Text1 as="h2">Failed to fetch :-(</Text1>
      </ContinerBox>
    </ParentBox>
  );
};
export default FailToFetchDataPage;
