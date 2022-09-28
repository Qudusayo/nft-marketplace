import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Toggle from "../components/Toggle/Toggle";
import NFTCard from "../components/NFTCard/NFTCard";

import { GrClose, GrFormCheckmark } from "react-icons/gr";
import { RiSearchLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { BsGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoSwapVertical, IoChevronDownOutline } from "react-icons/io5";

import styles from "./../styles/Explore.module.scss";
import Summary from "../components/Summary/Summary";
import MultiRangeSlider from "../components/MultiRangeSlider/MultiRangeSlider";
import { MenuItem } from "@mui/material";
import Options from "../components/Options/Options";
import RangeInput from "../components/RangeInput/RangeInput";

export default function Explore({ nfts }) {
  const [activeTab, setActiveTab] = useState("nft");
  const [filterDisplay, setFilterDisplay] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterType, setFilterType] = useState("rl");
  const [filterValues] = useState({
    rl: "Recently listed",
    plh: "Price: Low to High",
    phl: "Price: High to Low",
    rhl: "Rarity: High to low",
    rlh: "Rarity: Low to high",
  });
  const [rarityRankRnage, setRarityRankRnage] = useState({ min: 0, max: 0 });
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [smallControlDisplay, setSmallControlDisplay] = useState(true);
  const [gridDisplayClass, setGridDisplayClass] = useState(styles.filterLgPrev);

  const rangeInputUpdate = (min, max) => {
    if (min !== rarityRankRnage.min || max !== rarityRankRnage.max) {
      setRarityRankRnage({ min, max });
    }
  };

  useEffect(() => {
    if (filterDisplay && !smallControlDisplay) {
      setGridDisplayClass(styles.filterLgPrev);
    }
    if (filterDisplay && smallControlDisplay) {
      setGridDisplayClass(styles.filterSmPrev);
    }
    if (!filterDisplay && !smallControlDisplay) {
      setGridDisplayClass(styles.lgPrev);
    }
    if (!filterDisplay && smallControlDisplay) {
      setGridDisplayClass(styles.smPrev);
    }
  }, [smallControlDisplay, filterDisplay]);

  return (
    <div className={styles.Explore}>
      <header>
        <Navbar />
        <div className={styles.ExploreBid}>
          <p>Place a bid for any item from this collection</p>
          <Button title="Place a bid" className={styles.ExploreBidButton} />
        </div>
        <div className={styles.ExploreTab}>
          <span
            className={
              activeTab === "nft"
                ? styles.ExploreTabActive
                : styles.ExploreTabInactive
            }
            onClick={() => setActiveTab("nft")}
          >
            NFTs
          </span>
          <span
            className={
              activeTab === "activities"
                ? styles.ExploreTabActive
                : styles.ExploreTabInactive
            }
            onClick={() => setActiveTab("activities")}
          >
            Activities
          </span>
        </div>
        <div className={styles.ExploreControls}>
          <Button
            className={[styles.ctrlButton, styles.filterDisplayBtn].join(" ")}
            type={["secondary", "small"]}
            clickFunction={() => setFilterDisplay((showFilter) => !showFilter)}
          >
            <IoIosArrowBack />
            <span>Filters</span>
          </Button>
          <div className={styles.SearchBox}>
            <RiSearchLine size={20} className={styles.SearchBoxIcon} />
            <input
              placeholder="Search by Meta Angels"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            {searchInput && <GrClose onClick={() => setSearchInput("")} />}
          </div>
          <div className={styles.MenuOptions}>
            <div
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Button
                className={styles.ctrlButton}
                type={["secondary", "small"]}
              >
                <IoSwapVertical />
                <span>{filterValues[filterType]}</span>
                <IoChevronDownOutline />
              </Button>
            </div>
            <Options anchorEl={anchorEl} handleClose={handleClose}>
              {Object.keys(filterValues).map((value) => (
                <MenuItem
                  key={value}
                  className={styles.Menu}
                  onClick={() => {
                    setFilterType(value);
                    return handleClose();
                  }}
                >
                  <span>{filterValues[value]}</span>
                  {filterType === value && (
                    <GrFormCheckmark size={25} fill="rgb(8, 8, 154)" />
                  )}
                </MenuItem>
              ))}
            </Options>
          </div>
          <div
            className={[
              styles.ExploreControlsDisplay,
              smallControlDisplay && styles.ExploreControlsDisplaySmall,
            ].join(" ")}
            onClick={() =>
              setSmallControlDisplay((prevDisplay) => !prevDisplay)
            }
          >
            <BsGridFill
              size={20}
              className={[
                styles.ExploreControlsDisplayControl,
                !smallControlDisplay &&
                  styles.ExploreControlsDisplayControlActive,
              ].join(" ")}
            />
            <BsFillGrid3X3GapFill
              size={20}
              className={[
                styles.ExploreControlsDisplayControl,
                smallControlDisplay &&
                  styles.ExploreControlsDisplayControlActive,
              ].join(" ")}
            />
          </div>
        </div>
      </header>
      <div className={styles.Collections}>
        {filterDisplay && (
          <div className={styles.CollectionsFilter}>
            <div className={styles.CollectionsFilterContainer}>
              <div style={{ height: "2em" }}></div>
              <div className={styles.CollectionsFilterContainerControl}>
                <Summary title="Status" isActive={true}>
                  <Toggle label={"listed"} title="Listed Items only" />
                  <Toggle label={"c-listing"} title="Only Community listing" />
                </Summary>
                <Summary title="Price" isActive={true}>
                  <RangeInput showUnit={true} />
                </Summary>
                <Summary title="Rarity Rank (#1 Rarest)" isActive={true}>
                  <RangeInput
                    showUnit={false}
                    minValue={rarityRankRnage.min}
                    maxValue={rarityRankRnage.max}
                    minValCtrl={() => {}}
                    maxValCtrl={() => {}}
                    style={{ marginBottom: ".75em" }}
                  />
                  <MultiRangeSlider
                    min={0}
                    max={10000}
                    onChange={({ min, max }) => {
                      console.log(min, max);
                      return rangeInputUpdate(min, max);
                    }}
                  />
                </Summary>
              </div>
              <div className={styles.CollectionsFilterContainerButtons}>
                <Button title="Apply" type="secondary" />
                <Button title="Clear Filters" type="secondary" />
              </div>
            </div>
          </div>
        )}
        <div className={[styles.CollectionsView, gridDisplayClass].join(" ")}>
          {nfts.map((listedNft, index) => (
            <NFTCard
              key={index}
              image={listedNft.image}
              name={listedNft.name}
              price={listedNft.price}
              bid={listedNft.bid}
            />
          ))}
        </div>
      </div>
      <Footer activeSocial={true} />
    </div>
  );
}

