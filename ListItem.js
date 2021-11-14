const ListItem = (props) => {
  return (
    <li
      onClick={props.onClick}
      className="py-2 px-4 flex justify-between items-center rounded-md bg-gray-100"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      <p>{props.ner}</p>
      <div className="flex gap-4">{props.children}</div>
    </li>
  );
};

export default ListItem;
