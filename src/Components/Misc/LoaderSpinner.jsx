import { Triangle } from "react-loader-spinner";

const LoaderSpinner = () => {
    return (
        <div className="centered">
            <Triangle visible={true} height="130" width="130" color="#42c2f5" ariaLabel="triangle-loading" wrapperStyle={{}} wrapperClass="" />
        </div>
    );
};

export default LoaderSpinner;
