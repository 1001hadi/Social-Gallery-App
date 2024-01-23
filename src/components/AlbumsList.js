import { useFetchAlbumsQuery } from "../store";

function AlbumsList({ user }) {
  const { data, isLoading, error } = useFetchAlbumsQuery(user);
  console.log(data, isLoading, error);

  return <div>Albums for {user.name}</div>;
}

export default AlbumsList;
