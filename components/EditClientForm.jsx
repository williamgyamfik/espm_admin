import React, { useEffect, useState } from "react";
import { VscSave } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import { Button, Label, TextInput } from "flowbite-react";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";
import { useRouter } from "next/router";

const EditClientForm = (props) => {
  const [details, setDetails] = useState();

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState(details?.city);

  const router = useRouter();
  const detailsId = router.query.id;

  useEffect(() => {
    setDetails(props.clientDetails);
  }, [props.clientDetails]);

  useEffect(() => {
    setCity(details?.city);
  }, [details?.city]);

  console.log(details, city);

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const surnameHandler = (e) => {
    setSurname(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const countryHandler = (e) => {
    setCountry(e.target.value);
  };

  const cityHandler = (e) => {
    setCity(e.target.value);
  };

  const updateDetailsHandler = async () => {
    try {
      if (details.id === detailsId) {
        const { data, error } = await supabase
          .from("userProfile")
          .update({
            first_name: firstName,
            last_name: surname,
            email,
            country,
            city,
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
            onChange={firstNameHandler}
            value={firstName}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Surname" />
          </div>
          <TextInput
            id="password1"
            type="text"
            onChange={surnameHandler}
            value={surname}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Email" />
          </div>
          <TextInput
            id="password1"
            type="email"
            onChange={emailHandler}
            value={email}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Country" />
          </div>
          <TextInput
            id="password1"
            type="text"
            onChange={countryHandler}
            value={country}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="City" />
          </div>
          <TextInput
            id="password1"
            type="text"
            onChange={cityHandler}
            value={city}
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
