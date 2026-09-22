const StarNote = ({onNoteAdded}) => {

    const clickHandle = (e)=>{
        e.preventDefault();
        onNoteAdded();
    }
    return (<>
        <div className="container">
           StarNotes...
        </div>
    </>);
}
export default StarNote;