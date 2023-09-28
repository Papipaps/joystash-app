type Props = {
  img: string;
};

function CharacterIcon({ img }: Props) {
  return <img src={img} />;
}

export default CharacterIcon;
