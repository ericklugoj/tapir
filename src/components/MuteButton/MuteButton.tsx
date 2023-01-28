import { SpeakerHigh, SpeakerSlash } from 'phosphor-react';

import { useGlobalValues } from '../../context';

function MuteButton() {
  const { state, dispatch } = useGlobalValues();
  const { mute } = state;

  const handleClick = () => {
    dispatch({ type: 'setMute', payload: !mute });
  };

  return (
    <>
      {mute ? (
        <SpeakerSlash size={32} onClick={handleClick} />
      ) : (
        <SpeakerHigh size={32} onClick={handleClick} />
      )}
    </>
  );
}

export default MuteButton;
