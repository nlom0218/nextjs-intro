import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router.query.params);

  const [title, id]: [string | undefined, string | undefined] =
    router.query.params || [];
  console.log(title, id);

  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}
