import React, { useEffect, useState } from "react";
import { VscSave } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import { Button, Label, TextInput } from "flowbite-react";
import { supabase } from "@/supabaseClientLibrary/supabaseClient";
import { useRouter } from "next/router";
import Spinner from "./Spinner";

const EditClientForm = (props) => {
  const [details, setDetails] = useState();
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setDetails(props.clientDetails);
  }, [props.clientDetails]);

  const router = useRouter();
  const detailsId = +router.query.id;

  const detailHandler = (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
  };

  const updateDetailsHandler = async () => {
    setSpinner(true);
    try {
      if (details.id === detailsId) {
        const { data, error } = await supabase
          .from("userProfile")
          .update({
            first_name: details.first_name,
            last_name: details.last_name,
            email: details.email,
            age: details.age,
            gender: details.gender,
            phone: details.phone,
            sports_type: details.sports_type,
          })
          .eq("id", details.id)
          .select();
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
    setSpinner(false);
  };

  const closeHandler = () => {
    props.closeDetails(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateDetailsHandler();
  };

  if (spinner) {
    return (
      <div className="mt-40 flex  justify-center">
        <div className="mt-20">
          <Spinner />
          <p>Sending request....</p>
        </div>
      </div>
    );
  }

  console.log(details, router);

  return (
    <div className=" flex flex-col flex-1 pt-4 sm:px-0 min-h-0 ">
      {/* <div className="w-84 shadow-xl bg-base-100"> */}
      <div className="flex flex-1 flex-col p-2">
        <h1 className="font-bold text-center">Edit Client form</h1>
        <div className="flex align-center justify-center mt-10 ">
          <form className="mx-2 w-64 sm:w-full" onSubmit={submitHandler}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label htmlFor="firstName1" value="First Name" />
                </div>
                <TextInput
                  id="firstName1"
                  type="text"
                  name="first_name"
                  onChange={detailHandler}
                  value={details?.first_name}
                  required
                />
              </div>
              <div className="flex flex-col flex-wrap">
                <div className="mb-2 block">
                  <Label htmlFor="lastName1" value="Surname" />
                </div>
                <TextInput
                  id="lastName1"
                  type="text"
                  name="last_name"
                  onChange={detailHandler}
                  value={details?.last_name}
                  required
                />
              </div>
              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Email" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  name="email"
                  onChange={detailHandler}
                  value={details?.email}
                  disabled
                />
              </div>

              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label htmlFor="age1" value="Age" />
                </div>
                <TextInput
                  id="age1"
                  type="text"
                  name="age"
                  onChange={detailHandler}
                  value={details?.age}
                  required
                />
              </div>
              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label htmlFor="gender1" value="Gender" />
                </div>
                <TextInput
                  id="gender1"
                  type="text"
                  name="gender"
                  onChange={detailHandler}
                  value={details?.gender}
                  required
                />
              </div>
              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label htmlFor="Phone1" value="Phone" />
                </div>
                <TextInput
                  id="Phone1"
                  type="number"
                  name="phone"
                  onChange={detailHandler}
                  value={details?.phone}
                  required
                />
              </div>
              <div className="flex flex-col flex-wrap ">
                <div className="mb-2 block">
                  <Label htmlFor="sports_type1" value="Sports type" />
                </div>
                <TextInput
                  id="sports_type1"
                  type="text"
                  name="sports_type"
                  onChange={detailHandler}
                  value={details?.sports_type}
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-5 mt-10 justify-center center-align">
              <Button type="submit" className="w-96 bg-emerald-500">
                <VscSave /> SAVE
              </Button>
              <Button className="w-96" color="failure" onClick={closeHandler}>
                <VscClose /> CLOSE
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default EditClientForm;
