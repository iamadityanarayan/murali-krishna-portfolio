import React from 'react'
import { Oval } from 'react-loader-spinner';

type Props = {}

const RoutesLoader = (props: Props) => {
  return (
    <>
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass="d-flex vh-100 justify-content-center w-100 align-items-center py-5"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </>
  );
}

export default RoutesLoader