export async function getStaticProps() {
  let nfts = [
    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmPeYZJnGTooUk9zq2ATmXMnEXaYc3ms5zvBS4vkBKNmVK/8739.jpeg",
      name: "Meta Angels #8739",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmY4ptX6ZwVXdKtQTmZQ7vBF2t3qGWhY3H4XVm5Bhwf2hh/2644.jpeg",
      name: "Meta Angels #2644",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmfQdFyuFjm6gZ8VkUocFBVgsfY6zwxHD6gubNSecNtKS1/9865.jpeg",
      name: "Meta Angels #9865",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/6989.jpeg",
      name: "Meta Angels #6989",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmPeYZJnGTooUk9zq2ATmXMnEXaYc3ms5zvBS4vkBKNmVK/8589.jpeg",
      name: "Meta Angels #8589",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmfQdFyuFjm6gZ8VkUocFBVgsfY6zwxHD6gubNSecNtKS1/9349.jpeg",
      name: "Meta Angels #9349",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/7063.jpeg",
      name: "Meta Angels #7063",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmUr84TazuX13sxC3bfzsVeDw89Y6Gr8QShmJHErL3fUMi/3380.jpeg",
      name: "Meta Angels #3380",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmcBvE4UpAVgb4aKxDZkSqomuwdZAkACCkf1kZ5tWGjyrr/4039.jpeg",
      name: "Meta Angels #4039",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmfQdFyuFjm6gZ8VkUocFBVgsfY6zwxHD6gubNSecNtKS1/9865.jpeg",
      name: "Meta Angels #9865",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/6989.jpeg",
      name: "Meta Angels #6989",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmY6VFETjT1bTr13DXCtV2XcYJXqyqEEtdkL1XoEvtNB4Q/4606.jpeg",
      name: "Meta Angels #4606",
      price: "0.03 ETH",
      bid: "0 RARI",
    },
    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmPeYZJnGTooUk9zq2ATmXMnEXaYc3ms5zvBS4vkBKNmVK/8739.jpeg",
      name: "Meta Angels #8739",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmY4ptX6ZwVXdKtQTmZQ7vBF2t3qGWhY3H4XVm5Bhwf2hh/2644.jpeg",
      name: "Meta Angels #2644",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmfQdFyuFjm6gZ8VkUocFBVgsfY6zwxHD6gubNSecNtKS1/9865.jpeg",
      name: "Meta Angels #9865",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/6989.jpeg",
      name: "Meta Angels #6989",
      price: "0.03 ETH",
      bid: "0 RARI",
    },
    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmPeYZJnGTooUk9zq2ATmXMnEXaYc3ms5zvBS4vkBKNmVK/8589.jpeg",
      name: "Meta Angels #8589",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmfQdFyuFjm6gZ8VkUocFBVgsfY6zwxHD6gubNSecNtKS1/9349.jpeg",
      name: "Meta Angels #9349",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/7063.jpeg",
      name: "Meta Angels #7063",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmUr84TazuX13sxC3bfzsVeDw89Y6Gr8QShmJHErL3fUMi/3380.jpeg",
      name: "Meta Angels #3380",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmcBvE4UpAVgb4aKxDZkSqomuwdZAkACCkf1kZ5tWGjyrr/4039.jpeg",
      name: "Meta Angels #4039",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmfQdFyuFjm6gZ8VkUocFBVgsfY6zwxHD6gubNSecNtKS1/9865.jpeg",
      name: "Meta Angels #9865",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/6989.jpeg",
      name: "Meta Angels #6989",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmY6VFETjT1bTr13DXCtV2XcYJXqyqEEtdkL1XoEvtNB4Q/4606.jpeg",
      name: "Meta Angels #4606",
      price: "0.03 ETH",
      bid: "0 RARI",
    },
    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmPeYZJnGTooUk9zq2ATmXMnEXaYc3ms5zvBS4vkBKNmVK/8739.jpeg",
      name: "Meta Angels #8739",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmY4ptX6ZwVXdKtQTmZQ7vBF2t3qGWhY3H4XVm5Bhwf2hh/2644.jpeg",
      name: "Meta Angels #2644",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmfQdFyuFjm6gZ8VkUocFBVgsfY6zwxHD6gubNSecNtKS1/9865.jpeg",
      name: "Meta Angels #9865",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/6989.jpeg",
      name: "Meta Angels #6989",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmPeYZJnGTooUk9zq2ATmXMnEXaYc3ms5zvBS4vkBKNmVK/8589.jpeg",
      name: "Meta Angels #8589",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmfQdFyuFjm6gZ8VkUocFBVgsfY6zwxHD6gubNSecNtKS1/9349.jpeg",
      name: "Meta Angels #9349",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/7063.jpeg",
      name: "Meta Angels #7063",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmUr84TazuX13sxC3bfzsVeDw89Y6Gr8QShmJHErL3fUMi/3380.jpeg",
      name: "Meta Angels #3380",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmcBvE4UpAVgb4aKxDZkSqomuwdZAkACCkf1kZ5tWGjyrr/4039.jpeg",
      name: "Meta Angels #4039",
      price: "0.03 ETH",
      bid: "0 RARI",
    },
    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmfQdFyuFjm6gZ8VkUocFBVgsfY6zwxHD6gubNSecNtKS1/9865.jpeg",
      name: "Meta Angels #9865",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/6989.jpeg",
      name: "Meta Angels #6989",
      price: "0.03 ETH",
      bid: "0 RARI",
    },

    {
      image:
        "https://metaangelsnft.mypinata.cloud/ipfs/QmY6VFETjT1bTr13DXCtV2XcYJXqyqEEtdkL1XoEvtNB4Q/4606.jpeg",
      name: "Meta Angels #4606",
      price: "0.03 ETH",
      bid: "0 RARI",
    },
  ];

  return {
    props: {
      nfts,
    },
  };
}
