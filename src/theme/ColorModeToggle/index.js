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
            <path d="M13.668 19.6914C16.9258 19.6914 19.6328 16.9844 19.6328 13.7148C19.6328 10.4336 16.9258 7.72656 13.668 7.72656C10.4102 7.72656 7.70312 10.4336 7.70312 13.7148C7.70312 16.9844 10.4102 19.6914 13.668 19.6914ZM13.668 17.8984C11.3828 17.8984 9.48438 16 9.48438 13.7148C9.48438 11.418 11.3828 9.51953 13.668 9.51953C15.9531 9.51953 17.8516 11.418 17.8516 13.7148C17.8516 16 15.9531 17.8984 13.668 17.8984ZM13.6797 5.55859C14.2305 5.55859 14.6875 5.10156 14.6875 4.53906V2.01953C14.6875 1.45703 14.2305 1 13.6797 1C13.1172 1 12.6602 1.45703 12.6602 2.01953V4.53906C12.6602 5.10156 13.1172 5.55859 13.6797 5.55859ZM19.4219 7.96094C19.8203 8.34766 20.4648 8.35938 20.8633 7.96094L22.6562 6.16797C23.043 5.78125 23.043 5.125 22.6562 4.72656C22.2695 4.33984 21.625 4.33984 21.2266 4.72656L19.4219 6.53125C19.0352 6.92969 19.0352 7.57422 19.4219 7.96094ZM21.8008 13.7148C21.8008 14.2656 22.2695 14.7227 22.8203 14.7227H25.3398C25.8906 14.7227 26.3477 14.2656 26.3477 13.7148C26.3477 13.1641 25.8906 12.6953 25.3398 12.6953H22.8203C22.2695 12.6953 21.8008 13.1641 21.8008 13.7148ZM19.4219 19.4688C19.0352 19.8672 19.0352 20.5117 19.4219 20.8984L21.2266 22.7148C21.625 23.0898 22.2695 23.0781 22.6562 22.7031C23.043 22.3047 23.043 21.6602 22.6562 21.2734L20.8516 19.4688C20.4648 19.0938 19.8203 19.0938 19.4219 19.4688ZM13.6797 21.8711C13.1172 21.8711 12.6602 22.3281 12.6602 22.8789V25.4102C12.6602 25.9609 13.1172 26.418 13.6797 26.418C14.2305 26.418 14.6875 25.9609 14.6875 25.4102V22.8789C14.6875 22.3281 14.2305 21.8711 13.6797 21.8711ZM7.92578 19.4688C7.52734 19.0938 6.87109 19.0938 6.48438 19.4688L4.69141 21.2617C4.30469 21.6484 4.30469 22.293 4.67969 22.6914C5.06641 23.0664 5.72266 23.0781 6.12109 22.7031L7.91406 20.8984C8.30078 20.5117 8.30078 19.8672 7.92578 19.4688ZM5.54688 13.7148C5.54688 13.1641 5.07812 12.6953 4.52734 12.6953H2.00781C1.45703 12.6953 1 13.1641 1 13.7148C1 14.2656 1.45703 14.7227 2.00781 14.7227H4.52734C5.07812 14.7227 5.54688 14.2656 5.54688 13.7148ZM7.91406 7.96094C8.30078 7.58594 8.30078 6.91797 7.92578 6.53125L6.13281 4.72656C5.74609 4.35156 5.08984 4.33984 4.70312 4.72656C4.31641 5.125 4.31641 5.78125 4.69141 6.15625L6.48438 7.96094C6.87109 8.34766 7.51562 8.34766 7.91406 7.96094Z" fill="currentColor" />
          </g>
          <defs>
            <clipPath id="clip0_1899_7499">
              <rect width="25.3477" height="25.4414" fill="white" transform="translate(1 1)" />
            </clipPath>
          </defs>
        </svg>

        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={clsx(styles.toggleIcon, styles.darkToggleIcon)}>
          <g clipPath="url(#clip0_1899_28758)">
            <path d="M20.4102 17.9141C13.9531 17.9141 9.94531 14.0234 9.94531 7.77734C9.94531 5.99609 10.2383 4.42578 10.6719 3.58203C10.8477 3.24219 10.8828 3.07812 10.8828 2.84375C10.8828 2.45703 10.5195 2 10.0273 2C9.93359 2 9.71094 2.03516 9.38281 2.16406C5.04688 3.92188 2 8.49219 2 13.4141C2 20.5273 7.16797 25.707 14.2812 25.707C19.3789 25.707 23.5156 23.0352 25.4141 18.6523C25.5547 18.3477 25.5781 18.0898 25.5781 17.9609C25.5781 17.4805 25.168 17.1523 24.8047 17.1523C24.6172 17.1523 24.4766 17.1641 24.1953 17.2695C23.2461 17.6562 21.8164 17.9141 20.4102 17.9141ZM3.83984 13.332C3.83984 9.6875 5.73828 6.21875 8.77344 4.30859C8.39844 5.39844 8.19922 6.60547 8.19922 7.94141C8.19922 15.2656 12.6641 19.625 20.1406 19.625C21.3477 19.625 22.3672 19.4844 23.3398 19.1445C21.5586 22.0859 18.125 23.8789 14.3516 23.8789C8.26953 23.8789 3.83984 19.4492 3.83984 13.332Z" fill="currentColor" />
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
