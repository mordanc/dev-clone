import React from "react";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";

import {
  CategoriesList,
  CategoryItem,
  CategoryItemSmall,
  SidebarColumn,
} from "./styles";

export function Sidebar() {
  const tagList = [
    "#javascript",
    "#webdev",
    "#beginners",
    "#react",
    "#tutorial",
    "#python",
    "#productivity",
    "#discuss",
  ].map((item) => <CategoryItem>{item}</CategoryItem>);

  return (
    <SidebarColumn>
      <CategoriesList>
        <CategoryItem>
          <AddCircleOutlineOutlinedIcon color="secondary" /> Sign In/Up
        </CategoryItem>
        <CategoryItem>
          <ListAltOutlinedIcon color="primary" /> Listings
        </CategoryItem>
        <CategoryItem>
          <MicNoneOutlinedIcon color="primary" /> Podcasts
        </CategoryItem>
        <CategoryItem>
          <VideoCallOutlinedIcon color="primary" /> Videos
        </CategoryItem>
        <CategoryItem>
          <LocalOfferOutlinedIcon color="primary" /> Tags
        </CategoryItem>
        <CategoryItemSmall>More...</CategoryItemSmall>
      </CategoriesList>
      <p style={{ color: "#63717d", fontSize: "0.7rem" }}>
        DESIGN YOUR EXPERIENCE
      </p>
      <CategoriesList>{tagList}</CategoriesList>
    </SidebarColumn>
  );
}
