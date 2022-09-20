import Blockies from "react-blockies";
import {
  IoCopyOutline,
  IoSwapVertical,
  IoChevronDownOutline,
} from "react-icons/io5";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import styles from "./../styles/User.module.scss";
import Button from "../components/Button/Button";
import NFTCard from "../components/NFTCard/NFTCard";

export default function User() {
  return (
    <div className={styles.User}>
      <Navbar />
      <div className={styles.UserDetails}>
        <Blockies
          seed="Jeremy"
          size={30}
          scale={3}
          color="#dfe"
          bgColor="red"
          spotColor="#abc"
          className={styles.Blockie}
        />
        <div className={styles.UserDetailsInfo}>
          <h2>0x468...9b3d</h2>
          <Button type={["secondary", "small"]} className={styles.copyButton}>
            <span>0x468...9b3d</span>
            <IoCopyOutline />
          </Button>
        </div>
      </div>
      <div>
        <div className={styles.filter}>
          <div>
            <Button title={"My items"} type={["secondary", "small"]} />
            <Button title={"Activities"} type={["secondary", "small"]} />
          </div>
          <Button className={styles.ctrlButton} type={["secondary", "small"]}>
            <IoSwapVertical />
            <span>Recently listed</span>
            <IoChevronDownOutline />
          </Button>
        </div>
        {true ? (
          <div className={styles.NoResult}>
            <h2>No results</h2>
            <p>You don&apos;t have any Meta Angels yet. Explore Meta Angels</p>
            <Button title={"Explore collections"} type="small" />
          </div>
        ) : (
          <div className={styles.NFTDisplayPreview}>
            <NFTCard
              image="https://metaangelsnft.mypinata.cloud/ipfs/QmPeYZJnGTooUk9zq2ATmXMnEXaYc3ms5zvBS4vkBKNmVK/8739.jpeg"
              name="Meta Angels #8739"
              price="0.03 ETH"
              bid="0 RARI"
              forSale={false}
            />

            <NFTCard
              image="https://metaangelsnft.mypinata.cloud/ipfs/QmY4ptX6ZwVXdKtQTmZQ7vBF2t3qGWhY3H4XVm5Bhwf2hh/2644.jpeg"
              name="Meta Angels #2644"
              price="0.03 ETH"
              bid="0 RARI"
              forSale={false}
            />

            <NFTCard
              image="https://metaangelsnft.mypinata.cloud/ipfs/QmfQdFyuFjm6gZ8VkUocFBVgsfY6zwxHD6gubNSecNtKS1/9865.jpeg"
              name="Meta Angels #9865"
              price="0.03 ETH"
              bid="0 RARI"
            />

            <NFTCard
              image="https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/6989.jpeg"
              name="Meta Angels #6989"
              price="0.03 ETH"
              bid="0 RARI"
            />

            <NFTCard
              image="https://metaangelsnft.mypinata.cloud/ipfs/QmPeYZJnGTooUk9zq2ATmXMnEXaYc3ms5zvBS4vkBKNmVK/8589.jpeg"
              name="Meta Angels #8589"
              price="0.03 ETH"
              bid="0 RARI"
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
