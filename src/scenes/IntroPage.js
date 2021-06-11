import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Cropper from "react-easy-crop";
import { connect } from "react-redux";
import { setMetaAPI, uploadUserImageAPI } from "../store/actions/actions";
import { Redirect } from "react-router";
const resizeImage = (base64Str, maxWidth = 400, maxHeight = 350) => {
  return new Promise((resolve) => {
    let img = new Image();
    img.src = base64Str;
    img.onload = () => {
      let canvas = document.createElement("canvas");
      const MAX_WIDTH = maxWidth;
      const MAX_HEIGHT = maxHeight;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
      canvas.width = width;
      canvas.height = height;
      let ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);

      //   canvas.toBlob((file) => {
      //     resolve(URL.createObjectURL(file));
      //   }, "image/jpeg");

      resolve(canvas.toDataURL("image/jpeg"));
    };
  });
};
const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });
function getRadianAngle(degreeValue) {
  return (degreeValue * Math.PI) / 180;
}

async function getCroppedImg(imageSrc, pixelCrop, rotation = 0) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));
  canvas.width = safeArea;
  canvas.height = safeArea;
  ctx.translate(safeArea / 2, safeArea / 2);
  ctx.rotate(getRadianAngle(rotation));
  ctx.translate(-safeArea / 2, -safeArea / 2);
  ctx.drawImage(
    image,
    safeArea / 2 - image.width * 0.5,
    safeArea / 2 - image.height * 0.5
  );
  const data = ctx.getImageData(0, 0, safeArea, safeArea);
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  ctx.putImageData(
    data,
    Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
    Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
  );

  // As Base64 string
  return canvas.toDataURL("image/jpeg");

  // As a blob
  //   return new Promise((resolve) => {
  //     canvas.toBlob((file) => {
  //       resolve(URL.createObjectURL(file));
  //     }, "image/jpeg");
  //   });
}

const mapStateToProps = (state) => {
  return { user: state.userState.user };
};

const mapDispatchToProps = (dispatch) => ({
  uploadUserImage: (file, uid) => {
    dispatch(uploadUserImageAPI(file, uid));
  },
  setMeta: (uid, name, bio, designation) => {
    dispatch(setMetaAPI(uid, name, bio, designation));
  },
});

const IntroPage = (props) => {
  const [picture, setPicture] = useState(
    props.user.photoURL ? props.user.photoURL : null
  );

  const [name, setName] = useState(props.user.displayName);
  const [bio, setBio] = useState(props.user.bio);
  const [designation, setDesignation] = useState(props.user.designation);
  const [nameError, setNameError] = useState(false);
  const [bioError, setBioError] = useState(false);
  const [designationError, setDesignationError] = useState(false);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [pixelCrop, setPixelCrop] = useState(null);
  const [showCropTool, setShowCropTool] = useState(false);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setPixelCrop(croppedAreaPixels);
  };
  const onCropPressed = async () => {
    let img = await getCroppedImg(picture, pixelCrop);
    img = await resizeImage(img, 100, 100);
    setPicture(img);
    setShowCropTool(false);
    setPicture(img);
    console.log(typeof img, img);
    // let image = new Image();
    // image.src = img;
    props.uploadUserImage(img, props.user.uid);
  };
  const PictureChangeHandler = (event) => {
    const file = event.target.files[0];
    if (!"image/gif, image/jpeg, image/jpg, image/png".includes(file.type)) {
      alert("Choose a valid image");
      return;
    }
    var reader = new FileReader();
    reader.onload = async (e) => {
      setPicture(e.target.result);
      setShowCropTool(true);
    };
    reader.readAsDataURL(file);
  };
  const submitForm = () => {
    if (name === "") {
      setNameError(true);
    }
    if (bio === "") {
      setBioError(true);
    }
    if (designation === "") {
      setDesignationError(true);
    }
    if (name === "" || bio === "" || designation === "") {
      return;
    }
    props.setMeta(props.user.uid, name, bio, designation);
  };
  if (props.user.displayName && props.user.bio && props.user.designation) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      {showCropTool ? (
        <CropContainer>
          <Cropper
            image={picture}
            crop={crop}
            zoom={zoom}
            aspect={1 / 1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
          <Crop onClick={onCropPressed}>Upload</Crop>
        </CropContainer>
      ) : (
        <Card>
          <Header>
            <img src="/images/login-logo.svg" alt="" />
          </Header>
          <Content>
            <ProfilePicture>
              <img src={picture ? picture : "/images/user.svg"} alt="" />
            </ProfilePicture>
            <AddPictureButton>
              <input
                type="file"
                onChange={PictureChangeHandler}
                accept="image/gif, image/jpeg, image/jpg, image/png"
              />
              Upload picture
            </AddPictureButton>
            <TextField error={nameError}>
              <input
                type="text"
                placeholder="."
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError(false);
                }}
              />
              <span>{nameError ? "Name can't be empty" : "Name"}</span>
            </TextField>
            <TextField error={bioError}>
              <input
                type="text"
                placeholder="."
                onChange={(e) => {
                  setBio(e.target.value);
                  setBioError(false);
                }}
              />
              <span>{bioError ? "Bio can't be empty" : "Bio"}</span>
            </TextField>
            <TextField error={designationError}>
              <input
                type="text"
                placeholder="."
                onChange={(e) => {
                  setDesignation(e.target.value);
                  setDesignationError(false);
                }}
              />
              <span>
                {designationError
                  ? "Designation can't be empty"
                  : "Designation"}
              </span>
            </TextField>
            <SubmitButton onClick={submitForm}>Submit</SubmitButton>
          </Content>
        </Card>
      )}
    </Container>
  );
};

