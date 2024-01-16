import classes from "./compound.module.css";

interface ICompoundProps {
  compound: string;
}

export const Сompound = ({ compound }: ICompoundProps) => {
  if (!compound) {
    return <div></div>;
  }
  return (
    <div className={classes.compound}>
      <span>Состав:</span> {compound}
    </div>
  );
};
