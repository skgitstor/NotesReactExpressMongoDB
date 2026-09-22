const Notes = ({onNoteAdded}) => {

    const clickHandle = (e)=>{
        e.preventDefault();
        onNoteAdded();
    }
    return (<>
        <div className="container">
            All Notes...
        </div>
    </>);
}
export default Notes;