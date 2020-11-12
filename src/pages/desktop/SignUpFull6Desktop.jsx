import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { firebaseUsersDB } from "../../firebase/UsersDB";
import * as firebase from "firebase/app";
import "firebase/storage";
import Select from "react-select";
import DesktopViewWithCloudsTemplate from "../../components/templates/DesktopViewWithCloudsTemplate";
import { HalfDesktopFormWrapper } from "../../components/templates/DesktopViewTemplate";
import {
  OptionContainer,
  SlideItem,
  SlideItemActive,
  SlideDescription,
  DesktopSlideContainer,
  Title,
  DesktopCenterRowButtonContainer,
  DesktopLinkButton,
} from "../../components/SignInUpElements";
import { StyledButton } from "../../components/buttons/Button";
import { fieldTagsDB } from "../../mocks/FieldTagsData";
const StyledSelect = styled(Select)`
  width: 20em;
  font-size: 1.5rem;
`;

const ErrorMessageBackground = styled.div`
  margin-top: 2em;
  padding: 1em;
  border-radius: 0.25rem;
  background: var(--accent-clr);
  color: #f49869;
`;

const ErrorMessageParagraph = styled.p`
  font-size: 1.1rem;
`;

const SignUpFull6Desktop = () => {
  const [state, setState] = useState();
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState();
  const {
    currentUserData,
    setCurrentUserData,
    signUp,
    getUserData,
    profileImage,
  } = useAuth();
  const handleClick = (e) => {
    e.preventDefault();
    const tags = Object.values(state).map((el) => el.label);
    setState(tags);
    setDisabled(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (disabled === false) {
      alert("You must choose at least one tag!");
      return;
    }

    const newProfileImage = JSON.stringify(profileImage);
    const tags = state;
    setCurrentUserData({ ...currentUserData, tags });
    signUp(currentUserData.email, currentUserData.password).then((cred) => {
      firebaseUsersDB.doc(cred.user.uid).set(currentUserData);

      // firebase
      //   .storage()
      //   .ref("users/" + cred.user.uid + "/profile.jpg")
      //   .put(newProfileImage);
      history.push("/pages/SignUpFull7DoneDesktop");
      console.log("Done");

      // Rejestracja użytkownika
    });

    // .catch((error) => {
    //   setError("Rejestracja nie powiodła się, spróbuj ponownie!" + error);
    // });
  };

  return (
    <DesktopViewWithCloudsTemplate>
      <HalfDesktopFormWrapper>
        <Title>Wybierz obszar swoich zainteresowań</Title>
        {error && (
          <ErrorMessageBackground>
            <ErrorMessageParagraph>{error}</ErrorMessageParagraph>
          </ErrorMessageBackground>
        )}

        <OptionContainer>
          <StyledSelect
            isMulti={true}
            placeholder="Wybierz zainteresowania"
            options={fieldTagsDB}
            onChange={setState}
            isDisabled={disabled}
          />
          <StyledButton onClick={handleClick}>Zatwierdź</StyledButton>
        </OptionContainer>
        <DesktopCenterRowButtonContainer>
          <DesktopLinkButton onClick={handleSubmit}>
            Załóż konto
          </DesktopLinkButton>
        </DesktopCenterRowButtonContainer>
      </HalfDesktopFormWrapper>
      <DesktopSlideContainer>
        <SlideDescription>Krok</SlideDescription>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull1Desktop"
        >
          <SlideItem>1</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull2Desktop"
        >
          <SlideItem>2</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull3Desktop"
        >
          <SlideItem>3</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull4Desktop"
        >
          <SlideItem>4</SlideItem>
        </Link>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull5Desktop"
        >
          <SlideItem>5</SlideItem>
        </Link>
        <SlideItemActive>6</SlideItemActive>
      </DesktopSlideContainer>
    </DesktopViewWithCloudsTemplate>
  );
};

export default SignUpFull6Desktop;
