import { useRouter } from "next/router";
import Seo from "../../components/Seo";

interface IParams {
  params: string[];
}

export default function Detail({ params }: IParams) {
  const router = useRouter();

  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }: IParams) {
  return {
    props: {
      params,
    },
  };
}
