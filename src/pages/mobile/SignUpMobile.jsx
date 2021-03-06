import React from "react";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { LabelMobile } from "../../components/Label";
import MobileViewTemplate, {
  MobileFormWrapper,
} from "../../components/templates/MobileViewTemplate";
import SmallButton from "../../components/buttons/SmallButton";
import {
  Title,
  Description,
  StyledAnchor,
  ShiftedRowButtonContainer,
  SingUpInfoWrapper,
  SingUpInfoMark,
  SingUpInfoParagraph,
  MobileLinkButton,
} from "../../components/SignInUpElements";

const SignUpMobile = () => {
  return (
    <MobileViewTemplate>
      <MobileFormWrapper>
        <Title>Załóż konto</Title>
        <LabelMobile htmlFor="firstName">{"Imię"}</LabelMobile>
        <Input id="firstName" name="firstName" type="text" />
        <LabelMobile htmlFor="secondName">{"Nazwisko"}</LabelMobile>
        <Input id="secondName" name="secondName" type="text" />
        <LabelMobile htmlFor="email">{"Email"}</LabelMobile>
        <Input id="email" name="email" type="email" />
        <LabelMobile htmlFor="password">{"Hasło"}</LabelMobile>
        <Input id="password" name="password" type="password" />
        <Description>
          Masz już konto? Zaloguj się{" "}
          <Link to="../pages/SignInMobile">
            <StyledAnchor>tutaj</StyledAnchor>
          </Link>
        </Description>
        <SingUpInfoWrapper>
          <SingUpInfoMark>!</SingUpInfoMark>
          <SingUpInfoParagraph>
            Wypełnij nasz szczegółowy formularz, żeby korzystać ze wszystkich
            możliwości, zrób to teraz i miej to z głowy!
          </SingUpInfoParagraph>
          <SingUpInfoParagraph>
            Możesz też pominąć ten krok i przyglądać się naszemu portalowi z
            nieco dalszej odległości!
          </SingUpInfoParagraph>
        </SingUpInfoWrapper>
        <ShiftedRowButtonContainer>
          <SmallButton type="submit" label="Stwórz konto" />
          <MobileLinkButton to="/pages/SignUpFull1Mobile">
            Wepłnij formularz
          </MobileLinkButton>
        </ShiftedRowButtonContainer>
      </MobileFormWrapper>
    </MobileViewTemplate>
  );
};

export default SignUpMobile;
