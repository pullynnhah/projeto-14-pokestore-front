import { ThreeDots } from 'react-loader-spinner';

function LoadSpinners(text, isDisable) {
    
    const load = (isDisable ? <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#FFFFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true} />
        : text);
        return(load);
};

export default LoadSpinners