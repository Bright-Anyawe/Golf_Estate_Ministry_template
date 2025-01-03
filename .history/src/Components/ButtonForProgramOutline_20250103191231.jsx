

export const Button = ({onLearnMore}) => {


  return (
    <>
      <button
        // onClick={onLearnMore}

        onClick={() => {console.log()}}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Program outline
      </button>
    </>
  );
};