import classes from "./description.module.css";

interface IDescriptionProps {
  description: string;
}

export const Description = ({ description }: IDescriptionProps) => {
  if (!description) {
    return <div></div>;
  }
  return <div>{description}</div>;
};
