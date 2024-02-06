import { Box, AspectRatio } from "@chakra-ui/react";
import React from "react";

const HomePageVideo = () => {
  return (
    <Box 
    width={"90%"}
    margin={"50px auto"}
    borderRadius={"16px"}
    overflow={"hidden"} 
    >
      <AspectRatio maxW="100%" ratio={1.78}>
        <iframe
          title="Fiverr"
          src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/e0f330e4c8d6e3bf843a3bd3164fa275-1706087048062/How%20Fiverr%20Works%20EN%20Subs%2016x9?autoplay=1&loop=1"
          allowFullScreen
          autoPlay
          loop
        />
      </AspectRatio>
    </Box>
  );
};

export default HomePageVideo;
