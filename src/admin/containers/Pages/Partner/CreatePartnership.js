import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPartnership } from "../../../../store/actions";
import Input from "../../../components/UI/Input";
import { Card, Button, Row } from "react-bootstrap";

const CreatePartnership = () => {
  const initialState = "";
  const [partnershipTitle, setPartnershipTitle] = useState(initialState);
  const [partnershipDesc, setPartnershipDesc] = useState(initialState);
  const [partnershipPicture, setPartnershipPicture] = useState([]);

  const [partnershipPictureLink, setPartnershipPictureLink] = useState(null);

  const dispatch = useDispatch();

  const createPartnershipData = () => {
    const form = new FormData();
    form.append("title", partnershipTitle);
    form.append("desc", partnershipDesc);

    if (partnershipPicture.length > 0) {
      for (const picture of partnershipPicture) {
        form.append("partnershipPicture", picture);
      }
    } else {
      form.append("partnershipPicture", partnershipPictureLink);
    }

    dispatch(createPartnership(form));
    setPartnershipPicture([]);
  };

  const handlePartnershipPicture = (e) => {
    const allimg = [...e.target.files];
    setPartnershipPicture([...partnershipPicture, ...allimg]);
    console.log(partnershipPicture);
  };

  return (
    <Card className="pt-4 pl-2 pr-2">
      <Input
        label="Partnership Title"
        type="text"
        placeholder={`Enter Partnership Title`}
        value={partnershipTitle}
        onChange={(e) => setPartnershipTitle(e.target.value)}
      />
      <Input
        label="Partnership Description"
        type="text"
        placeholder={`Enter Partnership Description`}
        value={partnershipDesc}
        onChange={(e) => setPartnershipDesc(e.target.value)}
      />

      <Input
        label="Partnership Image Link"
        type="text"
        placeholder={`Enter Partnership Image Link`}
        value={partnershipPictureLink}
        onChange={(e) => setPartnershipPictureLink(e.target.value)}
      />
      <Input
        label="Upload Partnership Image"
        type="file"
        onChange={handlePartnershipPicture}
      />
      <Button className="m-5" onClick={createPartnershipData}>
        Create
      </Button>
    </Card>
  );
};

export default CreatePartnership;
