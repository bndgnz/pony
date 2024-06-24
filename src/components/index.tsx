import Schedule from "@/src/components/Layout/components/schedule";
import Stream from "@/src/components/Layout/components/streams";
import Playlist from "@/src/components/Layout/components/playlist";
import LayoutResolver from "@/src/components/Layout/components/layoutResolver";
import Message from "@/src/components/Layout/components/message";

import QueryStringPlaylist from "@/src/components/Layout/components/queryStringPlaylist";
import Shows from "@/src/components/Layout/components/shows";
import AmazonPlaylist from "@/src/components/Layout/components/amazonPlaylist";
import LatestAmazonPodcasts from "@/src/components/Layout/components/latestAmazonPodcasts";
import FilteredPlaylist from "@/src/components/Layout/components/filteredAmazonPlaylist";
import Listresolver from "@/src/utils/helpers/listResolver";
import PageContent from "@/src/components/Layout/components/introAndContent";
import AmazonPodcast from "@/src/components/Layout/components/amazonPodcast";

function Components(props: any) {
  return (
    <>
      {" "}
      <section className="playlist container page-block amazon-playlist">
        <div className="container">
          <div className="row">
            <div className="col-lg-12  "></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Components;
