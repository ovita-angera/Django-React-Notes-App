import PropTypes from 'prop-types';
import "../styles/Note.css";

const Note = ({ note, onDelete }) => {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")
    return (
        <div className="note-container">
            <h4 className="note-title">{note.title}</h4>
            <p className="note-content">{note.content}</p>
            <p className="note-date">{formattedDate}</p>
            <button 
                className="delete-button"
                onClick={() => onDelete(note.id)}
            >
                Delete
            </button>
        </div>
    )
}

Note.propTypes = {
    note: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Note