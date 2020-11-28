import React, {useState} from 'react'
import ReactJson from "react-json-view";

export const ErrorDisplay = (props: { error: Error }) => {
    let [details, setDetails] = useState(false)
    const error = props.error

    return (
        <div id={"error"}>
            <h3>An error has occurred</h3>
            {details ?
                <ReactJson src={{"error": error, "message": error.message, "stack trace": error.stack}} theme={"summerfruit:inverted"} iconStyle={"circle"}/> :
                <p>{error.message}</p>
            }
            <button onClick={() => {
                setDetails(!details)
            }}>
                {details ?
                    "Show Less" :
                    "Show More"
                }
            </button>
        </div>
    )
}
