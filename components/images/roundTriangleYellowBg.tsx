import {
    Icon,
    IconProps,
  } from '@chakra-ui/react';
  
  const RoundTriangleYellowBg = (props: IconProps) => {
    return (
      <Icon
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="50" cy="50" r="50" fill="#FFFF00"/>
        <path d="M77.3256 52.3254L38.0814 74.983V29.6677L77.3256 52.3254Z" fill="black"/>
      </Icon>
    )
  }
  
  export default RoundTriangleYellowBg
  
  