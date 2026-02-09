import React from 'react';
function StudentCard(props) {
//This function below creates a student card that allows different props to be fulfilled. These props include different info about a student
  const { name, major, year, bio, imageUrl } = props;
  const [showBio, setShowBio] = React.useState(false);
//It creates the name, major, year, bio and allows for images to be added to the student card.
  const toggleBio = () => {
    setShowBio(!showBio);
  };

  return (
    <div style={{
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
        //this creates the dimensions for the image and allows it to be circular.
      />
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{major} – {year}</p>
      <button onClick={toggleBio} style={{
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white'
      }}>
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>}
    </div>
  );
  //This allows for the bio to be hidden or shown depending on whether a button is clicked or not.
}

export default StudentCard;
