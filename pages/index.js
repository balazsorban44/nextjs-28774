import assert from "node:assert";

export default function Home() {}

export function getServerSideProps() {
  console.log(assert);
  return { props: {} };
}
