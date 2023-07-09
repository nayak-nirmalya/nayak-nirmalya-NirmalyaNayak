import HeadMetadata from "@/components/HeadMetadata";
import HeaderText from "@/components/HeaderText";
import RandomImage from "@/components/RandomImage";
import RefreshButton from "@/components/RefreshButton";
import Share from "@/components/Share";

export default function Page({ id }: { id: string }) {
  const imageID = id;

  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <HeadMetadata imageID={id} />
      <HeaderText />
      <RefreshButton />
      <RandomImage />
      <Share />
    </div>
  );
}

export const getServerSideProps = async (context: {
  query: { id: string };
}) => {
  const { id } = context.query;
  return { props: { id } };
};
