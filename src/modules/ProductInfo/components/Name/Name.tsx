import classes from "./name.module.css";

interface INameProps {
  name: string;
}

export const Name = ({ name }: INameProps) => {
  if (!name) {
    return <div className={classes.name}>Youtan Poluo</div>;
  }
  return <div className={classes.name}>{name}</div>;
};
