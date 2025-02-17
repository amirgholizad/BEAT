import "./Tags.scss";

const Tags = ({ tag }) => {
  let tagClass = "";

  if (tag === "python") {
    tagClass = "indicator__tag--python";
  } else if (tag === "JavaScript") {
    tagClass = "indicator__tag--javascript";
  } else if (tag === "FREE") {
    tagClass = "indicator__tag--free";
  } else if (tag === "PREMIUM") {
    tagClass = "indicator__tag--premium";
  }
  return (
    <>
      <p className={`indicator__tag ${tagClass}`}>{tag}</p>
    </>
  );
};

export default Tags;
