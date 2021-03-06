import React from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import DesktopViewWithCloudsTemplate from "../../components/templates/DesktopViewWithCloudsTemplate";
import { HalfDesktopFormWrapper } from "../../components/templates/DesktopViewTemplate";
import { LabelDesktop } from "../../components/Label";
import {
  SlideItem,
  SlideItemActive,
  SlideDescription,
  DesktopSlideContainer,
  Title,
  InputsAndLabelsContainer,
  DesktopButton,
  DesktopCenterRowButtonContainer,
  StyledAddButton,
  OptionContainer,
} from "../../components/SignInUpElements";
import { StyledInput } from "../../components/Input";

const AddImageContainer = styled(OptionContainer)`
  margin: 0;
`;

const ModalTextArea = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  min-height: 15em;
  max-height: 25em;
  padding: 1em 1em;
  font-family: "Quicksand", sans-serif;
  font-size: 1.1em;
  font-weight: 600;
  background-color: #2b2b3f;
  color: white;
  border-radius: 5px;
  border: none;
  outline: none;
`;

const SignUpFull2Desktop = () => {
  const {
    currentUserData,
    setCurrentUserData,
    setProfileImage,
    profileImage,
  } = useAuth();
  const history = useHistory();
  const portfolioRef = React.createRef();
  const githubRef = React.createRef();
  const linkedInRef = React.createRef();
  const descriptionRef = React.createRef();
  const fileRef = React.createRef();
  let file;
  // const FirebaseUploadImage = () => {
  //   const handleChange = (e) => {
  //     file = e.target.files[0];
  //     // setProfileImage(file);
  //   };

  //   const handleUpload = (e) => {
  //     e.preventDefault();
  //     setCurrentUserData({ ...currentUserData, file });
  //   };

  //   const handleUpload = (e) => {
  //     e.preventDefault();
  //   };

  //   return (
  //     <>
  //       <LabelDesktop htmlFor="Dodaj">{"Dodaj zdjęcie"}</LabelDesktop>
  //       <AddImageContainer>
  //         <StyledInput
  //           style={{ width: "85%" }}
  //           name="Dodaj"
  //           type="file"
  //           onChange={handleChange}
  //         />
  //         <StyledAddButton onClick={handleUpload}>Zatwierdź</StyledAddButton>
  //       </AddImageContainer>
  //     </>
  //   );
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const portfolio = portfolioRef.current.value;
    const github = githubRef.current.value;
    const linkedIn = linkedInRef.current.value;
    const description = descriptionRef.current.value;
    const socialMedia = [
      {
        portfolio,
        github,
        linkedIn,
      },
    ];
    setCurrentUserData({ ...currentUserData, socialMedia, description });
    history.push("/pages/SignUpFull3Desktop");
  };

  return (
    <DesktopViewWithCloudsTemplate>
      <HalfDesktopFormWrapper onSubmit={handleSubmit}>
        <Title>Pozwól się odnaleźć</Title>
        <InputsAndLabelsContainer>
          <LabelDesktop htmlFor="Portfolio">{"Portfolio"}</LabelDesktop>
          <StyledInput
            ref={portfolioRef}
            name="Portfolio"
            type="text"
            required
          />
          <LabelDesktop htmlFor="Github">{"Github"}</LabelDesktop>
          <StyledInput ref={githubRef} name="Github" type="text" required />
          <LabelDesktop htmlFor="Linkedin">{"Linkedin"}</LabelDesktop>
          <StyledInput ref={linkedInRef} name="Linkedin" type="text" required />
          <LabelDesktop htmlFor="description">
            {"Dodaj kilka słów o sobie"}
          </LabelDesktop>

          <ModalTextArea
            type="text"
            name={"description"}
            ref={descriptionRef}
            required
          ></ModalTextArea>
          {/* <LabelDesktop htmlFor="Dodaj">{"Dodaj zdjęcie"}</LabelDesktop>
          <StyledInput name="Dodaj" type="file" onClick={handleUpload} /> */}
          {/* <FirebaseUploadImage></FirebaseUploadImage> */}
          <DesktopCenterRowButtonContainer>
            <DesktopButton type="submit">Dalej</DesktopButton>
          </DesktopCenterRowButtonContainer>
        </InputsAndLabelsContainer>
      </HalfDesktopFormWrapper>
      <DesktopSlideContainer>
        <SlideDescription>Krok</SlideDescription>
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull1Desktop"
        >
          <SlideItem>1</SlideItem>
        </Link>
        <SlideItemActive>2</SlideItemActive>
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
        <Link
          style={{ color: "var(--dark-clr)" }}
          to="/pages/SignUpFull6Desktop"
        >
          <SlideItem>6</SlideItem>
        </Link>
      </DesktopSlideContainer>
    </DesktopViewWithCloudsTemplate>
  );
};

export default SignUpFull2Desktop;
