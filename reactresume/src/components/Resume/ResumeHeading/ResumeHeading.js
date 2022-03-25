import './ResumeHeading.css'

const ResumeHeading = (props) => {
    return (
    <div className='resume-heading'>
        <div className='resume-main-heading'>
            <div className='heading-bullet'></div>
            <span>{props.heading ? props.heading : ''}</span>
            {props.fromDate && props.toDate ? (
                <span className='heading-date'>
                    {props.fromDate + "-" + props.toDate}
                </span>
            ) : (
                <span></span>
            )}
        </div>
        <div className='resume-sub-heading'>
            <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className='resume-heading-description'>
            <span>{props.description ? props.description : ""}</span>
        </div>
    </div>)
};

export default ResumeHeading