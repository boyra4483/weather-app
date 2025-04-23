import classes from "./Gratitude.module.css";

export default function Gratitude() {
  return (
    <p className={classes["gratitude"]}>
      thank{" "}
      <a
        href="https://www.figma.com/community/file/1047722264278445552"
        target="_blank"
      >
        Ihza Creative
      </a>{" "}
      very much for this template and{" "}
      <a
        href="https://www.figma.com/community/file/1283826005232351466"
        target="_blank"
      >
        Ilyas Mrayan
      </a>{" "}
      for some weather icons
    </p>
  );
}
