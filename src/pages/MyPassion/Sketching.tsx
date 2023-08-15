import { Box, ImageList, ImageListItem } from "@mui/material";
import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { itemData } from "../../data/myPassion";
import { useOnLoadImages } from "../../hooks/useOnLoadImages";
import { Oval } from "react-loader-spinner";

type Props = {};

const Sketching = (props: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesLoaded = useOnLoadImages(wrapperRef);
  return (
    <div ref={wrapperRef}>
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
          className=""
          sx={{
            width: "100%",
            height: "100%",
            overflowY: "auto",
          }}
        >
          <ImageList
            variant="masonry"
            className="d-none d-lg-block"
            cols={3}
            gap={30}
          >
            <>
              {itemData?.map((item, index) => (
                <ImageListItem
                  className="bg-white p-2 p-md-3 shadow"
                  key={item.img}
                >
                  <LazyLoadImage src={item.img} width={"100%"} effect="blur" />
                </ImageListItem>
              ))}
            </>
          </ImageList>
          <ImageList
            variant="masonry"
            className="mobile d-lg-none"
            cols={1}
            gap={12}
          >
            <>
              {itemData.map((item, index) => (
                <ImageListItem
                  className="bg-white p-1 p-md-3 shadow"
                  key={item.img}
                >
                  <LazyLoadImage src={item.img} width={"100%"} effect="blur" />
                </ImageListItem>
              ))}
            </>
          </ImageList>
        </Box>
      )}
    </div>
  );
};

export default Sketching;
