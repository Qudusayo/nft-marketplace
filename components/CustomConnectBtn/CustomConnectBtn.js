import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import Blockies from "react-blockies";
import MenuItem from "@mui/material/MenuItem";

import Button from "../Button/Button";
import styles from "./CustomConnectBtn.module.scss";
import Options from "../Options/Options";

export default function CustomConnectBtn() {
  const { disconnectAsync } = useDisconnect();
  const { push } = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const shortenAddress = (add) =>
    !!add
      ? (
          add.slice(0, 5) +
          "..." +
          add.slice(add.length - 4, add.length)
        ).toLowerCase()
      : "";

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    title={
                      <span>
                        Connect <span>Wallet</span>
                      </span>
                    }
                    clickFunction={openConnectModal}
                    className={styles.Button}
                    type="secondary"
                  />
                );
              }
              return (
                <div>
                  <div
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <Blockies
                      seed={account.address}
                      size={8}
                      scale={5}
                      color="#dfe"
                      bgColor="red"
                      spotColor="#abc"
                      className={styles.Blockies}
                    />
                  </div>
                  <Options anchorEl={anchorEl} handleClose={handleClose}>
                    <MenuItem className={styles.Menu} disableRipple={true}>
                      <div>
                        <span
                          style={{
                            display: "block",
                            color: "rgba(4, 4, 5, 0.45)",
                          }}
                        >
                          Mainnet
                        </span>
                        <span style={{ display: "block" }}>
                          {shortenAddress(account.address)}
                        </span>
                      </div>
                    </MenuItem>
                    <MenuItem
                      className={styles.Menu}
                      onClick={() => push("/user")}
                    >
                      My items
                    </MenuItem>
                    <MenuItem
                      className={styles.Menu}
                      onClick={() => {
                        handleClose();
                        disconnectAsync();
                      }}
                    >
                      Disconnect
                    </MenuItem>
                  </Options>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
