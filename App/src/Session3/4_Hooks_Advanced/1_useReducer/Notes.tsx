import React, { useReducer, useState, FormEvent, ChangeEvent } from 'react';

interface Note {
  id: number;
  note: string;
}

type Action =
  | { type: 'ADD'; payload: Note }
  | { type: 'DELETE'; payload: number }
  | { type: 'UPDATE'; payload: Note };

const actionType = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  UPDATE: 'UPDATE'
};

const initialNotes: Note[] = [
  {
    id: 1,
    note: 'Note 1'
  },
  {
    id: 2,
    note: 'Note 2'
  }
];

const reducer = (state: Note[], action: Action): Note[] => {
  switch (action.type) {
    case actionType.ADD:
      return [...state, action.payload];

    case actionType.DELETE:
      return state.filter(note => note.id !== action.payload);

    case actionType.UPDATE:
      const updatedNote = action.payload;
      return state.map((n: Note) => n.id === updatedNote.id ? updatedNote : n);

    default:
      return state;
  }
};

const Notes: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialNotes);
  const [note, setNote] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (note.trim()) {
      dispatch({ type: actionType.ADD, payload: { id: Date.now(), note } });
      setNote('');
    }
  };

  return (
    <div>
      <ul>
        {state.map(note => (
          <li key={note.id}>
            {note.note}
            <button onClick={() => dispatch({ type: actionType.DELETE, payload: note.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="New note"
          value={note}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNote(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Notes;