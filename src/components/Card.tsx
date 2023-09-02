import Box from "@mui/material/Box";
import "../styles/Card.css"

type CardProps = {
  title: string;
  description: string;
};

function Card({ title, description }: CardProps) {
  return (
    <Box sx={{boxShadow: 1, borderRadius:'15px'}} className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </Box>
  );
}

export default Card;