const Container = styled.div`
  /* max-width: 1128px; */
  display: flex;
  justify-content: center;
`;

const Header = styled.div`
  width: 30%;
  position: absolute;
  top: -42px;
  left: 12px;
  @media (max-width: 768px) {
    position: fixed;
    left: 12px;
    top: 12px;
    width: 120px;
  }
`;

const Card = styled.div`
  background-color: #fff;
  position: relative;
  margin-top: 200px;
  padding: 24px 48px;
  border-radius: 12px;
  box-shadow: 1px 1px 12px 0px rgba(0, 0, 0, 0.1);
  width: 320px;
  @media (max-width: 768px) {
    background-color: transparent;
    box-shadow: none;
    margin-top: 40px;
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    /* width: 60%; */
  }
`;

const ProfilePicture = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 24px;
  img {
    object-fit: scale-down;
  }
`;

const AddPictureButton = styled.label`
  input {
    display: none;
  }
  margin-bottom: 48px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  color: #0a66c2;
  font-size: 14px;
  font-weight: 600;
`;

const TextField = styled.div`
  margin-bottom: 12px;
  width: 280px;
  margin-right: 12px;
  position: relative;
  input {
    width: 100%;
    padding: 22px 0px 6px 12px;
    border-radius: 4px;
    border: 1px solid
      ${(props) => (props && props.error ? "red" : "rgba(0, 0, 0, 0.6)")};
    ::placeholder {
      color: transparent;
    }
  }
  input:focus {
    outline: none !important;
    border: 1px ${(props) => (props && props.error ? "red" : "#0a66c2")} solid;
    box-shadow: 0px 0px 0px 1px
      ${(props) => (props && props.error ? "red" : "#0a66c2")};
  }
  input:focus ~ span,
  input:not(:placeholder-shown) ~ span {
    font-size: 12px;
    top: 6px;
    left: 10px;
  }
  span {
    position: absolute;
    top: 16px;
    left: 14px;
    color: ${(props) => (props && props.error ? "red" : "rgba(0, 0, 0, 0.6)")};
    font-size: 14px;
    transition: 150ms linear;
    pointer-events: none;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  border-radius: 28px;
  font-size: 20px;
  color: #004a94;
  transition-duration: 150ms;
  cursor: pointer;
  border: 0;
  background-color: #0a66c2;
  color: #fff;
  margin-bottom: 12px;
  margin-top: 24px;
  width: 280px;
  &:hover {
    background-color: #004a94;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
`;
const CropContainer = styled.div`
  /* position: relative; */
`;
const Crop = styled.button`
  position: fixed;
  bottom: 78px;
  left: 50%;
  margin-left: -50px;
  cursor: pointer;
  z-index: 2;
  width: 100px;
  font-size: 18px;
  padding: 12px;
  border: 0;
  border-radius: 24px;
  background-color: #000;
  color: #fff;
  transition-duration: 200ms;
  :hover {
    background-color: #fff;
    color: #000;
    box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 1);
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(IntroPage);
