import React from "react";
import clsx from "clsx";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";
function ColorModeToggle({ className, buttonClassName, value, onChange }) {
  const isBrowser = useIsBrowser();
  const title = translate(
    {
      message: "Switch between dark and light mode (currently {mode})",
      id: "theme.colorToggle.ariaLabel",
      description: "The ARIA label for the navbar color mode toggle",
    },
    {
      mode:
        value === "dark"
          ? translate({
              message: "dark mode",
              id: "theme.colorToggle.ariaLabel.mode.dark",
              description: "The name for the dark color mode",
            })
          : translate({
              message: "light mode",
              id: "theme.colorToggle.ariaLabel.mode.light",
              description: "The name for the light color mode",
            }),
    }
  );
  return (
    <div className={clsx(styles.toggle, className)}>
      <button className={clsx("clean-btn", styles.toggleButton, !isBrowser && styles.toggleButtonDisabled, buttonClassName)} type="button" onClick={() => onChange(value === "dark" ? "light" : "dark")} disabled={!isBrowser} title={title} aria-label={title} aria-live="polite">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={clsx(styles.toggleIcon, styles.lightToggleIcon)}>
          <g clipPath="url(#clip0_1899_7499)">
            <circle fill="currentColor" cx="14" cy="14" r="12" />
          </g>
          <defs>
            <clipPath id="clip0_1899_7499">
              <rect width="25.3477" height="25.4414" fill="white" transform="translate(1 1)" />
            </clipPath>
          </defs>
        </svg>

        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={clsx(styles.toggleIcon, styles.darkToggleIcon)}>
          <g clipPath="url(#clip0_1899_28758)">
            <circle fill="white" cx="14" cy="14" r="12" />
            <circle fill="black" cx="14" cy="14" r="5" />
          </g>
          <defs>
            <clipPath id="clip0_1899_28758">
              <rect width="23.5781" height="23.7539" fill="white" transform="translate(2 2)" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}
export default React.memo(ColorModeToggle);
