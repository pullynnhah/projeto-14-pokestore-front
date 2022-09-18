import {FidgetSpinner} from "react-loader-spinner";
import styled from "styled-components";
import Page from "./Page";

export default function Loader({type}) {
  type = type ?? "default";
  return (
    <Page type={type}>
      <Wrapper type={type}>
        <FidgetSpinner
          visible={true}
          height="150"
          width="150"
          ariaLabel="fidget-loading"
          wrapperStyle={{}}
          wrapperClass="fidget-wrapper"
          ballColors={["#5BA6FD", "#F85144", "#FFCB05"]}
          backgroundColor="#063B79"
        />
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
    ${props => props.theme[props.type].light},
    ${props => props.theme[props.type].lighter}
  );

  .fidget-wrapper {
    position: fixed;
    top: calc(50vh - 75px);
    left: calc(50vw - 75px);
  }
`;
