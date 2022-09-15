import {FidgetSpinner} from "react-loader-spinner";

export default function Loader() {
  return (
    <FidgetSpinner
      visible={true}
      height="150"
      width="150"
      ariaLabel="fidget-loading"
      wrapperStyle={{}}
      wrapperClass="fidget-wrapper"
      ballColors={["#5ba6fd", "#f85144", "#ffcb05"]}
      backgroundColor="#063B79"
    />
  );
}
