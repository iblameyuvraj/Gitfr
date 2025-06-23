import React from 'react';
interface Props {
   fill?: string;
   size?: number;
   width?: number;
   height?: number;
}

const ChevronDownIcon = ({
   fill,
   size,
   width = 24,
   height = 24,
   ...props
}: Props) => {
   return (
      <svg
         fill="none"
         height={size || height || 24}
         viewBox="0 0 24 24"
         width={size || width || 24}
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path
            d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
         />
      </svg>
   );
};

const TagUserIcon = ({
   fill,
   size,
   width = 24,
   height = 24,
   ...props
}: Props) => {
   return (
      <svg
         fill="none"
         height={size || height}
         viewBox="0 0 24 24"
         width={size || width}
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path
            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
         />
         <path
            d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
         />
      </svg>
   );
};

const ServerIcon = ({fill, size, width = 24, height = 24, ...props}: Props) => {
   return (
      <svg
         fill="none"
         height={size || height}
         viewBox="0 0 24 24"
         width={size || width}
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path
            d="M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
         />
      </svg>
   );
};

const FlashIcon = ({fill, size, width = 24, height = 24, ...props}: Props) => {
   return (
      <svg
         fill="none"
         height={size || height}
         viewBox="0 0 24 24"
         width={size || width}
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path
            d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
         />
      </svg>
   );
};

const ActivityIcon = ({
   fill,
   size,
   width = 24,
   height = 24,
   ...props
}: Props) => {
   return (
      <svg
         data-name="Iconly/Curved/Activity"
         height={size || height || 24}
         viewBox="0 0 24 24"
         width={size || width || 24}
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <g
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
         >
            <path d="M6.918 14.854l2.993-3.889 3.414 2.68 2.929-3.78" />
            <path d="M19.668 2.35a1.922 1.922 0 11-1.922 1.922 1.921 1.921 0 011.922-1.922z" />
            <path d="M20.756 9.269a20.809 20.809 0 01.194 3.034c0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25 2.313-9.25 9.25-9.25a20.931 20.931 0 012.983.187" />
         </g>
      </svg>
   );
};

const ScaleIcon = ({fill, size, width = 24, height = 24, ...props}: Props) => {
   return (
      <svg
         fill="none"
         height={size || height}
         viewBox="0 0 24 24"
         width={size || width}
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
        <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.02 22 6.484 17.523 2 12 2Z"
      fill="#24292e"
    />
         
      </svg>
   );
};

export const icons = {
   chevron: <ChevronDownIcon fill="currentColor" size={16} />,
   scale: <ScaleIcon fill="var(--nextui-colors-warning)" size={30} />,
   activity: <ActivityIcon fill="var(--nextui-colors-secondary)" size={30} />,
   flash: <FlashIcon fill="var(--nextui-colors-primary)" size={30} />,
   server: <ServerIcon fill="var(--nextui-colors-success)" size={30} />,
   user: <TagUserIcon fill="var(--nextui-colors-error)" size={30} />,
};
