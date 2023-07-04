import assert from "node:assert";

export default function Home() {}

export function getServersideProps() {
  console.log(assert);
  return { props: {} };
}
