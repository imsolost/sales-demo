import { Property } from "csstype";
import styled from "styled-components";

const Cta1 = styled.b`position: relative;
  font-size: ${(p) => p.cTAFontSize}
  display: ${(p) => p.cTADisplay}
`;
const CtaDefault = styled.div`position: absolute;
  top: 0px;
  left: 0px;
  background-color: #7aefb2;
  display: flex;
  flex-direction: row;
  padding: 8px 18px;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${(p) => p.cTADefaultBackgroundColor}
  box-sizing: ${(p) => p.cTADefaultBoxSizing}
  cursor: ${(p) => p.cTADefaultCursor}
  border: ${(p) => p.cTADefaultBorder}
`;
const Cta11 = styled.b`position: relative;
  font-size: ${(p) => p.cTAFontSize1}
  display: ${(p) => p.cTADisplay1}
`;
const CtaDisabled = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #b6f6d5;
  display: none;
  flex-direction: row;
  padding: 8px 18px;
  align-items: flex-start;
  justify-content: flex-start;
  color: #7a7a7a;
  box-sizing: ${(p) => p.cTADisabledBoxSizing};
`;
const CtaRoot = styled.div`position: relative;
  width: 65px;
  height: 35px;
  text-align: left;
  font-size: 16px;
  color: #222;
  font-family: Barlow;
  width: ${(p) => p.cTAWidth}
  height: ${(p) => p.cTAHeight}
`;
const CTA = ({
  buttonText,
  cTADisabled,
  cTAWidth,
  cTAHeight,
  cTADefaultBackgroundColor,
  cTADefaultBoxSizing,
  cTADefaultCursor,
  cTADefaultBorder,
  cTAFontSize,
  cTADisplay,
  cTADisabledBoxSizing,
  cTAFontSize1,
  cTADisplay1,
  onCTADefaultClick,
}) => {
  return (
    <CtaRoot cTAWidth={cTAWidth} cTAHeight={cTAHeight}>
      <CtaDefault
        cTADefaultBackgroundColor={cTADefaultBackgroundColor}
        cTADefaultBoxSizing={cTADefaultBoxSizing}
        cTADefaultCursor={cTADefaultCursor}
        cTADefaultBorder={cTADefaultBorder}
        onClick={onCTADefaultClick}
      >
        <Cta1 cTAFontSize={cTAFontSize} cTADisplay={cTADisplay}>
          {buttonText}
        </Cta1>
      </CtaDefault>
      {!cTADisabled && (
        <CtaDisabled cTADisabledBoxSizing={cTADisabledBoxSizing}>
          <Cta11 cTAFontSize1={cTAFontSize1} cTADisplay1={cTADisplay1}>
            CTA
          </Cta11>
        </CtaDisabled>
      )}
    </CtaRoot>
  );
};

export default CTA;
