import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handdleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        {" "}
        <span className="blue_gradient"> {type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} & share awesome AI prompts with the world. Let your imagination
        run free with AI-powered pla
      </p>
    </section>
  );
};

export default Form;
