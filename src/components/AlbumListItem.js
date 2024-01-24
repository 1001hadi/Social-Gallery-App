import { useRemoveAlbumMutation } from "../store/apis/albumsApi";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";

function AlbumListItem({ album }) {
  const [removeAlbum, result] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        danger
        rounded
        className="mr-2"
        loading={result.isLoading}
        onClick={handleRemoveAlbum}
      >
        <GoTrashcan />{" "}
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos in album
    </ExpandablePanel>
  );
}

export default AlbumListItem;
