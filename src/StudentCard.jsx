// Had to add this line for the code to work; was receiving an error for line 6: "'React' is not defined. eslint(no-undef)"
import React from 'react';

// This function receives the StudentCard props from its parent component in the App.jsx file
function StudentCard(props) {
// It's looking for name-imageUrl props that are destructured here but delineated in the App function on App.jsx, but note that below are React.useState is declared within this child component and private here
  const { name, major, year, bio, imageUrl } = props;
// In this const we see a named state (showBio) and a set state (setShowBio), as we as the establishment of the initial state (false)
  const [showBio, setShowBio] = React.useState(false);

// Here there is very concise boolean logic that uses the toggleBio const to change the default react state from the initial false (and back to true, and so on with every click), and works with the setShowBio const above and the onClick event below to determine what is returned with each click
  const toggleBio = () => {
    setShowBio(!showBio);
  };

// The following <div> returns a sort of default css state as well as an alt useState-driven change to what is displayed when showBio is toggled to true; the vast majority of the code is unaffected by the toggle button, but significantly the button alone changes
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
      />
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{major} – {year}</p>
{/* This button will flip the boolean logic onClick, and use the ternary operator below to alternate between two different button labels  */}
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
{/* This showBio element is a ternary operator that either renders as 'Hide Bio' and shows the Bio text, or merely shows the 'Show Bio' button */}
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
{/* This toggles bio as well as temporarily changes the margin and fontSize within the revealed Bio text, altering just two elements but shaping the overall look for improved design */}
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>}
    </div>
  );
}

// This export line exports this teplate to App.jsx where it fills the props, then main.jsx imports App.jsx and renders the HTML
export default StudentCard;
