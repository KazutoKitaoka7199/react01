export const List = (props) => {
    const title = props.title;
    return (
        <div>
            <h4>{ title }</h4> {/* {} の中はJSが動作する*/}
            <div>リストです</div>
        </div>
    )
}

//別の書き方
// export const List = ({ title }) => {
//     return (
//         <div>
//             <h4>{ title }</h4> {/* {} の中はJSが動作する*/}
//             <div>リストです</div>
//         </div>
//     )
// }