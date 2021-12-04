import CreateResume from "../components/resumeForm";
import { useMutation } from "@apollo/client";
import { ADD_HEADER } from "../client/queries";

const NewResume = () => {
  const [addHeader, { loading, error }] = useMutation(ADD_HEADER);

  const handleSubmit = (header) => {
      //const json=JSON.parse(header)
      console.log(header);
    addHeader({
      variables: { Header:header,Details:{}}
    });
  };

  return <CreateResume isLoading={loading} isError={error} onAddHeader={handleSubmit} />;
};

export default NewResume;
