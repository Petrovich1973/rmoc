import RmocSide from "./RmocSide"
import RmocHeader from "./RmocHeader"

export default function Wrap(props) {
    return (
        <div>
            <RmocSide/>
            {props.children}
            <RmocHeader/>
        </div>
    )
}
