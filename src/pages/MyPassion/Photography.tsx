import { LazyLoadImage } from "react-lazy-load-image-component";
import { firstImage, itemData2 } from "../../data/myPassion";
import { useOnLoadImages } from "../../hooks/useOnLoadImages";
import { Oval } from "react-loader-spinner";
import { useRef } from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";

type Props = {};

const Photography = (props: Props) => {
  const wrapperRef2 = useRef<HTMLDivElement>(null);
  const imagesLoaded = useOnLoadImages(wrapperRef2);
  return (
    <div ref={wrapperRef2}>
      {!imagesLoaded ? (
        <>
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass="d-flex space-y align-items-center justify-content-center py-5"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            overflowY: "hidden",
          }}
        >
          <ImageList
            className="d-none d-lg-block"
            variant="masonry"
            cols={1}
            gap={10}
          >
            {firstImage.map((item) => (
              <ImageListItem className="bg-white p-3 shdaow" key={item.img}>
                <LazyLoadImage src={item.img} width={"100%"} effect="blur" />
              </ImageListItem>
            ))}
          </ImageList>
          <ImageList className="d-lg-none" variant="masonry" cols={1} gap={10}>
            {firstImage.map((item) => (
              <ImageListItem className="bg-white p-1 shdaow" key={item.img}>
                <LazyLoadImage src={item.img} width={"100%"} effect="blur" />
              </ImageListItem>
            ))}
          </ImageList>

          <ImageList
            className="d-none d-lg-block"
            variant="masonry"
            cols={3}
            gap={30}
          >
            {itemData2.map((item) => (
              <ImageListItem className="bg-white p-3 shadow" key={item.img}>
                <LazyLoadImage src={item.img} width={"100%"} effect="blur" />
              </ImageListItem>
            ))}
          </ImageList>
          <ImageList className="d-lg-none" variant="masonry" cols={1} gap={10}>
            {itemData2.map((item) => (
              <ImageListItem className="bg-white p-1 shadow" key={item.img}>
                <LazyLoadImage src={item.img} width={"100%"} effect="blur" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      )}
    </div>
  );
};

export default Photography;
