const Settings = ({onNoteAdded}) => {

    const clickHandle = (e)=>{
        e.preventDefault();
        onNoteAdded();
    }
    return (<>
        <div className="container">
            Settings...
        </div>
    </>);
}
export default Settings;