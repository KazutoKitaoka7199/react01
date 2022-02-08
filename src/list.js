const LANGUAGES = [
    'Javascript',
    'C++',
    'Ruby',
    'Java',
    'PHP',
    'Go'
];

export const List = () => {
    return (
        <div>
            <h4></h4> {/* {} の中はJSが動作する*/}
            {
                LANGUAGES.map((lang,index)=>{
                    return <div key={index}>{lang}</div>
                })
            }
        </div>
    )
}

//別の書き方
// export const List = (props) => {
//     const title = props.title;
//     return (
//         <div>
//             <h4>{ title }</h4> {/* {} の中はJSが動作する*/}
//             <div>リストです</div>
//         </div>
//     )
// }