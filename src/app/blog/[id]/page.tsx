type Props = {
  params: {
    id: number;
  };
};

const blogDetailPage = ({ params }: Props) => {
  return <div>pages ID: {params.id}</div>;
};

export default blogDetailPage;
