import SvgIcon from "@components/SvgIcon/SvgIcon";
import { CheckCircleReguler } from "@libs/svg/CheckCircleRegular";

type Props = {
  listItem: { text: string }[];
};

const List = ({ listItem }: Props) => {
  return (
    <>
      <ul className="list">
        {listItem.map((item: { text: string }, index: number) => {
          return (
            <li key={index}>
              <SvgIcon
                name={CheckCircleReguler}
                fillColor="fill-primary_blue"
                height="20"
                width="20"
              />
              {item.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
