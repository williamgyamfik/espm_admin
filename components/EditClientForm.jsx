import React, { useEffect, useState } from "react";
import { VscSave } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import { Button, Label, TextInput } from "flowbite-react";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";
import { useRouter } from "next/router";

const EditClientForm = (props) => {
  useEffect(() => {
    setDetails(props.clientDetails);
  }, [props.clientDetails]);

  const [details, setDetails] = useState();

  console.log(details);
  const router = useRouter();
  const detailsId = router.query.id;

  const detailHandler = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const updateDetailsHandler = async () => {
    try {
      if (details.id === detailsId) {
        const { data, error } = await supabase
          .from("userProfile")
          .update({
            first_name: details.first_name,
            last_name: details.last_name,
            email: details.email,
            country: details.country,
            city: details.city,
          })
          .eq("id", detailsId);
        console.log(data);
        if (error) {
          console.log(error.message);
        } else {
          setDetails({ ...details, data });
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const closeHandler = () => {
    props.closeDetails(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateDetailsHandler();
  };

  return (
    <div className="flex justify-center ">
      <form
        onSubmit={submitHandler}
        className="flex w-full  max-w-sm flex-col rounded gap-4 p-5 bg-gray-100 m-5 shadow-lg"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="First Name" />
          </div>
          <TextInput
            id="email1"
            type="text"
            name="first_name"
            onChange={detailHandler}
            value={details?.first_name}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Surname" />
          </div>
          <TextInput
            id="password1"
            type="text"
            name="last_name"
            onChange={detailHandler}
            value={details?.last_name}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Email" />
          </div>
          <TextInput
            id="password1"
            type="email"
            name="email"
            onChange={detailHandler}
            value={details?.email}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Country" />
          </div>
          <TextInput
            id="password1"
            type="text"
            name="country"
            onChange={detailHandler}
            value={details?.country}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="City" />
          </div>
          <TextInput
            id="password1"
            type="text"
            name="city"
            onChange={detailHandler}
            value={details?.city}
          />
        </div>

        <Button type="submit">
          <VscSave /> SAVE
        </Button>
        <Button color="failure" onClick={closeHandler}>
          <VscClose /> CLOSE
        </Button>
      </form>
    </div>
  );
};

export default EditClientForm;
