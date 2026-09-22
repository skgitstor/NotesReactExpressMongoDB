const Main = ({onNoteAdded}) => {

    const clickHandle = (e)=>{
        e.preventDefault();
        onNoteAdded();
    }
    return (<>
        <div className="container">
            <button onClick={(e) => { clickHandle(e) }}>Click</button>
        </div>
    </>);
}
export default Main;