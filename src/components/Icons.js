 const TwitterIcon = ({className, ...rest}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.23em"
      height="1em"
      viewBox="0 0 256 209"
      className={`${className} w-full h-auto`}
      {...rest}
    >
      <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v209H0z" />
      <path
        fill="#55acee"
        d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
      />
    </svg>
  )


  export const GithubIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path fill="none" d="M0 0h512v512H0z" />
      <path
        fill="currentColor"
        d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
      />
    </svg>
  );

  export const LinkedInIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <g fill="none">
        <rect width={256} height={256} fill="#fff" rx={60} />
        <rect width={256} height={256} fill="#0A66C2" rx={60} />
        <path
          fill="#fff"
          d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
        />
      </g>
    </svg>
  );


  export const SunIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <g strokeDasharray="2">
          <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.2s"
              values="4;2"
            />
          </path>
          <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.2s"
              dur="0.2s"
              values="4;2"
            />
          </path>
        </g>
        <path
          fill="currentColor"
          d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
          opacity="0"
        >
          <set attributeName="opacity" begin="0.5s" to="1" />
        </path>
      </g>
      <g fill="currentColor" fillOpacity="0">
        <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
          <animate
            id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
            dur="0.4s"
            values="0;1"
          />
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
            dur="0.4s"
            values="1;0"
          />
        </path>
      </g>
      <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
        <circle cx="12" cy="12" r="12" fill="#fff" />
        <circle cx="22" cy="2" r="3" fill="#fff">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.1s"
            dur="0.4s"
            values="2;6"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="3;12"
          />
        </circle>
        <circle cx="22" cy="2" r="1">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.1s"
            dur="0.4s"
            values="22;18"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.1s"
            dur="0.4s"
            values="2;6"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.1s"
            dur="0.4s"
            values="1;10"
          />
        </circle>
      </mask>
      <circle
        cx="12"
        cy="12"
        r="6"
        fill="currentColor"
        mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
      >
        <set attributeName="opacity" begin="0.5s" to="0" />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="6;10"
        />
      </circle>
    </svg>
  );
  
  export const MoonIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
      <g
        fill="none"
        stroke="currentColor"
        strokeDasharray="2"
        strokeDashoffset="2"
        strokeLinecap="round"
        strokeWidth="2"
      >
        <path d="M0 0">
          <animate
            fill="freeze"
            attributeName="d"
            begin="1.2s"
            dur="0.2s"
            values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
          />
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.2s"
            dur="0.2s"
            values="2;0"
          />
        </path>
        <path d="M0 0">
          <animate
            fill="freeze"
            attributeName="d"
            begin="1.5s"
            dur="0.2s"
            values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
          />
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.5s"
            dur="1.2s"
            values="2;0"
          />
        </path>
        <animateTransform
          attributeName="transform"
          dur="30s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </g>
      <g fill="currentColor">
        <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            dur="0.4s"
            values="1;0"
          />
        </path>
        <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.2s"
            dur="0.4s"
            values="1;0"
          />
        </path>
      </g>
      <g
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
        <set attributeName="opacity" begin="0.6s" to="0" />
      </g>
      <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
        <circle cx="12" cy="12" r="12" fill="#fff" />
        <circle cx="18" cy="6" r="12" fill="#fff">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.6s"
            dur="0.4s"
            values="18;22"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.6s"
            dur="0.4s"
            values="6;2"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.6s"
            dur="0.4s"
            values="12;3"
          />
        </circle>
        <circle cx="18" cy="6" r="10">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="0.6s"
            dur="0.4s"
            values="18;22"
          />
          <animate
            fill="freeze"
            attributeName="cy"
            begin="0.6s"
            dur="0.4s"
            values="6;2"
          />
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.6s"
            dur="0.4s"
            values="10;1"
          />
        </circle>
      </mask>
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="currentColor"
        mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.6s" to="1" />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;6"
        />
      </circle>
    </svg>
  );

  export const LinkArrow = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={`w-full h-auto ${className}`}
      {...rest}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
      />
    </svg>
  );


  export const CircularText = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1440}
      height={1440}
      viewBox="0 0 1080 1080"
      className={`w-full h-auto ${className}`}
      {...rest}
    >
      <path d="M611.6 201.5c-.3.9-.6 2.5-.6 3.5 0 1.1-.6 3.4-1.4 5.2-.8 1.8-2.4 7.1-3.7 11.8-1.2 4.7-2.5 9.4-3 10.5-.5 1.1-1.3 3.8-1.9 6-1.8 7.6-4.8 18-6 20.9-1.3 3.6-.1 5.2 4.7 6.2 2.9.6 3.1.4 3.8-2.7.8-3.9 4.5-15.9 4.9-15.9.9 0 15.6 4 17.7 4.8 2.7 1.1 3.1 1.8 7.6 15.1 2.5 7.3 3.2 8.5 6 9.7 4 1.7 4 1.7 4.6 0 .3-.8-.8-5.2-2.5-9.8-3.7-10.1-4.4-13.8-2.9-13.8 1.8 0 10.4-4 12.5-5.9 3.3-2.8 6.6-11.2 6.6-16.8 0-6.7-1.1-9.3-6-14.7-4.5-4.9-10-7.4-27-12.1-5.2-1.5-10.2-2.9-11.1-3.2-.9-.3-1.9.3-2.3 1.2zm13.6 10.1c19.5 4.8 24.7 9.5 23.5 21.1-.7 6.7-3.1 9.6-9.7 11.8-4.4 1.5-5.1 1.4-14.1-.9-5.2-1.4-10.6-2.9-12.1-3.5-2.9-1.1-3-.9 1.3-14.6 1.1-3.9 2.6-8.9 3.2-11.3.6-2.3 1.1-4.2 1.3-4.2.1 0 3.1.7 6.6 1.6zM533.4 209.7c-1.2.2-4 2-6.2 3.9-2.2 1.8-4.3 3.4-4.6 3.4-.3 0-.6-1.6-.6-3.5 0-3.4-.1-3.5-4.2-3.5h-4.1l.8 15.7c.4 8.7 1 19.8 1.4 24.8l.6 9h7v-32.1l2.9-3.8c1.6-2.1 4.5-4.5 6.5-5.2 5.9-2.4 6.6-3 6.6-6s-1.5-3.7-6.1-2.7zM468 217.6c-4.9 2.1-10.9 8.1-13.1 13.2-5.1 11.6.8 27.3 12.3 33.3 5.3 2.7 16.9 2.6 23.4-.2 5-2.2 11.4-7.5 11.4-9.3 0-.6-1.1-1.9-2.4-2.8-2.3-1.6-2.4-1.6-5.2 1.3-1.7 1.8-5.3 3.7-9.4 5l-6.7 2.2-5.5-2.5c-9-4.2-12.8-11.8-5.8-11.8 1.7 0 4.7-.7 6.7-1.5 1.9-.8 5-1.5 6.9-1.5 1.8 0 5.3-.6 7.6-1.4 2.4-.8 6.7-1.7 9.6-2.1l5.3-.7-.7-3.2c-1.6-7.3-8.8-16.3-15-18.6-3.8-1.5-15.5-1.1-19.4.6zm20.9 9.3c3.1 2.9 4.2 4.6 3.9 6.3-.3 2-1 2.4-6 3-3.1.4-8.1 1.4-11 2.2-2.9.8-7.5 1.7-10.2 2l-4.9.6.7-4.3c1.3-8.6 7.6-13.7 17.1-13.7 5.8 0 6.4.2 10.4 3.9zM412.5 235.1c-5.2 2.7-9.2 6.6-11.4 10.8l-1.8 3.3-1.3-3.1c-.7-1.7-1.6-3.1-2-3.1-1.8 0-7 2.3-7 3.1 0 .5 1.3 3.7 2.9 7.1 1.6 3.5 3.9 9 5.2 12.3 1.3 3.3 3.6 8.4 5.2 11.4 1.5 3 2.7 5.9 2.7 6.4s.7 2.5 1.6 4.5c4.4 9.7 5.3 11.8 5.8 13.7.4 1.1 1.5 3.1 2.5 4.4 1.7 2.3 2.1 2.3 5 1.1 3.7-1.5 3.7-1.1-2.1-14.9-2.2-5.1-3.8-9.5-3.6-9.6.2-.2 2.3.1 4.8.6 10.7 2.4 22-3.3 27.6-14.1 2.6-4.9 2.3-15-.5-21.1-2.2-5-9.5-12.3-13.7-13.9-4.7-1.8-15.5-1.2-19.9 1.1zm16.9 7.2c2.2 1.2 5.3 3.9 7 6 2.8 3.5 3.1 4.6 3.1 10.6 0 8.2-2.6 12.8-9.2 16-8.8 4.2-17 1.7-22.7-7-2.1-3.1-2.6-5.1-2.6-10.2 0-5.5.4-6.7 3.2-10.1 3.5-4.3 9.7-7.6 14.3-7.6 1.7 0 4.8 1 6.9 2.3zM674.5 245.7c-10.9 4.4-16.5 12.9-16.6 24.9-.1 8.6 1.6 12.8 7.2 17.8 6.4 5.9 11.5 7.9 19.4 8l7 .1v-3c0-2.9-.2-3-5.6-3.6-11.6-1.3-20.9-9.5-20.9-18.6 0-7.8-.4-8 29.3 8.1 3.8 2.1 7.5 3.6 8.3 3.4 1.9-.4 5.4-9.9 5.4-14.6 0-5.1-4.6-13.7-9.3-17.5-4.6-3.7-12.3-6.7-17.1-6.6-1.7 0-4.9.7-7.1 1.6zm16.2 7.9c5 2.4 8.5 7.6 9 13.2.7 8.5-.1 8.5-14.1 1.2-16.2-8.4-16.3-8.5-14.5-10.6 4.3-5.3 12.9-6.9 19.6-3.8zM551.4 249.8c-.6.4-1.6 1.7-2.3 2.9-1.8 3.4 1.1 7.3 5.3 7.3 4.1 0 5.6-1.6 5.6-5.7 0-2.2-.6-3.6-1.9-4.3-2.3-1.2-5.1-1.3-6.7-.2zM362 263.9c-7.8 1.6-15.6 7.5-19.2 14.5-1.5 2.9-2 5.9-2 11.1 0 6.1.4 8 3 12.6 3.5 6.4 8.8 10.4 16.2 12.4 15.2 4 32-8.8 32-24.4 0-8.1-1.5-12.2-6.1-17.5-6.5-7.4-15.1-10.5-23.9-8.7zm9.8 8.7c5.3 2.2 8.8 5.9 11.3 12.1 2 5 2.1 5.8.8 9.6-1.9 5.7-8.7 12.2-13.6 13-6.2 1-10.9-.2-14.8-4-7.2-7-9.1-14.3-5.6-21.8 2.2-4.9 4.6-7 9.7-8.9 5.1-1.9 7.7-1.9 12.2 0zM724.5 274.4c-.3.9-.7 2.3-1 3.1-.3 1 .7 1.6 3.3 2.1 12.4 2.3 21.7 12.7 17.8 20.1-2.9 5.7-3.6 5.7-11.2-.3-9.1-7.3-13.3-9.4-19-9.4-4.1 0-5.1.5-8.5 3.9-3.6 3.5-3.9 4.3-3.9 9.3 0 4.2.6 6.2 2.5 8.9 4.8 6.5 12.3 10.9 18.4 10.9 4 0 4 0 2.9 2.6-1.1 2.3-1 2.9 1.1 4.6 1.3 1 2.7 1.7 3.1 1.6.8-.3 9.3-10.4 16.7-19.9 9.4-11.9 9.4-20.4-.2-29.5-6.2-5.9-11.1-8.5-17.2-9.2-3.3-.4-4.4-.1-4.8 1.2zm3.5 28.2c4.3 3.1 8.1 6.3 8.4 7 .3.8-.7 2.8-2.2 4.5-5.1 5.7-14.2 4.8-21.3-2.3-4.1-4.1-4.6-7-1.9-11.3 3.3-5.4 7.1-4.9 17 2.1zM302.1 283.4c-1.3 1.4-2.2 2.9-2 3.4.2.6 6.1 7 13 14.3 6.9 7.4 15.2 16.3 18.5 19.9 3.2 3.5 8 8.7 10.6 11.5l4.7 5 2.5-2.4c1.4-1.4 2.6-2.9 2.6-3.5 0-.6-2.4-3.6-5.3-6.6-2.9-3-10.2-10.9-16.2-17.5-13.3-14.7-24.7-26.5-25.6-26.5-.3 0-1.6 1.1-2.8 2.4zM760.4 317.5c-9.8 4.9-14.4 12.2-14.4 23 0 7.8 1.9 12.5 7.4 18.4 3.8 4 11.9 8.1 16.4 8.1 3.1 0 3.2-.2 3.2-3.9 0-3.8-.1-3.8-4.4-4.3-5.1-.6-9.6-3.7-13.1-9-4.7-7-2.3-16.6 5.6-22.9 3.9-3.1 4.9-3.4 10.9-3.4 5.1 0 7.2.5 9.7 2.3 4.1 2.9 8.3 10.2 8.3 14.5 0 2.6.6 3.7 2.6 4.7 2.2 1.2 2.7 1.2 3.4 0 1.7-2.7 1.1-10.4-1.1-14.5-7.1-13.6-22.1-19.2-34.5-13zM294.5 323.4c-7.2 3.3-13.1 10.3-14.5 17.2-1.5 6.9-.4 13.9 2.7 18.8 2.6 4.1 7.2 8.5 8.7 8.6.5 0 1.8.8 2.8 1.7 1.5 1.3 3.8 1.7 10.1 1.7 9.6 0 12.3-1.2 19-7.9 5.3-5.5 7.3-9.2 8.2-15.9.8-5.2 0-6.6-4.2-6.6-1.7 0-2.3.6-2.3 2.2 0 7-5.7 16-12.1 19.4-6 3.1-18 .8-15.4-2.9.6-.8 6.1-7.7 12.3-15.3 6.1-7.5 11.2-14.2 11.2-14.9 0-3-11.6-8.5-17.8-8.5-2 0-6 1.1-8.7 2.4zm14.4 6.7c1.7.6 3.1 1.3 3.1 1.5 0 .8-5.6 8.1-12.9 16.7l-7.5 8.7-2.2-2.1c-4.8-4.5-3.9-15.1 1.8-20.6 5.3-5.1 11.1-6.5 17.7-4.2zM804.5 349.4c-1.8 1.3-1.8 1.4.5 4.5 2.8 4 3 3.7-10.5 12.3-12.6 7.9-13.6 8.7-16.3 12.2-4 5.2-2.1 14.8 4 20.2 3.8 3.5 5.7 3.7 7 .9 1-2.2.8-2.9-1.5-5.3-4.2-4.4-5-7.6-2.5-10.7 2.7-3.5 24-17.5 26.5-17.5.4 0 2.4 2.5 4.3 5.5s3.7 5.5 4 5.5c.3 0 1.7-.8 3.2-1.8l2.7-1.8-2.7-3.5c-1.5-1.8-3.3-4.6-4-6.1-1.1-2.6-.9-2.9 3.3-5.4 2.5-1.4 4.5-2.9 4.5-3.3 0-.4-1-2.1-2.3-3.8l-2.3-3.1-4.4 2.9-4.5 3-2.5-3.1c-2.8-3.4-3.8-3.6-6.5-1.6zM262.6 360.5c-.9 1.3-1.6 2.9-1.6 3.5 0 .7 2.1 3.9 4.8 7.2 2.6 3.3 5.6 7.2 6.7 8.6 1.1 1.5 4.5 5.8 7.5 9.7 3.1 3.8 5.9 7.8 6.3 8.8.6 1.5.2 1.6-3.1 1.2-2-.3-9.5-1-16.7-1.6-7.1-.6-15.2-1.4-17.9-1.6-4.3-.5-5.2-.2-6.7 1.8-3.9 5.1-3 5.6 9.9 6.3 6.4.3 14.9 1 18.7 1.6 3.9.6 10.4 1.3 14.6 1.6 7.4.6 7.6.6 9.7-2.1 1.2-1.5 2.2-3.5 2.2-4.4 0-.9-2.4-4.7-5.3-8.5-2.8-3.7-6.8-9-8.7-11.6-1.9-2.6-4.8-6.3-6.5-8.3-1.6-2-4.8-6.1-7-9.1-2.2-3.1-4.3-5.6-4.6-5.6-.4 0-1.4 1.1-2.3 2.5zM856.5 404.5c-3 2.9-3.1 3.5-.4 6.9 2.4 3 5.9 3.4 8.2.8 2.4-2.7 2.1-5.8-.9-8.1-3.4-2.7-4-2.6-6.9.4zM789.9 407.4c-2.6 5.6 2.1 10.7 7.3 8 5.6-2.9 3.7-10.4-2.7-10.4-2.8 0-3.8.5-4.6 2.4zM832 415c-3.6 1.6-11 4.7-16.5 7s-10.9 4.5-12 5c-8.2 3.6-12.1 5-14 5-3.2 0-6.6-4.2-7.2-9-.5-3.9-.7-4.1-3.7-3.8-3 .3-3.1.5-2.9 4.6.2 5.3 3 10.9 6.6 13.6 4.9 3.6 17.1 1.7 28.6-4.5.9-.4 4.7-2 8.5-3.5 3.8-1.4 7.7-2.9 8.5-3.4 4-1.8 9-3.9 13.4-5.5 4.8-1.7 5.6-3 3.7-6.6-1.5-2.6-5.2-2.3-13 1.1zM239 420.3c-7.5 4-13 13.8-13 23.2 0 5.3 3.8 13.3 8.3 17.2 4.1 3.6 13.3 7.3 18.1 7.3 4.7 0 11.1-2.5 15.6-6 7.2-5.7 11.7-19.8 9.3-29-.8-3-1.3-3.5-3.9-3.5h-2.9v8.5c-.1 7.6-.4 8.9-2.9 12.8-4 5.8-8.4 8.4-14 8l-4.4-.3 6.5-19.3c3.6-10.6 6.2-19.6 5.9-20-.4-.3-4.6-.8-9.4-1-7.7-.3-9.2-.1-13.2 2.1zm14.3 5.4c.5.8-2.6 11.5-4.9 16.8-.7 1.6-1.7 4.8-2.3 7-2.2 8.1-4.6 8.5-9.8 1.7-2.5-3.2-3.3-5.4-3.3-8.3 0-6.4 4.4-13.4 10.5-16.7 2.3-1.3 9.2-1.6 9.8-.5zM835.8 438.5c-5.6 3.8-6 5.2-5.6 18.9.3 13.9-.3 15.6-5.8 15.6-2.4 0-3.8-.7-5.2-2.8-2.6-3.6-4.4-12.9-4-20 .3-5.6.3-5.7-2.6-6-3.7-.5-4.4.4-5.2 6.1-.5 3.5 0 7.1 1.7 13.5 2 7.7 2.9 9.3 7.1 13.4 3.9 4 5.3 4.8 8.3 4.8 2 0 4.9-.7 6.5-1.5 5.4-2.8 6-4.7 6-19.2 0-10.6.3-13.5 1.6-14.7 2.4-2.5 7.1-2 9.6.9 3.1 3.6 5.9 13.2 5.2 17.7-.4 3-.2 3.8 1.5 4.7 4.4 2.4 5.1 1.6 5.1-6.2 0-11.9-4.3-21.8-11.1-25.7-4.9-2.7-8.6-2.5-13.1.5zM216.5 475.4c-9.7 4.5-15 10.8-18.6 21.8-1 3.3-1.9 8.6-1.9 11.7 0 3.1-.7 9.2-1.5 13.6-2 11-2.1 10.5 2.8 10.5 2.3 0 6.1.5 8.3 1 2.3.5 11.5 1.6 20.5 2.5 9 .8 20 1.9 24.3 2.5 4.3.5 8.3.7 8.7.4.5-.3.9-3.3.9-6.7 0-3.4.5-8.2 1.1-10.7.6-2.5 1.1-8.8 1.2-14 .1-8.7-.2-10.1-3.1-16.1-5.9-12.4-16.3-18.9-30-18.9-6 0-8.8.5-12.7 2.4zm26.3 9.9c9.8 6.3 13 15.1 11.2 31.7-.5 5.6-1 10.8-1 11.6 0 1.7-8.2 1.9-14.5.4-2.2-.5-11.1-1.5-19.9-2.2-11-.8-16-1.6-16.3-2.5-.8-2 1.4-19.2 3.2-25.1 1.9-6.3 7.3-12.7 13-15.4 6.1-2.9 18.5-2.1 24.3 1.5zM820.4 517.6c-.3 1.2-.4 10.2-.2 20 .3 17 .4 18.2 3 23.4 4.6 9.6 9.2 13.6 19.7 17 8 2.5 12.1 2.5 20.5-.1 5.1-1.6 7.8-3.2 11.5-6.8 8.7-8.5 10.5-14.6 11.6-38.3l.7-15.6-5.3-.6c-3-.4-17.9-.7-33.2-.9-27.7-.2-27.8-.2-28.3 1.9zm57.7 8.3c.3.3.3 6.7 0 14.1-.6 12.5-.8 13.9-3.4 18.3-3.3 5.5-9.3 10.2-15.1 11.8-5.1 1.4-13.3.6-17.7-1.6-4.4-2.2-11.9-9.5-11.9-11.5 0-.9-.7-2.5-1.5-3.6-1.1-1.4-1.4-5.1-1.5-15 0-7.2.3-13.4.7-13.8.8-.8 49.6.4 50.4 1.3zM260 576.1c-.8.5-2.6.9-3.9.9-1.3 0-6.2.9-11 2-4.7 1.1-12 2.7-16.1 3.6-4.1.8-10.2 2.2-13.5 2.9-3.3.8-8.8 2-12.2 2.6-8.3 1.5-10.1 2.8-8.5 6.3.9 2.1 1.8 2.6 4.9 2.6 2.1 0 5.6-.5 7.8-1.1 5.8-1.5 13.8-2.9 14.3-2.5.2.2-.4 1.9-1.3 3.6-1.3 2.5-1.6 5.2-1.3 11.5.3 9.3 2.7 14 9.4 19.2 3.3 2.5 4.7 2.8 12.2 3.2 4.7.2 10.2-.2 12.2-.8 5.1-1.5 11.9-7.7 14.1-12.9 4.5-10.4.9-24.6-7.8-30.3l-2.5-1.6 3.1-1.1c2.7-.9 3.1-1.6 3.1-4.6 0-3.9-.9-4.9-3-3.5zm-9.4 13.5c5.8 1.9 7.9 4.3 9.9 11.1 3 9.8-1.7 18.4-11.8 21.6-7 2.2-7.4 2.2-13.5-.9-14.2-7.1-12.8-26.3 2.3-31.8 5.3-1.9 7.5-1.9 13.1 0zM827.3 587.6c-3.3.8-12.1 9.1-14.5 13.8-3.9 7.7-3.4 24.4.8 26 3.5 1.3 7.5-4 4.4-5.9-1.7-1.1-1.1-11 .9-15.6 3.1-6.9 8.7-10.9 15.3-10.9 2.8 0 3 .2 2.5 2.7-1 4.7-3.4 14.3-6.1 24.7-3.2 12-3.2 13.2-.3 14 7.9 2.1 17.7-.6 23.5-6.5 4.9-4.9 6.4-8.5 7-16.1.8-11.2-3.5-19-13.3-24-4-2.1-15.2-3.3-20.2-2.2zm22.2 13.5c4.5 4.1 4.5 4.2 4.5 10.9 0 6.6-.1 6.9-4.2 11.4-3.6 3.9-5.1 4.7-9 5.3-4.5.5-4.8.4-4.8-1.8 0-5.3 6.6-29.9 8.1-29.9.5 0 3 1.9 5.4 4.1zM273 633.7c-2.3.8-15.7 7-23.8 11-9.9 4.8-12.7 8.9-12.7 18.4 0 5 .5 7.2 1.8 8.6.9 1.1 1.7 2.5 1.7 3.1 0 1.4 4.9 7.2 6.2 7.2.5 0 2.1.9 3.4 1.9l2.4 1.9-2.7 2c-2.6 1.9-2.7 2.2-1.4 4.6 1.6 2.9 4 3.3 7.9 1.2 3.1-1.7 18.2-8.6 18.8-8.6.3 0 14.9-6.6 17.4-7.9 1.9-1 2.4-4.4 1-7-1.2-2.4-1.1-2.4-14.5 3.9-13.2 6.2-17.6 7.4-22.6 5.9-4.8-1.5-8.9-5.9-10.8-11.6-1.2-3.8-1.2-4.7.3-8.8 1.7-4.4 2.2-4.7 12.4-9.6 17.9-8.5 18.8-8.9 20-8.9 1.6 0 1.5-1.1-.4-4.8-1.6-3.3-1.8-3.4-4.4-2.5zM795.5 652.9c-1.8 4-1.8 4.2.1 6.3 1 1.2 3.3 3.8 4.9 5.7 4.4 5.1 13.9 15.5 21.7 23.9 5.8 6.1 7.1 7.1 8.7 6.3 2.1-1.2 3.4-4.8 2-5.6-.5-.3-6.2-6.5-12.6-13.8-6.5-7.3-12.6-14.1-13.5-15.1-1-1.1-1.8-2.4-1.8-2.9 0-.6 8.3-.7 21.4-.2l21.4.7 1.7-3.2c2.9-5.6 2.3-5.7-26.3-5.9l-25.8-.2-1.9 4zM782 687.7c-10 4.3-18 15.9-18 26.2 0 4.7.2 5.1 2.4 5.1 3.7 0 5.5-1 4.9-2.6-.8-2.1 1.4-10 3.9-13.8 4.4-6.6 13.7-10.2 20.1-7.7 3.4 1.3 3.8.5-9.7 20.1-7.5 10.8-9.7 14.7-9 15.8 3.6 5.6 19.2 7.2 27.4 2.8 11.3-6 16-21.8 10.1-33.4-5.6-11-21.4-17.2-32.1-12.5zm26.4 18.8c.9 1.8 1.6 4.5 1.6 5.9 0 4-3.5 10-7.7 13.5-3.2 2.7-4.6 3.1-9.4 3.1-8.4 0-8.8-1.3-3.1-9.7 2.6-3.8 6-8.9 7.6-11.4 5.3-7.9 5.7-8.2 7.7-6.3 1 .9 2.5 3.1 3.3 4.9zM294.7 689.7c-.4.3-.7 1.7-.7 2.9 0 1.8 1.1 2.9 4.8 4.8 5.8 2.9 7.5 4.8 10.3 11 2.6 5.9 2.2 12-1 16.5-1.2 1.7-2.5 3.1-2.9 3.1-.4 0-6-7.5-12.5-16.5-13-18.1-12.6-17.9-18.1-11.4-7.6 9-9.1 18.4-4.4 27.4 3.1 5.9 6.7 9.5 12.5 12.4 12.9 6.5 30.9-2.3 34.9-17 3.1-11.7-3.5-25.7-14.8-31.5-4.8-2.5-7-2.9-8.1-1.7zm-9.6 21c1.9 2.6 5.1 7.2 7.2 10.3 2.1 3 4.8 6.5 5.9 7.7 2.4 2.6 1.8 3.8-2.6 5.3-7.1 2.3-17.2-3.2-19.7-10.7-2-6.3.8-17.3 4.5-17.3.7 0 2.8 2.1 4.7 4.7zM748.3 726.1c-1.2.4-2.4 1.8-2.8 3-.6 1.8-.1 2.9 2.6 5.2 1.9 1.6 8.4 7.5 14.4 13.1 6.1 5.7 13.3 12.2 16.1 14.7 2.8 2.4 7.5 6.5 10.5 9.1 5.6 4.9 7.6 5.7 9.7 3.6 2.1-2.1 1.3-4.4-3-8.3-2.4-2.1-10.4-9.5-17.8-16.4-23.2-21.7-27.2-24.9-29.7-24zM327.7 726.7c-1.6 1.5-.4 4.3 3.3 8.1 4.6 4.5 4.9 6.6 1.8 10.8-3.1 4.1-19.8 20.4-20.9 20.4-.5 0-3-2.1-5.5-4.6l-4.6-4.6-2.4 2.3-2.4 2.3 5 5.1 5 5.1-2.6 2.5c-4.6 4.3-4.9 5.8-1.8 9l2.7 2.9 3.4-3.5c3.9-4 5.3-4.3 7.8-1.5 2.3 2.5 3.7 2.5 5.9.1 1.6-1.8 1.6-2-.8-4.6-1.5-1.6-2.6-3.1-2.6-3.4 0-.4 4.1-4.7 9.1-9.6 12.2-12 14.9-15.8 14.9-20.7 0-4.6-1.8-8.3-5.7-11.9-4.4-4.1-8.1-5.7-9.6-4.2zM727.5 748.9c-4.9 1.2-12.6 7.3-15.8 12.4-2.5 4.1-2.9 5.7-2.9 12.5 0 9.1 1.1 11.8 7.3 18.1 6.1 6.1 9.3 7.5 16.9 7.6 8 0 13.9-2.5 19.8-8.7 5.7-5.8 7.6-11.1 7-19.3-1.4-16.6-15.6-26.6-32.3-22.6zm14.3 9c4.5 2.3 6.3 4.3 9.1 9.8 2.6 5.3 2.6 8.3 0 13.5-2.7 5.2-6.4 8.4-11.6 9.8-7.9 2.3-14.9-.9-20.5-9.2-4.9-7.5-3.4-15.6 4.2-22.1 3.9-3.3 5-3.7 9.7-3.7 3.3 0 6.8.7 9.1 1.9zM355.9 756.3c-5.2 6.5-14.8 20.3-16.9 24.5-3.2 6.1-2.5 14.3 1.5 19.6 4.4 5.8 11.8 9.6 18.8 9.6 5.8 0 6.9.8 4.2 3-2.1 1.7-1.9 2.9.8 5.1 3 2.5 4.4 2.4 6.5-.9 1.8-2.9 14.9-21.5 21.5-30.4 4.3-6 4.5-7.1 1.5-9.2-3.1-2.2-4-2-6.6 1.7-9.1 12.8-15.8 21.1-18.5 22.8-6.6 4.1-18.4 0-22-7.7-2.6-5.3-1-9.2 8.8-23 4.7-6.5 8.5-12.6 8.5-13.5 0-1.3-4.1-5.1-5.2-4.8-.2 0-1.5 1.5-2.9 3.2zM678.9 760.9l-2.4 2 5.3 10.4c2.8 5.8 5.2 10.7 5.2 11 0 .3-2.6.3-5.7 0-10-.9-20.1 5.1-24.4 14.4-5.1 11.1.1 26.7 11 33.1 3.9 2.3 5.7 2.7 12.1 2.7 11.3-.1 19.1-4.9 22.8-13.9l1.5-3.9 2.3 2.8c2.1 2.6 2.4 2.7 5.3 1.5 1.7-.7 3.1-1.7 3.1-2.2 0-.6-2.2-5.2-4.9-10.2-14.2-26.5-22-41.1-24.4-45.9-2.2-4.2-3.5-4.5-6.8-1.8zm7.3 30.8c5.2 2 7.9 4.5 10.7 10 4.3 8.6 1.5 17.8-7.2 23.2-7.5 4.6-18.6 1.7-23-6.1-6.5-11.3-2.9-22.3 8.6-27 5.3-2.1 5.8-2.1 10.9-.1zM408.2 793c-9.7 3.2-16.1 11.8-17 22.6-.6 7.9 1 12.6 6.2 18.2 10.5 11.5 27.7 12.2 37.9 1.7 5.4-5.5 7-9.7 7-18.5.1-6.8-.3-8.2-2.9-12.6-3.6-5.8-9.5-9.8-17.7-11.9-7-1.8-6.9-1.8-13.5.5zm19.4 9.7c4 3 7.3 9.2 7.4 13.6 0 4.2-4.7 13.3-8.1 15.8-11.4 8.1-27.9 0-27.9-13.6 0-6.9 6.9-17.4 12.5-18.8 4.7-1.3 12.4.1 16.1 3zM617 807.3c-7.6 3.1-8.6 3.6-11.8 7-2.5 2.5-3.2 4.1-2.8 5.5 1.1 3.4 3.7 3.5 7 .3 6.9-6.5 15.8-8.7 23-5.7 3.5 1.5 8.6 6.3 8.6 8.2 0 1.3-3.7 2.9-11.5 4.9-17.5 4.5-24.8 7.2-25.6 9.2-1.1 2.9 3.4 11.7 7.5 14.7 4 3 10.9 5.6 14.6 5.6 5 0 14.2-3.8 17.8-7.2 6.5-6.4 7.4-8.8 7-19.1-.3-8.3-.6-9.6-3.3-13.7-1.7-2.4-4.9-5.8-7.2-7.4-3.6-2.5-5.3-3-12-3.3-5.1-.2-9 .2-11.3 1zm27.4 24.5c.9 2.6-2.9 10.6-6.3 13.5-1.6 1.3-5 3-7.6 3.7-4.2 1.2-5.1 1.1-9.3-.6-2.9-1.2-5.5-3.3-7-5.4-2.2-3.2-2.2-3.5-.6-4.7 1-.7 2.6-1.3 3.7-1.3 1 0 3.3-.6 5-1.4 4.3-1.8 16.7-5.3 19.4-5.5 1.3-.1 2.4.6 2.7 1.7zM471.1 811.9c-.6 1-1.3 3.8-1.7 6.2-.4 2.4-1 4.8-1.4 5.4-.4.5-1.3 3.4-1.9 6.3-2.6 12.4-7.4 17.2-17 17.2-5.6 0-6.1.2-6.7 2.4-.3 1.4-.3 2.9 0 3.5 1.5 2.4 9.6 2.2 15.9-.4 1.6-.7 1.8-.4 1.5 2.6-.3 2.9.1 3.5 2.3 4.3 4.1 1.4 5.6.2 6.7-5.6.6-2.9 2.9-12.1 5.1-20.3 6.3-22.8 6.2-21.6.9-22.9-2.1-.5-3-.2-3.7 1.3zM580.8 816.2c-1.5 1.2-1.5 2.4-.1 14.6.8 7.3 1.2 15.2.9 17.6-.8 5.1-4.5 9.1-10.2 11.1-3.1 1-4 1.9-4.2 4-.2 1.5.1 3.2.6 3.7 1.7 1.7 8.6-1 12.2-4.7 4-4.1 5-4.4 5-1 0 2.9 3.6 4.3 6.8 2.6 2.2-1.2 2.2-2.1.2-13.6-.5-2.8-1.2-7.9-1.5-11.5-.4-3.6-1.3-10.4-2.2-15.3-1.4-7.8-1.7-8.7-3.7-8.7-1.2 0-2.9.6-3.8 1.2zM524.7 819.3c-.3.7-.8 6.3-1.2 12.4-.4 6.1-1.1 11.6-1.4 12.2-.6 1-11.8.5-30.1-1.2-1.8-.1-2.6.4-3.4 2.6-.6 1.7-.6 3 0 3.6.5.5 7 1.4 14.4 2 19.8 1.6 18.3.7 17.5 11-.3 4.7-.8 10.1-1.1 12-.5 3.2-.7 3.3-4.2 2.8-9-1.4-31.1-3-32.6-2.4-1 .4-1.6 1.8-1.6 3.6 0 2.8.1 2.9 6.8 3.4 3.7.2 10.5.9 15.2 1.5 16.3 2.1 23 2.1 24 .3.5-1 1.4-8.4 2-16.7.6-8.2 1.5-17.9 2-21.7 1.6-10.9 2.3-24.4 1.4-24.9-2.5-1.5-7.2-1.8-7.7-.5zM545.7 819.8c-3.5 3.8-1.2 10.2 3.7 10.2 2.5 0 6.6-3.8 6.6-6.1 0-5.1-7-7.8-10.3-4.1z" />
    </svg>
  )
  

  
  export default TwitterIcon
  
  