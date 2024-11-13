interface SingleLineListProps {
  text: string;
}

const SingleLineList = ({ text }: SingleLineListProps) => {
  const dynamicHeading = text.split("|");

  return (
    <li>
      {dynamicHeading.length > 1 ? (
        <>
          <span className="font-semibold">{dynamicHeading[0]} </span> {dynamicHeading[1]}
        </>
      ) : (
        dynamicHeading[0]
      )}
    </li>
  );
};

export default SingleLineList;
