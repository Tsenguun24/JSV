import Card from "./Card";
import ListItem from "./ListItem";
import Modal from "./Modal";
const Article = (props) => {
  return (
    <Card>
      <ul style={{ width: "600px" }} className="flex flex-col gap-4">
        {props.data.map((el) => (
          <ListItem
            onClick={() => props.onClick(el.id)}
            ner={el.title}
            key={`user--${el.id}`}
          >
            <Modal
              id={el.id}
              my={el.id}
              getData={props.getAdat}
              deleteData={props.deleteData}
              title={props.title}
              content={props.content}
            />
          </ListItem>
        ))}
      </ul>
    </Card>
  );
};
export default Article;
